const httpStatus = require('http-status');
const { User, Otp } = require('../models');
const ApiError = require('../utils/ApiError');
const logger = require('../config/logger');
const emailService  = require('./email.service');

const createUser = async (userBody) => {
  logger.info(`userBody data ======> ${JSON.stringify(userBody)}`);
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  if (await User.isPhoneNumberTaken(userBody.phoneNumber)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'PhoneNumber already taken');
  }
  const emailSentCode = await emailService.sendVerificationEmail(userBody.email);
  const otpObject = {
    otp: emailSentCode,
    email: userBody.email,
    method: 'sign-up',
    lastOtpSentTime: new Date(),
    name: userBody.name,
    phoneNumber: userBody.phoneNumber
  };
  await Otp.create(otpObject);
};

const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

const getUserById = async (id) => {
  return User.findById(id);
};

const getUserByEmail = async (email) => {
  return User.findOne({ email });
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
  createUser,
  queryUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
};
