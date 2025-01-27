const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { commonService } = require("../services");

const addChat = catchAsync(async(req,res) => {
  const chat = await commonService.addChat(req.body);
  res.status(httpStatus.OK).send({success: true, chat});
});


const fetchUserChat = catchAsync(async(req,res) => {
  const fetchChat = await commonService.fetchChat(req.query);
  res.status(httpStatus.OK).send({success: true, fetchChat});
});

const addCarrer = catchAsync(async(req,res) => {
  const addCarrer = await commonService.addCarrer(req.body);
  res.status(httpStatus.OK).send({success: true, addCarrer});
});

const fetchUserCarrerPath = catchAsync(async(req,res) => {
  const addCarrerDetails = await commonService.fetchCarrerDetails(req.query);
  res.status(httpStatus.OK).send({success: true, addCarrerDetails});
});

const addVisaQueryData = catchAsync(async(req,res) => {
  console.log('addData12', req.body);
  const addVisaQuery = await commonService.addVisaQueryData(req.body);
  res.status(httpStatus.OK).send({success: true, addVisaQuery});
});

const fetchUserVisaQuery = catchAsync(async(req,res) => {
  const fetchUserVisaQuery = await commonService.fetchUserVisaQuery(req.query);
  res.status(httpStatus.OK).send({success: true, fetchUserVisaQuery});
});

const addUniversityAssesment = catchAsync(async(req,res) => {
  console.log('addData12', req.body);
  const addUniversityAssesment = await commonService.addUniversityAssesment(req.body);
  res.status(httpStatus.OK).send({success: true, addUniversityAssesment});
});

const fetchUniversityAssesment = catchAsync(async(req,res) => {
  const fetchUniversityAssesment = await commonService.fetchUserUniversityAssesment(req.query);
  res.status(httpStatus.OK).send({success: true, fetchUniversityAssesment});
});

const addNews = catchAsync(async(req,res) => {
  const news = await commonService.addNews(req.body);
  res.status(httpStatus.OK).send({success: true, news});
});

const fetchNews = catchAsync(async(req,res) => {
  const news = await commonService.fetchNews(req.query);
  res.status(httpStatus.OK).send({success: true, news});
});

module.exports = {
  addChat,
  fetchUserChat,
  addCarrer,
  fetchUserCarrerPath,
  addVisaQueryData,
  fetchUserVisaQuery,
  addUniversityAssesment,
  fetchUniversityAssesment,
  addNews,
  fetchNews
};