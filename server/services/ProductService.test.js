const ProductService = require('./ProductService');
const configs = require('../config');
const config = configs['development'];
const ps = new ProductService(config.data.products);

test('getProductCategory Clothing - Ensures that clothing data is being passed through correctly.', async () => {
  const categoryData = await ps.getProductCategory('clothing');
  expect(categoryData).toStrictEqual([
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
      name: 'Dress',
      shortname: 'dress',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Maecenas vel pellentesque nisi, fermentum molestie sapien. Mauris at orci ut arcu ultrices vehicula. Morbi rhoncus leo at est rhoncus, a placerat nibh volutpat. Donec dapibus sodales purus, vitae commodo odio gravida in. Nullam ex mauris, imperdiet fermentum scelerisque at, varius quis mi. Suspendisse in nunc convallis velit facilisis dictum. Ut cursus in risus ac facilisis. Quisque cursus venenatis est. Nam ultrices eros nec elit condimentum vehicula. Cras aliquet ac nibh in pharetra. Fusce id nisi consequat, eleifend elit eu, tincidunt mi. Morbi at interdum magna. Morbi nec ex elit. Etiam vulputate vel purus sit amet blandit. Donec in sagittis enim, a interdum lorem.',
      image: 'dress.jpg',
    },
    {
      name: 'Dress 2',
      shortname: 'dress_2',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Cras lobortis finibus nisl, sed vulputate lectus venenatis ac. Aenean aliquet, sapien sit amet iaculis finibus, nulla ligula vestibulum odio, sed condimentum orci sem eget justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vitae ante scelerisque, ultricies dolor a, euismod justo. Morbi pretium ligula in augue elementum tempor. Praesent in tristique urna. Praesent euismod, magna eu tempor lacinia, erat neque feugiat tellus, ullamcorper porttitor dui elit nec ipsum. Nullam enim dolor, sollicitudin et volutpat non, imperdiet a nisi. Vivamus mi libero, rhoncus eu condimentum malesuada, malesuada tempor mi.',
      image: 'dress2.jpg',
    },
    {
      name: 'Dress Shirt',
      shortname: 'dress_shirt',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Quisque tincidunt, dui at facilisis malesuada, ipsum erat placerat diam, nec pretium ipsum ipsum a diam. Praesent quis euismod erat. Aenean maximus lorem lorem, eget tempus nunc posuere ac. Mauris facilisis, elit eu posuere vulputate, lorem magna ultrices augue, hendrerit aliquet diam nisl sit amet nulla. Phasellus pellentesque mi sed lorem tempus, ac ullamcorper magna elementum. Suspendisse eget elit pellentesque, euismod tellus vel, scelerisque magna. Nam efficitur lorem quis lorem faucibus tempor.',
      image: 'dressshirt.jpg',
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
      name: 'Plaid Shirt',
      shortname: 'plaid_shirt',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Aliquam ornare ultricies arcu, et laoreet dolor mattis quis. Sed vitae sapien magna. Sed vehicula felis vel justo egestas porttitor. Etiam diam ex, venenatis non volutpat at, facilisis eget nulla. Donec vel nibh congue, viverra eros sit amet, placerat velit. Proin aliquam luctus sollicitudin. Cras eu rhoncus metus. Maecenas facilisis sollicitudin urna quis ullamcorper. Vivamus sit amet scelerisque ex. Quisque dapibus purus varius quam blandit tempor. Phasellus leo felis, mollis in nunc eu, commodo dignissim orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      image: 'plaidshirt.jpg',
    },
    {
      name: 'Polo Shirt',
      shortname: 'polo_shirt',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Integer pretium, est sed aliquam porttitor, tortor magna molestie libero, id sollicitudin lacus lorem in nibh. Nullam ac ultrices arcu. Donec vehicula semper vehicula. Duis sit amet neque vel sem venenatis laoreet. Donec non lacinia ex, vel sollicitudin quam. Aenean vehicula, diam ut aliquet congue, nisl dui egestas leo, ut venenatis enim metus id urna. Nullam pellentesque id nunc quis eleifend. Duis et dui metus. Nunc viverra aliquet lectus sit amet dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris quam risus, pulvinar ut velit vel, interdum hendrerit dolor.',
      image: 'poloshirt.jpg',
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
      name: 'T-Shirt',
      shortname: 't_shirt',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Fusce consequat quis velit vitae commodo. Curabitur imperdiet egestas mi, eget eleifend urna varius a. Quisque auctor pellentesque mi a tempor. Nullam efficitur ligula suscipit nisi lacinia, vitae fringilla neque maximus. Vivamus orci dolor, consequat ac neque quis, ullamcorper tristique ligula. Morbi hendrerit metus dui, et ornare orci faucibus et. Aliquam elementum congue purus vitae dapibus. Nunc vel venenatis nibh, id vehicula libero. Sed scelerisque eu neque et dictum. Nam placerat ante ut commodo lacinia. Etiam et enim vel dolor pulvinar dignissim eu at leo. Praesent eu orci eu leo fermentum fermentum. Aenean convallis nibh arcu, vel tempus felis lobortis non. Sed non porttitor velit, quis gravida justo. Phasellus vitae sem mi. Aenean ut neque sed elit consectetur auctor.',
      image: 'tshirt.jpg',
    },
    {
      name: 'T-Shirt 2',
      shortname: 't_shirt_2',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Maecenas a libero bibendum, consectetur justo nec, blandit est. Quisque id vehicula neque. Vestibulum id tortor vel turpis ullamcorper ullamcorper. Cras pretium metus nec eros mollis, sit amet accumsan tortor iaculis. Ut sed lobortis nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec euismod sed mauris vitae dapibus. Aliquam eget libero nunc. Mauris consectetur purus vitae consectetur tristique. Phasellus pharetra luctus luctus. Suspendisse tempor est eget ante sodales, quis consectetur nisl vestibulum. Nam pretium sollicitudin est vitae vestibulum.',
      image: 'tshirt2.jpg',
    },
  ]);
  console.log(categoryData);
});

