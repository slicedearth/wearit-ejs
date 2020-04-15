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
    return JSON.parse(data).products;
  }
  async getCategories() {
    const data = await this.getData();
    return data.map((product) => {
      return { category: product.category, shortCat: product.shortCat };
    });
  }
  async getList() {
    const data = await this.getData();
    return data.map((product) => {
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
    const product = data.find((product) => {
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
}
module.exports = ProductService;
