const { chatModel, carrerPathWayModel, visaQueryModel, universityAssesmentModel } = require("../models")

const addChat = async(user) => {
  const addChat = await chatModel.create(user);
  await userModel.findOneAndUpdate({_id: user.userId}, {isChatBotUsed: true}, {new: true})
  return addChat;
};

const fetchChat = async(query) => {
  const fetchChat = await chatModel.find({userId: query.id});
  return fetchChat;
};

const addCarrer =  async(carrerPathData) => {
  const addUserCarrerData = await carrerPathWayModel.create(carrerPathData);
  await userModel.findOneAndUpdate({_id: user.userId}, {isCarrerPathwayAssesmentUsed: true}, {new: true})

  return addUserCarrerData;
};

const fetchCarrerDetails = async(query) => {
  const fetchCarrerDetails = await carrerPathWayModel.find({userId: query.id});
  return fetchCarrerDetails;
};

const addVisaQueryData = async(visaQueryData) => {
  const addVisaQueryData = await visaQueryModel.create(visaQueryData);
  await userModel.findOneAndUpdate({_id: user.userId}, {isVisaQueryAssesmentUsed: true}, {new: true})

  return addVisaQueryData;
};

const fetchUserVisaQuery = async(query) => {
  const fetchCarrerDetails = await visaQueryModel.find({userId: query.id});
  return fetchCarrerDetails;
};

const addUniversityAssesment = async(assesmentData) => {
  const addUniversityAssesment = await universityAssesmentModel.create(assesmentData);
  await userModel.findOneAndUpdate({_id: user.userId}, {isUniversityAssesmentUsed: true}, {new: true})

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