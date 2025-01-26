const allRoles = {
  user: [],
  admin: ['users', 'userById', 'fetchUserCarrerWay', 'fetchUserChat', 'fetchUserVisaQuery', 'fetchUniversityAssesment'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
