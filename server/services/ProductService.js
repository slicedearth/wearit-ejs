const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

class ProductService {
  constructor(datafile) {
    this.datafile = datafile;
  }
  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    if (!data) {
      return [];
    }
    return JSON.parse(data);
  }
  async getCategories() {
    const data = await this.getData();
    // console.log(data);
    return data.categories;
  }
  async getList() {
    const data = await this.getData();
    // console.log(data);
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
  async getProduct(shortname) {
    const data = await this.getData();
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
  async getProductCategory(prodCat) {
    const data = await this.getData();
    const products = data.products;
    const searchArray = products.filter((searchArray) => {
      // console.log(searchArray.category);
      return searchArray.shortCat === prodCat;
    });
    // if (!searchArray) {
    //   return null;
    // } else {
    // console.log(searchArray[1].name);
    // searchArray.forEach((product) => {
    //   console.log(product.name);
    //   return {
    //     name: product.name,
    //     shortname: product.shortname,
    //     category: product.category,
    //     shortCat: product.shortCat,
    //     description: product.description,
    //     image: product.image,
    //   };
    // });
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
