const express = require('express');
const productsRoutes = require('./products');
const testimonialsRoutes = require('./testimonials');
const aboutRoute = require('./aboutus');
const router = express.Router();

module.exports = (param) => {
  const { productService } = param;
  // GETS HOME PAGE
  router.get('/', async (req, res, next) => {
    const productsList = await productService.getList();
    const productCategories = await productService.getCategories();
    return res.render('index', {
      page: 'Home',
      productsList,
      productCategories,
    });
  });

  router.use('/products', productsRoutes(param));
  router.use('/testimonials', testimonialsRoutes(param));
  router.use('/aboutus', aboutRoute(param));

  return router;
};
