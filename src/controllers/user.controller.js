const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');

const fetchUser = catchAsync(async (req, res) => {
  const users = await userService.fetchUser();
  res.status(httpStatus.OK).send({success: true, users});
});

const fetchUserById = catchAsync(async (req, res) => {
  const user = await userService.fetchUserById(req.params.id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.status(httpStatus.OK).send({success: true, user});
});

module.exports = {
  fetchUser,
  fetchUserById
};
