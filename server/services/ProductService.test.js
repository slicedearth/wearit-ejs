const ProductService = require('./ProductService');
const configs = require('../config');
const config = configs['development'];
const ps = new ProductService(config.data.products);

test('Test of getData() to ensure that the correct data is being passed through.', async () => {
  const data = await ps.getData();
  expect(data).toStrictEqual([
    {
      name: 'T-Shirt',
      shortname: 't_shirt',
      category: 'Lorem Ipsum',
      shortCat: 'lorem_ipsum',
      description: 'Other reconstruction of other facial bone',
      image: 'tshirt.jpg',
    },
    {
      name: 'Jacket',
      shortname: 'jacket',
      category: 'Lorem Ipsum',
      shortCat: 'lorem_ipsum',
      description:
        'Open reduction of fracture without internal fixation, femur',
      image: 'jacket.jpg',
    },
    {
      name: 'Dress',
      shortname: 'dress',
      category: 'Lorem Ipsum',
      shortCat: 'lorem_ipsum',
      description: 'Synovectomy, other specified sites',
      image: 'dress.jpg',
    },
    {
      name: 'Cargo Pants',
      shortname: 'cargo_pants',
      category: 'Lorem Ipsum',
      shortCat: 'lorem_ipsum',
      description: 'Disarticulation of wrist',
      image: 'cargopants.jpg',
    },
    {
      name: 'Jeans',
      shortname: 'jeans',
      category: 'Lorem Ipsum',
      shortCat: 'lorem_ipsum',
      description: 'Removal of ocular implant',
      image: 'jeans.jpg',
    },
    {
      name: 'Jumper',
      shortname: 'jumper',
      category: 'Lorem Ipsum',
      shortCat: 'lorem_ipsum',
      description: 'Endoscopic removal of stone(s) from pancreatic duct',
      image: 'jumper.jpg',
    },
    {
      name: 'Skirt',
      shortname: 'skirt',
      category: 'Lorem Ipsum',
      shortCat: 'lorem_ipsum',
      description: 'Resection of vessel with anastomosis, unspecified site',
      image: 'skirt.jpg',
    },
    {
      name: 'Sandals',
      shortname: 'sandals',
      category: 'Dolor Sit',
      shortCat: 'dolor_sit',
      description:
        'Endoscopic insertion or replacement of bronchial valve(s), single lobe',
      image: 'sandals.jpg',
    },
    {
      name: 'Runners',
      shortname: 'runners',
      category: 'Dolor Sit',
      shortCat: 'dolor_sit',
      description: 'Other diagnostic procedures on ureter',
      image: 'runners.jpg',
    },
    {
      name: 'Boots',
      shortname: 'boots',
      category: 'Dolor Sit',
      shortCat: 'dolor_sit',
      description: 'Removal of implanted devices from bone, patella',
      image: 'boots.jpg',
    },
    {
      name: 'Baseball Cap',
      shortname: 'baseball_cap',
      category: 'Amet Consectetur',
      shortCat: 'amet_consectetur',
      description: 'Excision of intervertebral disc',
      image: 'baseballcap.jpg',
    },
    {
      name: 'Beanie',
      shortname: 'beanie',
      category: 'Amet Consectetur',
      shortCat: 'amet_consectetur',
      description: 'Excision of anus',
      image: 'beanie.jpg',
    },
    {
      name: 'Cowboy Hat',
      shortname: 'cowboy_hat',
      category: 'Amet Consectetur',
      shortCat: 'amet_consectetur',
      description: 'Reattachment of tendon',
      image: 'cowboyhat.jpg',
    },
    {
      name: 'Top Hat',
      category: 'Amet Consectetur',
      shortCat: 'amet_consectetur',
      description: 'Lysis of intraluminal adhesions of ureter',
      image: 'tophat.jpg',
    },
    {
      name: 'Slippers',
      shortname: 'shorts',
      category: 'Dolor Sit',
      shortCat: 'dolor_sit',
      description: 'Cyclophotocoagulation',
      image: 'slippers.jpg',
    },
  ]);
  console.log(data);
});
