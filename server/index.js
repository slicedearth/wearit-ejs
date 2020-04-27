// IMPORTS
const express = require('express');
const httpErrors = require('http-errors');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const configs = require('./config');
const ProductService = require('./services/ProductService');
const TestimonialService = require('./services/TestimonialService');
const AboutService = require('./services/AboutService');

// LOADS EXPRESS
const app = express();

// SETS PORT VARIABLE TO 3000
const port = 3000;

// STORES THE ENVIRONMENT FROM CONFIG.JS IN CONFIGS VARIABLE
const config = configs[app.get('env')];
// LINKS PRODUCTSERVICE TO PRODUCTS DATA
const productService = new ProductService(config.data.products);
// LINKS TESTIMONIALSERVICE TO TESTIMONIALS DATA
const testimonialService = new TestimonialService(config.data.testimonials);
// LINKS ABOUTSERVICE TO ABOUT DATA
const aboutService = new AboutService(config.data.about);

// CREATES ROUTES FOR EVERYTHING IN THE PUBLIC FOLDER
app.use(express.static('public'));

// BODYPARSER MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));

// SETS THE RENDER ENGINE TO EJS
app.set('view engine', 'ejs');

// ADDS WHITESPACE TO HTML IF IN A DEVELOPMENT ENVIRONMENT
if (app.get('env') === 'development') {
  app.locals.pretty = true;
}

app.set('views', path.join(__dirname, './views'));

//GETS THE CATEGORY NAMES FOR THE DROPDOWN MENU
app.use(async (req, res, next) => {
  try {
    const categories = await productService.getCategories();
    res.locals.productCategories = categories;
    return next();
  } catch (err) {
    return next(err);
  }
});

// SETS PARAMS FOR ROUTES
app.use(
  '/',
  routes({
    productService: productService,
    testimonialService: testimonialService,
    aboutService: aboutService,
  })
);

// HTTP-ERRORS MIDDLEWARE -- RENDERS ERROR PAGE WHEN SOMETHING GOES WRONG
app.use((req, res, next) => {
  return next(httpErrors(404, 'File Not Found'));
});
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  const status = err.status || 500;
  res.locals.status = status;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(status);
  return res.render('error', {
    page: 'Error',
  });
});

// LOADS SERVER ON PORT DECLARED IN PORT VARIABLE
app.listen(port, () => console.log(`Server started on port ${port}!`));
module.export = app;
