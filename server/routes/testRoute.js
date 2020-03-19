const express = require('express');
const router = express.Router();
module.exports = param => {
  router.get('/', (req, res) => {
    return res.send('Test Page');
  });
  return router;
};
