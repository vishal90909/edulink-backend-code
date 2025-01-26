const { chatModel, carrerPathWayModel, visaQueryModel, universityAssesmentModel, User } = require("../models")

const addChat = async(user) => {
  console.log('user12', user);
  const addChat = await chatModel.create(user);
  await User.findOneAndUpdate({_id: user.userId}, {isChatBotUsed: true}, {new: true})
  return addChat;
};

const fetchChat = async(query) => {
  const fetchChat = await chatModel.find({userId: query.id});
  return fetchChat;
};

const addCarrer =  async(carrerPathData) => {
  const addUserCarrerData = await carrerPathWayModel.create(carrerPathData);
  await User.findOneAndUpdate({_id: carrerPathData.userId}, {isCarrerPathwayAssesmentUsed: true}, {new: true})

  return addUserCarrerData;
};

const fetchCarrerDetails = async(query) => {
  const fetchCarrerDetails = await carrerPathWayModel.find({userId: query.id});
  return fetchCarrerDetails;
};

const addVisaQueryData = async(visaQueryData) => {
  const addVisaQueryData = await visaQueryModel.create(visaQueryData);
  await User.findOneAndUpdate({_id: visaQueryData.userId}, {isVisaQueryAssesmentUsed: true}, {new: true})

  return addVisaQueryData;
};

const fetchUserVisaQuery = async(query) => {
  const fetchCarrerDetails = await visaQueryModel.find({userId: query.id});
  return fetchCarrerDetails;
};

const addUniversityAssesment = async(assesmentData) => {
  const addUniversityAssesment = await universityAssesmentModel.create(assesmentData);
  await User.findOneAndUpdate({_id: assesmentData.userId}, {isUniversityAssesmentUsed: true}, {new: true})

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