test('Test of the ProductService getData() function to ensure that the correct product data is being passed through.', async () => {
  const data = await ps.getData();
  expect(data.products).toStrictEqual([
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
      name: 'Beret',
      shortname: 'beret',
      category: 'Headwear',
      shortCat: 'headwear',
      description:
        'Maecenas in ex at quam consectetur lobortis pharetra vel mauris. Nunc nisl orci, placerat eu dignissim nec, malesuada et dui. Pellentesque eget blandit nibh. Sed tempus dictum magna in sollicitudin. Fusce ullamcorper odio dolor, non suscipit ante consectetur non. Quisque luctus finibus nisi, ac ultrices lacus faucibus nec. Sed ligula sem, pulvinar eu pharetra eget, cursus a diam. Nulla et ipsum ex. Fusce eget ante venenatis mi ultricies vulputate. Morbi sodales vitae quam et pretium. Donec lacinia dictum lacus, gravida finibus velit rhoncus id. Sed at ex et arcu dapibus laoreet. Duis tempor nisl ut ligula congue, a hendrerit eros tempor.',
      image: 'beret.jpg',
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
      name: 'Boots 2',
      shortname: 'boots_2',
      category: 'Footwear',
      shortCat: 'footwear',
      description:
        'Duis rhoncus porttitor pellentesque. Mauris porttitor libero fermentum orci facilisis, a tempor urna porta. Ut eleifend porta nulla. Proin et ex tortor. Donec volutpat metus et risus convallis ultricies. Maecenas malesuada tempus enim sed vestibulum. Fusce sed ligula mauris. Aliquam erat volutpat. Suspendisse cursus tellus quis mollis condimentum. Donec sed felis ipsum. Sed sollicitudin libero vitae purus laoreet, vel pellentesque orci molestie. Vivamus a tortor ex. Aenean at volutpat orci. Nullam nisi nisl, volutpat at tortor at, accumsan lobortis sem.',
      image: 'boots2.jpg',
    },
    {
      name: 'Bucket Hat',
      shortname: 'bucket_hat',
      category: 'Headwear',
      shortCat: 'headwear',
      description:
        'Pellentesque venenatis facilisis placerat. In et purus et ipsum maximus feugiat pellentesque et orci. Ut hendrerit accumsan egestas. Sed eros lorem, condimentum sit amet tristique et, placerat id nulla. Donec volutpat finibus sapien auctor pulvinar. Fusce faucibus lobortis accumsan. Integer interdum quam vitae tortor luctus, accumsan suscipit erat iaculis. Nulla vitae ante placerat, aliquam massa non, vehicula lacus. Integer tristique eu metus at tempor. Nunc eget pellentesque nisl, nec vestibulum mauris. Sed a ullamcorper magna. Phasellus nec aliquam turpis, gravida convallis felis.',
      image: 'buckethat.jpg',
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
      name: 'Cowboy Hat',
      shortname: 'cowboy_hat',
      category: 'Headwear',
      shortCat: 'headwear',
      description:
        'Vestibulum porttitor, ante ac condimentum fermentum, nibh enim suscipit ligula, id faucibus urna metus vitae quam. Mauris vel erat vel libero volutpat pellentesque. Integer nec ultricies eros, in tincidunt tortor. Nam eu tincidunt justo. Integer nibh tortor, bibendum a tellus eu, semper bibendum nulla. Quisque semper, arcu gravida ornare pulvinar, lacus leo cursus massa, ac dignissim quam tellus a quam. Vivamus dignissim nisi porta purus varius tempor.',
      image: 'cowboyhat.jpg',
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
      name: 'Dress 2',
      shortname: 'dress_2',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Cras lobortis finibus nisl, sed vulputate lectus venenatis ac. Aenean aliquet, sapien sit amet iaculis finibus, nulla ligula vestibulum odio, sed condimentum orci sem eget justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vitae ante scelerisque, ultricies dolor a, euismod justo. Morbi pretium ligula in augue elementum tempor. Praesent in tristique urna. Praesent euismod, magna eu tempor lacinia, erat neque feugiat tellus, ullamcorper porttitor dui elit nec ipsum. Nullam enim dolor, sollicitudin et volutpat non, imperdiet a nisi. Vivamus mi libero, rhoncus eu condimentum malesuada, malesuada tempor mi.',
      image: 'dress2.jpg',
    },
    {
      name: 'Dress Shirt',
      shortname: 'dress_shirt',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Quisque tincidunt, dui at facilisis malesuada, ipsum erat placerat diam, nec pretium ipsum ipsum a diam. Praesent quis euismod erat. Aenean maximus lorem lorem, eget tempus nunc posuere ac. Mauris facilisis, elit eu posuere vulputate, lorem magna ultrices augue, hendrerit aliquet diam nisl sit amet nulla. Phasellus pellentesque mi sed lorem tempus, ac ullamcorper magna elementum. Suspendisse eget elit pellentesque, euismod tellus vel, scelerisque magna. Nam efficitur lorem quis lorem faucibus tempor.',
      image: 'dressshirt.jpg',
    },
    {
      name: 'Dress Shoes',
      shortname: 'dress_shoes',
      category: 'Footwear',
      shortCat: 'footwear',
      description:
        'Vivamus quis blandit ligula, eget mollis purus. Morbi varius accumsan mi nec semper. Integer in pretium justo, a convallis lectus. Mauris felis quam, ullamcorper sed magna in, semper blandit elit. Duis ac faucibus felis. Duis volutpat, eros ac porttitor porttitor, justo purus ornare nulla, id consequat neque lectus sit amet ante. Nulla ut consequat ipsum. Etiam molestie, quam at euismod volutpat, tortor nisi porttitor massa, ac vehicula purus sapien sit amet nisl.',
      image: 'dressshoes.jpg',
    },
    {
      name: 'Flippers',
      shortname: 'flippers',
      category: 'Footwear',
      shortCat: 'footwear',
      description:
        'Sed consectetur sed erat at placerat. In vitae faucibus enim, nec lacinia justo. Etiam viverra eu elit non sodales. Quisque quis elementum nisi, ut viverra nisi. Integer ullamcorper, diam id iaculis pretium, tellus tortor condimentum augue, non condimentum mauris risus vel ex. Sed eu magna et risus tincidunt tempus. Duis lacus urna, imperdiet nec lorem sit amet, fermentum ultricies metus. Ut tempus varius libero vel posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id tristique ligula. Ut sed risus a turpis interdum feugiat.',
      image: 'flippers.jpg',
    },
    {
      name: 'Helmet',
      shortname: 'helmet',
      category: 'Headwear',
      shortCat: 'headwear',
      description:
        'Ut dictum tincidunt justo. Donec non mauris sed purus consequat finibus vel sed erat. Sed in tellus ut est placerat blandit. Duis ultricies at risus in volutpat. Vestibulum nisl justo, accumsan quis sapien eget, varius venenatis sapien. Suspendisse in justo cursus, egestas nibh sit amet, pharetra dui. Ut auctor sem eros, a luctus purus cursus eget. Vestibulum id felis felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis ipsum urna, in lacinia libero varius et. Aenean felis risus, pretium ut magna eget, dignissim fringilla nulla. Pellentesque luctus turpis at interdum porta. Sed ultrices fermentum orci, non laoreet mi fringilla cursus. Aliquam sed odio enim.',
      image: 'helmet.jpg',
    },
    {
      name: 'High Heels',
      shortname: 'high_heels',
      category: 'Footwear',
      shortCat: 'footwear',
      description:
        'Phasellus finibus purus at nulla convallis pharetra. Duis leo augue, dictum a pharetra pulvinar, lacinia sit amet diam. Donec venenatis odio at justo cursus, sed sagittis risus tempus. Sed nec eleifend tortor. Sed malesuada elementum elit, in elementum enim porttitor eu. Aenean laoreet scelerisque magna eget viverra. Vivamus id orci feugiat, tempor ante non, porttitor sapien. Proin placerat velit diam, in ultricies mauris pharetra id. Sed ut nulla porta libero auctor fringilla. Suspendisse vitae magna faucibus leo ultricies auctor. Cras vel nisi interdum, pretium nisl et, sollicitudin nunc.',
      image: 'highheels.jpg',
    },
    {
      name: 'Hockey Skates',
      shortname: 'hockey_skates',
      category: 'Footwear',
      shortCat: 'footwear',
      description:
        'Suspendisse potenti. Ut a ornare lectus, in dictum odio. Sed rhoncus tincidunt elit, sed cursus massa vehicula et. Praesent in ultrices ipsum, id auctor nisl. Sed auctor ultrices tellus id rhoncus. Cras tortor lacus, vulputate sed elit eu, imperdiet bibendum tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed finibus lacus at ornare tristique. Praesent dui nisl, scelerisque eu ullamcorper sed, porta non dolor. Vivamus consectetur lacinia magna, ac dapibus ante pulvinar vel. Phasellus placerat ultrices diam, a sollicitudin est tincidunt at.',
      image: 'hockeyskates.jpg',
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
      name: 'Plaid Shirt',
      shortname: 'plaid_shirt',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Aliquam ornare ultricies arcu, et laoreet dolor mattis quis. Sed vitae sapien magna. Sed vehicula felis vel justo egestas porttitor. Etiam diam ex, venenatis non volutpat at, facilisis eget nulla. Donec vel nibh congue, viverra eros sit amet, placerat velit. Proin aliquam luctus sollicitudin. Cras eu rhoncus metus. Maecenas facilisis sollicitudin urna quis ullamcorper. Vivamus sit amet scelerisque ex. Quisque dapibus purus varius quam blandit tempor. Phasellus leo felis, mollis in nunc eu, commodo dignissim orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      image: 'plaidshirt.jpg',
    },
    {
      name: 'Polo Shirt',
      shortname: 'polo_shirt',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Integer pretium, est sed aliquam porttitor, tortor magna molestie libero, id sollicitudin lacus lorem in nibh. Nullam ac ultrices arcu. Donec vehicula semper vehicula. Duis sit amet neque vel sem venenatis laoreet. Donec non lacinia ex, vel sollicitudin quam. Aenean vehicula, diam ut aliquet congue, nisl dui egestas leo, ut venenatis enim metus id urna. Nullam pellentesque id nunc quis eleifend. Duis et dui metus. Nunc viverra aliquet lectus sit amet dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris quam risus, pulvinar ut velit vel, interdum hendrerit dolor.',
      image: 'poloshirt.jpg',
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
      name: 'Sandals',
      shortname: 'sandals',
      category: 'Footwear',
      shortCat: 'footwear',
      description:
        'Suspendisse sit amet aliquet magna, non venenatis purus. Nunc interdum consequat rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat dolor sit amet nunc egestas, a efficitur ex fermentum. Suspendisse potenti. Ut blandit, sapien nec euismod venenatis, risus felis ullamcorper arcu, faucibus fermentum nulla ante ut odio. Donec congue tempor neque. Pellentesque sed dolor at ante scelerisque porta non nec eros.',
      image: 'sandals.jpg',
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
      name: 'Slippers',
      shortname: 'slippers',
      category: 'Footwear',
      shortCat: 'footwear',
      description:
        'Aenean scelerisque mauris sit amet lacus gravida, id sagittis nunc ornare. Etiam consectetur luctus nunc, sit amet feugiat tortor placerat eget. Vivamus mollis, lectus eu pretium rutrum, dolor lacus dictum purus, ac pretium velit est vitae odio. Praesent sit amet lacus auctor, aliquam elit elementum, facilisis mi. Vestibulum aliquam sapien ac mauris pulvinar, sed imperdiet quam vulputate. Nullam dapibus quam et tempor ornare. Nullam ipsum nunc, venenatis et nisl a, luctus tempor arcu. Cras ultricies arcu et sem elementum, et luctus risus euismod. In in est sagittis metus pellentesque posuere.',
      image: 'slippers.jpg',
    },
    {
      name: 'Sunglasses',
      shortname: 'sunglasses',
      category: 'Headwear',
      shortCat: 'headwear',
      description:
        'In eu neque pulvinar mauris pretium consectetur. Mauris lectus risus, feugiat non ultricies eget, efficitur at purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ac sem quis neque egestas sodales ac id justo. Integer sollicitudin vitae turpis at tincidunt. Duis facilisis volutpat pulvinar. Fusce id sem lacus. Praesent ac risus consectetur nisl faucibus sodales. Vestibulum blandit ligula purus, ac semper augue dictum vel. Proin quam velit, facilisis a molestie et, consectetur facilisis massa. Quisque eu erat elit. Nulla facilisi. Nam eget lacinia orci.',
      image: 'sunglasses.jpg',
    },
    {
      name: 'Sun Hat',
      shortname: 'sun_hat',
      category: 'Headwear',
      shortCat: 'headwear',
      description:
        'Duis et porta nisi. Sed nec sem mi. Cras nec nulla sed libero iaculis lacinia. Pellentesque suscipit nisl nec dolor congue mollis. Donec ac tortor porta, gravida odio vel, suscipit neque. Sed accumsan lobortis quam, sed auctor urna rutrum accumsan. Ut sodales faucibus urna, ac imperdiet eros faucibus quis. Maecenas sit amet interdum urna. Donec rhoncus magna tortor, ut sagittis magna mollis sit amet. Nunc suscipit consequat ultrices. Praesent ac urna et felis pharetra imperdiet sit amet quis risus. Donec rhoncus bibendum nibh eget pharetra. Nullam diam eros, mattis vitae maximus vel, volutpat id diam.',
      image: 'sunhat.jpg',
    },
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
      name: 'T-Shirt 2',
      shortname: 't_shirt_2',
      category: 'Clothing',
      shortCat: 'clothing',
      description:
        'Maecenas a libero bibendum, consectetur justo nec, blandit est. Quisque id vehicula neque. Vestibulum id tortor vel turpis ullamcorper ullamcorper. Cras pretium metus nec eros mollis, sit amet accumsan tortor iaculis. Ut sed lobortis nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec euismod sed mauris vitae dapibus. Aliquam eget libero nunc. Mauris consectetur purus vitae consectetur tristique. Phasellus pharetra luctus luctus. Suspendisse tempor est eget ante sodales, quis consectetur nisl vestibulum. Nam pretium sollicitudin est vitae vestibulum.',
      image: 'tshirt2.jpg',
    },
    {
      name: 'Top Hat',
      shortname: 'top_hat',
      category: 'Headwear',
      shortCat: 'headwear',
      description:
        'Sed vel metus rhoncus, hendrerit nulla et, consectetur massa. Nulla vel tempus libero. Morbi aliquet vel enim non finibus. Sed nunc nibh, condimentum et elit quis, semper pharetra quam. Nam efficitur augue et lectus faucibus vestibulum. Fusce ut tincidunt risus, non laoreet leo. Proin lectus tellus, tincidunt non feugiat a, finibus vel est. Nunc enim ex, condimentum ut malesuada tincidunt, imperdiet ut purus. Cras fringilla nisl eget rutrum vulputate. Aliquam malesuada scelerisque turpis eu efficitur.',
      image: 'tophat.jpg',
    },
  ]);
  console.log(data.products);
});
test('Test of the ProductService getData() function to ensure that the correct category data is being passed through.', async () => {
  const data = await ps.getData();
  expect(data.categories).toStrictEqual(['clothing', 'headwear', 'footwear']);
  console.log(data.categories);
});
