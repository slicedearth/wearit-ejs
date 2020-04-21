const express = require('express');
const router = express.Router();

module.exports = (param) => {
  const { testimonialService } = param;
  router.get('/', async (req, res) => {
    const testimonialList = await testimonialService.getList();
    try {
      return res.render('testimonials', {
        page: 'Testimonials',
        testimonialList,
        success: req.query.success,
      });
    } catch (err) {
      return next(err);
    }
  });

  router.post('/', async (req, res, next) => {
    const testimonialList = await testimonialService.getList();
    try {
      const tmName = req.body.tmName.trim();
      const tmTitle = req.body.tmTitle.trim();
      const tmMessage = req.body.tmMessage.trim();

      if (!tmName || !tmTitle || !tmMessage) {
        return res.render('testimonials', {
          page: 'Testimonials',
          error: true,
          tmName,
          tmTitle,
          tmMessage,
          testimonialList,
        });
      }
      await testimonialService.addEntry(tmName, tmTitle, tmMessage);
      return res.redirect('/testimonials?success=true');
    } catch (err) {
      return next(err);
    }
  });
  return router;
};
