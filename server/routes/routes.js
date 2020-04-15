const express = require('express');
const testRoute = require('./testRoute');
const productsRoute = require('./products.js');
const testimonialsRoute = require('./testimonials.js');
const router = express.Router();

module.exports = (param) => {
  const { productService } = param;
  router.get('/', (req, res) => {
    const productsList = await productService.getList();
    return res.send('index', {
      page: 'Home',
      productsList
    });
  });
  router.use('/test', testRoute());
  router.use('/products', productsRoute(param));
  router.use('/testimonials', testimonialsRoute(param));
  return router;
};
