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
    const data = await this.getData();
    const productCategory = data.products.filter((productCategory) => {
      return productCategory.category === category;
    });

    if (!productCategory) {
      return null;
    } else {
      return {
        name: productCategory.name,
        shortname: productCategory.shortname,
        category: productCategory.category,
        shortCat: productCategory.shortCat,
        description: productCategory.description,
        image: productCategory.image,
      };
    }
  }
}
module.exports = ProductService;
