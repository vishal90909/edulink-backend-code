const { chatModel, carrerPathWayModel, visaQueryModel, universityAssesmentModel } = require("../models")

const addChat = async(user) => {
  const addChat = await chatModel.create(user);
  return addChat;
};

const fetchChat = async(id) => {
  const fetchChat = await chatModel.find({userId: id});
  return fetchChat;
};

const addCarrer =  async(carrerPathData) => {
  const addUserCarrerData = await carrerPathWayModel.create(carrerPathData);
  return addUserCarrerData;
};

const fetchCarrerDetails = async(id) => {
  const fetchCarrerDetails = await carrerPathWayModel.find({userId: id});
  return fetchCarrerDetails;
};

const addVisaQueryData = async(visaQueryData) => {
  const addVisaQueryData = await visaQueryModel.create(visaQueryData);
  return addVisaQueryData;
};

const fetchUserVisaQuery = async(id) => {
  const fetchCarrerDetails = await visaQueryModel.find({userId: id});
  return fetchCarrerDetails;
};

const addUniversityAssesment = async(assesmentData) => {
  const addUniversityAssesment = await universityAssesmentModel.create(assesmentData);
  return addUniversityAssesment;
};

const fetchUserUniversityAssesment = async(id) => {
  const fetchUserUniversityAssesment = await universityAssesmentModel.find({userId: id});
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