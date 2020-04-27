const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

class ProductService {
  constructor(datafile) {
    this.datafile = datafile;
  }
  //ALL PRODUCT DATA
  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    if (!data) {
      return [];
    }
    return JSON.parse(data);
  }
  // CATEGORIES DATA
  async getCategories() {
    const data = await this.getData();
    // RETURNS ONLY CATEGORIES PROM DATA
    return data.categories;
  }

  // PRODUCT DATA LIST
  async getList() {
    const data = await this.getData();
    // MAPS DATA
    return data.products.map((product) => {
      return {
        name: product.name,
        shortname: product.shortname,
        category: product.category,
        shortCat: product.shortCat,
        description: product.description,
        image: product.image,
      };
    });
  }
  // INDIVIDUAL PRODUCT DATA
  async getProduct(shortname) {
    const data = await this.getData();
    // FINDS INDIVIDUAL PRODUCT BASED ON SHORTNAME
    const product = data.products.find((product) => {
      return product.shortname === shortname;
    });
    if (!product) {
      return null;
    } else {
      return {
        name: product.name,
        shortname: product.shortname,
        category: product.category,
        shortCat: product.shortCat,
        description: product.description,
        image: product.image,
      };
    }
  }
  // PRODUCT CATEGORY DATA
  async getProductCategory(prodCat) {
    const data = await this.getData();
    const products = data.products;
    // FILTERS OUT PRODUCTS THAT FALL UNDER A DIFFERENT CATEGORY THAN THE ONE SELECTED
    const searchArray = products.filter((searchArray) => {
      return searchArray.shortCat === prodCat;
    });
    // MAPS THE DATA THAT REMAINS
    return searchArray.map((product) => {
      return {
        name: product.name,
        shortname: product.shortname,
        category: product.category,
        shortCat: product.shortCat,
        description: product.description,
        image: product.image,
      };
    });
  }
}
module.exports = ProductService;
