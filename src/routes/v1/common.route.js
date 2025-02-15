const express = require('express');
const { chatController } = require('../../controllers');
const auth = require('../../middlewares/auth');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dw2jpw0jt',
  api_key: '299723729445816',
  api_secret: 'd2ss2hEYXt-ZYR5xa0GGGIfALDI'
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Name of the folder in Cloudinary
    format: async (req, file) => 'jpg', // Set file format (optional)
    public_id: (req, file) => file.originalname.split('.')[0], // Set file name
  },
});

// Set up multer
const upload = multer({ storage });

const router = express.Router();

// bot api
router.post('/addChat', chatController.addChat);
router.get('/fetchUserChat', auth('fetchUserChat'), chatController.fetchUserChat);

// carrerPathway
router.post('/addCarrerPath', chatController.addCarrer);
router.get('/fetchUserCarrerWay', auth('fetchUserCarrerWay'), chatController.fetchUserCarrerPath);

// visa query 
router.post('/addVisaQueryData', chatController.addVisaQueryData);
router.get('/fetchUserVisaQuery', auth('fetchUserVisaQuery'), chatController.fetchUserVisaQuery);

// university - courses Assesment
router.post('/addUniversityAssesment', chatController.addUniversityAssesment);
router.get('/fetchUniversityAssesment', auth('fetchUniversityAssesment'), chatController.fetchUniversityAssesment);

router.post('/addNews', auth('addNews'), upload.single('image'), chatController.addNews);
router.get('/fetchNews', auth('fetchNews'), chatController.fetchNews);
router.get('/fetchNewsDetails', chatController.fetchNewsDetails);

module.exports = router;
