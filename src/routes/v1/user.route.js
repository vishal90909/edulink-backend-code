const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.get('/', auth('users'),  userController.fetchUser);
router.get('/:id', auth('userById'), userController.fetchUserById);

module.exports = router;
