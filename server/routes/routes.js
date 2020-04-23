const express = require('express');
// const testRoute = require('./testRoute');
const productsRoutes = require('./products');
const testimonialsRoutes = require('./testimonials');
// const staffRoute = require('./staff');
// const aboutusRoutes = require('./aboutus');
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
    // return res.send('index');
  });
  // router.use('./aboutus', staffRoute(param));
  router.use;
  // router.use('/test', testRoute());
  router.use('/products', productsRoutes(param));
  router.use('/testimonials', testimonialsRoutes(param));
  return router;
};
