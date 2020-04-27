const TestimonialService = require('./TestimonialService');
const configs = require('../config');
const config = configs['development'];
const ts = new TestimonialService(config.data.testimonials);

test('Test of the TestimonialService getData() function to ensure that the correct testimonial data is being passed through.', async () => {
  const data = await ts.getData();
  expect(data).toStrictEqual([
    {
      name: 'Brian Kristoffer',
      title: 'Not Bad',
      message: 'Could be better.',
    },
    {
      name: 'Jason Kendrick',
      title: 'Excellent Service',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum consequat lorem, sit amet cursus sapien dictum et. Mauris congue nec velit eget consectetur. Pellentesque ac massa nec velit iaculis convallis vitae nec erat. Proin eget felis id tortor volutpat condimentum sit amet vitae sem. Mauris in velit turpis. Praesent non sollicitudin arcu. Vivamus porta nulla massa, sed ultrices purus euismod et.\r\n\r\nMauris ut elit nec nisi consectetur aliquet quis quis purus. Nunc euismod quis lorem sed ultricies. In hac habitasse platea dictumst. Suspendisse potenti. Donec eu dolor at enim blandit lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean iaculis efficitur elit, in sodales urna euismod condimentum. Fusce tempus laoreet finibus. Pellentesque rhoncus laoreet leo, eu vehicula dolor facilisis sit amet. Donec mollis pharetra sapien id auctor. Phasellus vitae rutrum massa, ac mollis neque. Quisque bibendum placerat ipsum. Nunc lectus erat, accumsan vitae varius id, commodo vitae nisi. Nunc tincidunt libero eu sodales euismod. Suspendisse rhoncus mi quis arcu ullamcorper vehicula. Quisque at tincidunt augue, in venenatis metus.\r\n\r\nDuis felis ante, elementum nec pulvinar vitae, maximus in sapien. Donec ac convallis nisl. Ut consequat ut arcu vel convallis. Cras vitae diam neque. Sed sollicitudin, mi non tempus molestie, lectus sapien ultrices odio, eu commodo massa est eu quam. Morbi consequat, est ut cursus ultricies, mi elit aliquet tellus, a vulputate enim ex id augue. Pellentesque suscipit sapien ligula, vel tempor est porta ut. Curabitur molestie sed mauris vel vestibulum. Duis non nulla ipsum. Proin arcu libero, euismod ac ex id, pulvinar suscipit dolor.',
    },
    { name: 'Fred Langston', title: 'Nice Work', message: 'Keep it up!' },
  ]);
  console.log(data);
});
