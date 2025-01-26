const { chatModel, carrerPathWayModel, visaQueryModel, universityAssesmentModel } = require("../models")

const addChat = async(user) => {
  const addChat = await chatModel.create(user);
  return addChat;
};

const fetchChat = async(query) => {
  const fetchChat = await chatModel.find({userId: query.id});
  return fetchChat;
};

const addCarrer =  async(carrerPathData) => {
  const addUserCarrerData = await carrerPathWayModel.create(carrerPathData);
  return addUserCarrerData;
};

const fetchCarrerDetails = async(query) => {
  const fetchCarrerDetails = await carrerPathWayModel.find({userId: query.id});
  return fetchCarrerDetails;
};

const addVisaQueryData = async(visaQueryData) => {
  const addVisaQueryData = await visaQueryModel.create(visaQueryData);
  return addVisaQueryData;
};

const fetchUserVisaQuery = async(query) => {
  const fetchCarrerDetails = await visaQueryModel.find({userId: query.id});
  return fetchCarrerDetails;
};

const addUniversityAssesment = async(assesmentData) => {
  const addUniversityAssesment = await universityAssesmentModel.create(assesmentData);
  return addUniversityAssesment;
};

const fetchUserUniversityAssesment = async(query) => {
  const fetchUserUniversityAssesment = await universityAssesmentModel.find({userId: query.id});
  return fetchUserUniversityAssesment;
};


module.exports = {
  addChat,
  fetchChat,
  addCarrer,
  fetchCarrerDetails,
  addVisaQueryData,
  fetchUserVisaQuery,
  addUniversityAssesment,
  fetchUserUniversityAssesment
};