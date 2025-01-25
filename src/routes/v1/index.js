const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const commonRoute = require('./common.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/common',
    route: commonRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
