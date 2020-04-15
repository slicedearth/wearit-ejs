// IMPORTS
const express = require('express');
const httpErrors = require('http-errors');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const configs = require('./config');
const ProductService = require('./services/ProductService');
const TestimonialService = require('./services/TestimonialService');
// PLACES EXPRESS INTO APP VARIABLE
const app = express();
// SETS PORT VARIABLE TO 3000
const port = 3000;
const productService = new ProductService(config.data.products);
const testimonialService = new TestimonialService(config.data.testimonials);
// CREATE ROUTES FOR EVERYTHING IN THE PUBLIC FOLDER
app.use(express.static('public'));

app.use(
  '/',
  routes({
    productService: productService,
    testimonialService: testimonialService,
  })
);
// SETS THE RENDER ENGINE TO EJS
app.set('view-engine', 'ejs');
// STORES THE ENVIRONMENT FROM CONFIG.JS IN CONFIGS VARIABLE
const config = configs[app.get('env')];
// ADDS WHITESPACE TO HTML IF IN DEVELOPMENT ENVIRONMENT
if (app.get('env') === 'development') {
  app.locals.pretty = true;
}
app.set('views', path.join(__dirname, './views'));
app.use(bodyParser.urlencoded({ extended: true }));
// HTTP-ERRORS MIDDLEWARE
app.use((req, res, next) => {
  return next(httpErrors(404, 'File Not Found'));
});
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  const status = err.status || 500;
  res.locals.status = status;
  res.locals.err = app.get('env') === 'development' ? err : {};
  res.status(status);
  res.send(err);
});
// STARTS SERVER
app.listen(port, () => console.log(`Server started on port ${port}!`));
