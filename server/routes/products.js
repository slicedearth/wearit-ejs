const express = require('express');
const router = express.Router();

module.exports = (param) => {
  const { productService } = param;
  router.get('/', async (req, res) => {
    const productsList = await productService.getList();
    const artwork = await productService.getAllArtwork();
    return res.render('speakers', {
      page: 'All Speakers',
      speakersList,
      artwork: artwork,
    });
  });
  router.get('/:name', async (req, res) => {
    try {
      const promises = [];
      promises.push(speakerService.getSpeaker(req.params.name));
      promises.push(speakerService.getArtworkForSpeaker(req.params.name));
      const result = await Promise.all(promises);
      return res.render('speakerDetails', {
        page: req.params.name,
        speaker: result[0],
        artwork: result[1],
      });
    } catch (err) {
      return next(err);
    }
  });
  return router;
};
