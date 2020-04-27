const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class TestimonialService {
  constructor(datafile) {
    this.datafile = datafile;
  }
  // ADDS TESTIMONIAL ENTRY
  async addEntry(name, title, message) {
    const data = await this.getData();
    data.unshift({ name, title, message });
    return writeFile(this.datafile, JSON.stringify(data));
  }
  // TESTIMONIAL DATA
  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    if (!data) {
      return [];
    }
    return JSON.parse(data);
  }
  // TESTIMONIAL LIST
  async getList() {
    const data = await this.getData();
    return data;
  }
}
module.exports = TestimonialService;
