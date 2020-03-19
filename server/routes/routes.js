const express = require('express');
const testRoute = require('./testRoute');
const router = express.Router();

module.exports = param => {
  router.get('/', (req, res) => {
    return res.send('Home Page');
  });
  router.use('/test', testRoute());
  return router;
};
