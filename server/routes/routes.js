const express = require('express');
const testRoute = require('./testRoute');
const productsRoute = require('./products');
const testimonialsRoute = require('./testimonials');
// const staffRoute = require('./staff');
const router = express.Router();

module.exports = (param) => {
  const { productService } = param;
  router.get('/', async (req, res, next) => {
    const productsList = await productService.getList();
    const productCategories = await productService.getCategories();
    return res.render('index', {
      page: 'Home',
      productsList,
      productCategories,
    });
  });
  // router.use('./aboutus', staffRoute(param));
  router.use('/test', testRoute());
  router.use('/products', productsRoute(param));
  router.use('/testimonials', testimonialsRoute(param));
  return router;
};
