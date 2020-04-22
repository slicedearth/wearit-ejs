const ProductService = require('./ProductService');
const configs = require('../config');
const config = configs['development'];
const ps = new ProductService(config.data.products);

test('Test of the ProductService getData() function to ensure that the correct product data is being passed through.', async () => {
  const data = await ps.getData();
  expect(data).toStrictEqual([
    {
      name: 'T-Shirt',
      shortname: 't_shirt',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Fusce consequat quis velit vitae commodo. Curabitur imperdiet egestas mi, eget eleifend urna varius a. Quisque auctor pellentesque mi a tempor. Nullam efficitur ligula suscipit nisi lacinia, vitae fringilla neque maximus. Vivamus orci dolor, consequat ac neque quis, ullamcorper tristique ligula. Morbi hendrerit metus dui, et ornare orci faucibus et. Aliquam elementum congue purus vitae dapibus. Nunc vel venenatis nibh, id vehicula libero. Sed scelerisque eu neque et dictum. Nam placerat ante ut commodo lacinia. Etiam et enim vel dolor pulvinar dignissim eu at leo. Praesent eu orci eu leo fermentum fermentum. Aenean convallis nibh arcu, vel tempus felis lobortis non. Sed non porttitor velit, quis gravida justo. Phasellus vitae sem mi. Aenean ut neque sed elit consectetur auctor.',
      image: 'tshirt.jpg',
    },
    {
      name: 'Jacket',
      shortname: 'jacket',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Nulla ac tortor gravida, sodales orci eget, tristique sem. Praesent commodo sem quis sollicitudin feugiat. Vivamus nulla nisi, pharetra nec viverra sit amet, imperdiet eget felis. Mauris a sapien ut magna pulvinar semper at quis odio. Mauris quis nisi vel orci congue venenatis. Praesent scelerisque elit sem, ut laoreet nibh placerat sagittis. Integer malesuada, mi at aliquet pulvinar, dui tortor venenatis velit, ac consequat sapien turpis sit amet nulla. Nulla eget augue feugiat, scelerisque libero a, mollis sem. Vivamus ultricies posuere est, eget ultrices enim vestibulum vestibulum. Morbi consectetur, ante et lacinia porta, lectus sapien sollicitudin tellus, at sollicitudin odio mauris ornare odio.',
      image: 'jacket.jpg',
    },
    {
      name: 'Dress',
      shortname: 'dress',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Maecenas vel pellentesque nisi, fermentum molestie sapien. Mauris at orci ut arcu ultrices vehicula. Morbi rhoncus leo at est rhoncus, a placerat nibh volutpat. Donec dapibus sodales purus, vitae commodo odio gravida in. Nullam ex mauris, imperdiet fermentum scelerisque at, varius quis mi. Suspendisse in nunc convallis velit facilisis dictum. Ut cursus in risus ac facilisis. Quisque cursus venenatis est. Nam ultrices eros nec elit condimentum vehicula. Cras aliquet ac nibh in pharetra. Fusce id nisi consequat, eleifend elit eu, tincidunt mi. Morbi at interdum magna. Morbi nec ex elit. Etiam vulputate vel purus sit amet blandit. Donec in sagittis enim, a interdum lorem.',
      image: 'dress.jpg',
    },
    {
      name: 'Cargo Pants',
      shortname: 'cargo_pants',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Duis ac viverra dolor. Aenean porta velit pharetra enim lacinia, a euismod mi bibendum. Integer nec rhoncus risus. Proin interdum viverra metus eu vestibulum. Sed non urna eget erat eleifend rhoncus vitae sed massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. In et ornare magna. Vestibulum sit amet quam urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ut sodales enim. Pellentesque sodales libero ut dictum ornare. Ut rutrum augue in leo consectetur, vitae aliquam eros bibendum. Fusce non pretium nunc. Aenean ut est eget nunc molestie tristique.',
      image: 'cargopants.jpg',
    },
    {
      name: 'Jeans',
      shortname: 'jeans',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Ut mattis purus eros, id dignissim nunc hendrerit ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ut lacinia elit. Donec urna tellus, facilisis eu luctus at, tincidunt vitae ligula. Vivamus congue massa tellus. Vestibulum mollis sem ac ex porta cursus. Nam interdum nisl a ligula dictum, ut feugiat lectus convallis. Vivamus id cursus ex. Suspendisse potenti. Nam libero ligula, scelerisque eget massa vel, interdum placerat leo. Nulla accumsan at sem ut fermentum. Proin ultrices massa vitae nunc eleifend efficitur. Nullam laoreet rhoncus neque, ac tempor neque commodo quis.',
      image: 'jeans.jpg',
    },
    {
      name: 'Jumper',
      shortname: 'jumper',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Suspendisse maximus, eros non viverra consectetur, ligula arcu fermentum odio, nec vulputate nibh diam ac arcu. In hac habitasse platea dictumst. Duis tempus turpis eget tortor dignissim dapibus. Suspendisse pellentesque vitae mi vel ornare. Vestibulum sit amet dolor vehicula purus gravida lobortis. Morbi ut dapibus elit. Proin tempus nulla massa, eget interdum tortor condimentum sed. Duis dapibus pretium suscipit. Nam nunc ligula, laoreet sed faucibus eget, eleifend eu ante. Vestibulum a libero varius, viverra turpis eget, lacinia velit. Praesent vitae lectus neque. Quisque tellus mauris, volutpat quis turpis et, scelerisque viverra eros. Nam sollicitudin libero et commodo facilisis. Aenean molestie eget tortor in eleifend. Fusce euismod nibh dolor, eu ullamcorper quam tristique vel.',
      image: 'jumper.jpg',
    },
    {
      name: 'Skirt',
      shortname: 'skirt',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Curabitur eget cursus purus. Aliquam pharetra maximus est, in rutrum tellus consequat nec. Proin hendrerit placerat felis in ultricies. Cras nec est at leo consectetur feugiat vel eu erat. Mauris risus enim, suscipit sed dignissim et, pulvinar et nulla. Aenean vestibulum lectus vitae blandit porta. Maecenas rutrum vitae risus vel suscipit. Vivamus ac ullamcorper diam. Quisque faucibus vulputate nisl, porttitor efficitur mi fringilla vitae. Sed ut imperdiet est.',
      image: 'skirt.jpg',
    },
    {
      name: 'Sandals',
      shortname: 'sandals',
      category: 'Footwear',
      shortCat: 'footwear',
      description:
        'Suspendisse sit amet aliquet magna, non venenatis purus. Nunc interdum consequat rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat dolor sit amet nunc egestas, a efficitur ex fermentum. Suspendisse potenti. Ut blandit, sapien nec euismod venenatis, risus felis ullamcorper arcu, faucibus fermentum nulla ante ut odio. Donec congue tempor neque. Pellentesque sed dolor at ante scelerisque porta non nec eros.',
      image: 'sandals.jpg',
    },
    {
      name: 'Runners',
      shortname: 'runners',
      category: 'Footwear',
      shortCat: 'footwear',
      description:
        'Mauris a magna nec velit sollicitudin venenatis. Phasellus et egestas lacus. Vivamus cursus tortor et magna sollicitudin varius. Nunc lacinia commodo cursus. Donec pharetra molestie nisl, tempor rutrum nisl lobortis vel. Nulla quis ullamcorper sapien, id euismod tortor. Nam ac massa vitae metus viverra pulvinar nec tincidunt arcu. Pellentesque nec efficitur est, nec ullamcorper elit. Nullam eu pretium ante, vel consectetur urna. Aliquam erat volutpat. Fusce sit amet placerat lectus, eu finibus nisi. Vestibulum viverra, sem nec placerat ullamcorper, turpis tellus cursus lacus, eu ullamcorper sapien ligula vel purus.',
      image: 'runners.jpg',
    },
    {
      name: 'Boots',
      shortname: 'boots',
      category: 'Footwear',
      shortCat: 'footwear',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam eu felis ligula. Ut commodo pretium feugiat. Phasellus quis ipsum scelerisque, auctor elit ut, porttitor est. Aliquam rhoncus nunc non mi tincidunt, fringilla viverra erat sagittis. Donec vitae purus ac nibh rhoncus tincidunt. Maecenas laoreet quam quis dui auctor condimentum. Phasellus sed eros non libero ullamcorper cursus non ac ante. Mauris et mattis diam, quis volutpat enim. Donec nec consectetur arcu. Morbi lobortis dolor non leo euismod, vitae iaculis ante laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar elit vitae nunc vestibulum, placerat consectetur tortor cursus.',
      image: 'boots.jpg',
    },
    {
      name: 'Baseball Cap',
      shortname: 'baseball_cap',
      category: 'Headwear',
      shortCat: 'headwear',
      description:
        'Cras nec finibus mauris. Nam vestibulum auctor ipsum, non feugiat lorem mollis vel. Curabitur rutrum facilisis enim a interdum. Curabitur condimentum, risus sed viverra pretium, nunc massa consectetur magna, quis sodales ipsum odio at nunc. Pellentesque sed ipsum leo. Pellentesque convallis velit mi, lacinia cursus diam congue sit amet. Donec sit amet tincidunt justo. Donec cursus finibus blandit. Duis a ornare arcu. Nulla tempor ipsum turpis, id blandit lorem venenatis sit amet. Sed congue posuere eros at pellentesque.',
      image: 'baseballcap.jpg',
    },
    {
      name: 'Beanie',
      shortname: 'beanie',
      category: 'Headwear',
      shortCat: 'headwear',
      description:
        'Donec lacinia orci ac diam placerat tempus. Sed in accumsan libero. Nulla facilisi. Proin commodo ullamcorper sapien eget varius. Aenean justo eros, sollicitudin sit amet tortor sit amet, lobortis consequat dolor. Donec porta facilisis nisl vel interdum. Sed facilisis velit et massa condimentum maximus. Fusce consectetur lorem leo, in ullamcorper odio volutpat ut. Donec ipsum augue, vestibulum et iaculis eget, commodo id justo. Nulla bibendum neque a massa commodo pellentesque.',
      image: 'beanie.jpg',
    },
    {
      name: 'Cowboy Hat',
      shortname: 'cowboy_hat',
      category: 'Headwear',
      shortCat: 'headwear',
      description:
        'Vestibulum porttitor, ante ac condimentum fermentum, nibh enim suscipit ligula, id faucibus urna metus vitae quam. Mauris vel erat vel libero volutpat pellentesque. Integer nec ultricies eros, in tincidunt tortor. Nam eu tincidunt justo. Integer nibh tortor, bibendum a tellus eu, semper bibendum nulla. Quisque semper, arcu gravida ornare pulvinar, lacus leo cursus massa, ac dignissim quam tellus a quam. Vivamus dignissim nisi porta purus varius tempor.',
      image: 'cowboyhat.jpg',
    },
    {
      name: 'Top Hat',
      category: 'Headwear',
      shortCat: 'headwear',
      description:
        'Sed vel metus rhoncus, hendrerit nulla et, consectetur massa. Nulla vel tempus libero. Morbi aliquet vel enim non finibus. Sed nunc nibh, condimentum et elit quis, semper pharetra quam. Nam efficitur augue et lectus faucibus vestibulum. Fusce ut tincidunt risus, non laoreet leo. Proin lectus tellus, tincidunt non feugiat a, finibus vel est. Nunc enim ex, condimentum ut malesuada tincidunt, imperdiet ut purus. Cras fringilla nisl eget rutrum vulputate. Aliquam malesuada scelerisque turpis eu efficitur.',
      image: 'tophat.jpg',
    },
    {
      name: 'Slippers',
      shortname: 'shorts',
      category: 'Footwear',
      shortCat: 'footwear',
      description:
        'Aenean scelerisque mauris sit amet lacus gravida, id sagittis nunc ornare. Etiam consectetur luctus nunc, sit amet feugiat tortor placerat eget. Vivamus mollis, lectus eu pretium rutrum, dolor lacus dictum purus, ac pretium velit est vitae odio. Praesent sit amet lacus auctor, aliquam elit elementum, facilisis mi. Vestibulum aliquam sapien ac mauris pulvinar, sed imperdiet quam vulputate. Nullam dapibus quam et tempor ornare. Nullam ipsum nunc, venenatis et nisl a, luctus tempor arcu. Cras ultricies arcu et sem elementum, et luctus risus euismod. In in est sagittis metus pellentesque posuere.',
      image: 'slippers.jpg',
    },
  ]);
  console.log(data);
});