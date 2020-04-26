const path = require('path');
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
