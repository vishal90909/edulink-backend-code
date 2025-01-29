const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { User, Otp } = require('../models');
const logger = require('../config/logger');
const emailService  = require('./email.service');

const createUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  };
  if (await User.isPhoneNumberTaken(userBody.phoneNumber)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'PhoneNumber already taken');
  };
  const emailSentCode = await emailService.sendVerificationEmail(userBody.email);
  console.log('emailSentCode', emailSentCode);
  const otpObject = {
    otp: emailSentCode,
    email: userBody.email,
    method: 'sign-up',
    lastOtpSentTime: new Date(),
    name: userBody.name,
    phoneNumber: userBody.phoneNumber
  };
  await Otp.create(otpObject);
  
  return;
};

const fetchUser = async () => {
  return User.find({
    role: 'user'
  });
};

const fetchUserById = async (userId) => {
  return User.findOne({ _id: userId });
};


const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

const adminLogin = async (userBody) => {
  console.log(userBody);
  if (!await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.status.BAD_REQUEST, 'email does not match');
  };
  const userData = await User.findOne({email: userBody.email})
  if(userData.role !== 'admin') {
    throw new ApiError(400, 'user should be admin');
  }

  if (!await User.isPasswordCorrect(userBody.email, userBody.password)) {
    throw new ApiError(httpStatus.status.BAD_REQUEST, 'password does not match');
  };

  return User.findOne({email: userBody.email});
};

const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

const getUserById = async (id) => {
  return User.findById(id);
};

const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};
module.exports = {
  deleteUserById,
  updateUserById,
  queryUsers,
  fetchUser,
  fetchUserById,
  adminLogin,
  getUserByEmail,
  createUser
};
