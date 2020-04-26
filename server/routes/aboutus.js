const express = require('express');
const router = express.Router();

module.exports = (param) => {
  const { aboutService } = param;
  router.get('/', async (req, res) => {
    const aboutList = await aboutService.getList();
    try {
      return res.render('aboutus', {
        page: 'About Us',
        aboutList,
      });
    } catch (err) {
      return next(err);
    }
  });
  return router;
};
