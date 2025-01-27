const allRoles = {
  user: [],
  admin: ['addNews', 'fetchNews', 'users', 'userById', 'fetchUserCarrerWay', 'fetchUserChat', 'fetchUserVisaQuery', 'fetchUniversityAssesment'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
