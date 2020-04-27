const path = require('path');

// CONFIG FILE -- CONNECTS DATA FILES TO PROJECT AND SETS CONFIGURATION DATA BASED ON ENVIRONMENT

module.exports = {
  development: {
    sitename: 'WearIt [Development]',
    data: {
      products: (path.join(__dirname), 'server/data/products.json'),
      testimonials: (path.join(__dirname), 'server/data/testimonials.json'),
      about: (path.join(__dirname), 'server/data/aboutus.json'),
    },
  },
  production: {
    sitename: 'WearIt',
    data: {
      products: (path.join(__dirname), 'server/data/products.json'),
      testimonials: (path.join(__dirname), 'server/data/testimonials.json'),
      about: (path.join(__dirname), 'server/data/aboutus.json'),
    },
  },
};
