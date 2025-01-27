const express = require('express');
const { chatController } = require('../../controllers');
const auth = require('../../middlewares/auth');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '/tmp'); // Save files to the `/tmp` directory
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  
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

module.exports = router;
