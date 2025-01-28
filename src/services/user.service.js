const { User } = require('../models');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

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

module.exports = {
  fetchUser,
  fetchUserById,
  adminLogin,
  getUserByEmail
};
