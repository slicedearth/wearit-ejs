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
  async getProductCategory(category) {
    // console.log(category);
    const data = await this.getData();
    const products = data.products;
    // console.log(products);
    // console.log(data);
    // const {products} = data.products
    // let searchArray = products.filter((item) => item.category === category);
    const searchArray = products.filter(function (e) {
      // console.log(e.category);
      return e.category === category;
    });

    // let searchArray = products.forEach((item) => item.category === category);
    // let searchArray = data.products.filter((item) => {
    //   item.category == category;
    // });

    if (!searchArray) {
      // console.log(searchArray);
      return null;
    } else {
      console.log(searchArray);
      // return products;
      return console.log('success');
      // const output = {
      //   name: data.products.name,
      //   shortname: data.products.shortname,
      //   category: data.products.category,
      //   shortCat: data.products.shortCat,
      //   description: data.products.description,
      //   image: data.products.image,
      // };
      // console.log(output);
      // return output;
      // return {
      //   name: productCategory.name,
      //   shortname: productCategory.shortname,
      //   category: productCategory.category,
      //   shortCat: productCategory.shortCat,
      //   description: productCategory.description,
      //   image: productCategory.image,
      // };
    }
  }
}
module.exports = ProductService;
