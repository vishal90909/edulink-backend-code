const express = require('express');
const { chatController } = require('../../controllers');

const router = express.Router();

// bot api
router.post('/addChat', chatController.addChat);
router.get('/fetchUserChat', chatController.fetchUserChat);

// carrerPathway
router.post('/addCarrerPath', chatController.addCarrer);
router.get('/fetchUserCarrerWay', chatController.fetchUserCarrerPath);

// visa query 
router.post('/addVisaQueryData', chatController.addVisaQueryData);
router.get('/fetchUserVisaQuery', chatController.fetchUserVisaQuery);

// university - courses Assesment
router.post('/addUniversityAssesment', chatController.addUniversityAssesment);
router.get('/fetchUniversityAssesment', chatController.fetchUniversityAssesment);

module.exports = router;
