const express = require('express');
const router = express.Router();
const _ = require('lodash');

module.exports = (param) => {
  // LOADS PRODUCTSERVICE INTO PARAM
  const { productService } = param;
  // GETS PRODUCTS PAGE
  router.get('/', async (req, res, next) => {
    // LOADS PRODUCT DATA
    const productsList = await productService.getList();
    return res.render('products', {
      page: 'All Products',
      productsList,
    });
  });
  // GETS PRODUCT CATEGORY PAGES
  router.get('/:category', async (req, res, next) => {
    try {
      // LOADS CATEGORY DATA BASED ON URL PARAM
      const productsList = await productService.getProductCategory(
        req.params.category
      );
      // RENDERS CATEGORY PAGE
      return res.render('products', {
        // CAPITALISES CATEGORY NAME
        page: _.startCase(req.params.name),
        productsList,
      });
    } catch (err) {
      return next(err);
    }
  });
  // GETS INDIVIDUAL PRODUCT PAGE
  router.get('/:category/:name', async (req, res, next) => {
    try {
      // LOADS PRODUCT BASED ON URL PARAM
      const product = await productService.getProduct(req.params.name);
      if (!product) {
        return next();
      }
      // RENDERS PRODUCT PAGE
      return res.render('product', {
        // CAPITALISES PRODUCT NAME AND REMOVES UNDERSCORES IN HEADER
        page: _.startCase(req.params.name),
        product,
      });
    } catch (err) {
      return next(err);
    }
  });
  return router;
};
