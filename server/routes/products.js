const express = require('express');
const router = express.Router();

module.exports = (param) => {
  const { productService } = param;

  router.get('/', async (req, res, next) => {
    const productsList = await productService.getList();
    return res.render('allproducts', {
      page: 'All Products',
      productsList,
    });
  });
  router.get('/:category', async (req, res, next) => {
    try {
      const promises = [];
      promises.push(productService.getList(req.params.name));
      promises.push(productService.getCategories(req.params.category));
      const result = await Promise.all(promises);
      if (!result[0]) {
        return next();
      }
      return res.render('products', {
        page: req.params.category,
        category: result[0],
        product: result[1],
      });
    } catch (err) {
      return next(err);
    }
    // return res.render(
    //   'products',
    //   { page: req.params.category },

    // );
  });
  router.get('/:category/:name', async (req, res, next) => {
    try {
      const promises = [];
      promises.push(productService.getProduct(req.params.name));
      const result = await Promise.all(promises);
      if (!result[0]) {
        return next();
      }
      return res.render('product', {
        page: req.params.name,
        product: result[0],
      });
    } catch (err) {
      return next(err);
    }
  });
  return router;
};
