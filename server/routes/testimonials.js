const express = require('express');
const router = express.Router();

module.exports = (param) => {
  // LOADS PRODUCTSERVICE INTO PARAM
  const { testimonialService } = param;

  // GETS TESTIMONIALS PAGE
  router.get('/', async (req, res) => {
    // LOADS TESTIMONIAL DATA
    const testimonialList = await testimonialService.getList();
    try {
      // RENDERS TESTIMONIALS PAGE
      return res.render('testimonials', {
        page: 'Testimonials',
        testimonialList,
        success: req.query.success,
      });
    } catch (err) {
      return next(err);
    }
  });

  // POSTS TESTIMONIAL DATA
  router.post('/', async (req, res, next) => {
    // LOADS EXISTING TESTIMONIALS DATA
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
      // ADDS NEW TESTIMONIAL DATA
      await testimonialService.addEntry(tmName, tmTitle, tmMessage);
      return res.redirect('/testimonials?success=true');
    } catch (err) {
      return next(err);
    }
  });
  return router;
};
