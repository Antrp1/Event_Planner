const { Product } = require('../models');

const productData = [
// keyboards
  {
    product_name: 'Keyboard1',
    price: 50.00,
    stock: '10',
    category: 'Keyboards',
  },
  {
    product_name: 'Keyboard2',
    price: 60.00,
    stock: '20',
    category: 'Keyboards',
  },
  {
    product_name: 'Keyboard2',
    price: 60.00,
    stock: '20',
    category: 'Keyboards',
  },
  {
    product_name: 'Keyboard2',
    price: 60.00,
    stock: '20',
    category: 'Keyboards',
  },
  {
    product_name: 'Keyboard2',
    price: 60.00,
    stock: '20',
    category: 'Keyboards',
  },
  // monitors
  {
    product_name: 'Monitor1',
    price: 200.00,
    stock: '30',
    category: 'Monitors',
  },
  {
    product_name: 'Monitor2',
    price: 250.00,
    stock: '40',
    category: 'Monitors',
  },
  {
    product_name: 'Monitor2',
    price: 250.00,
    stock: '40',
    category: 'Monitors',
  },
  {
    product_name: 'Monitor2',
    price: 250.00,
    stock: '40',
    category: 'Monitors',
  },
  {
    product_name: 'Monitor2',
    price: 250.00,
    stock: '40',
    category: 'Monitors',
  },
  // Headset
  {
    product_name: 'Headset1',
    price: 75.00,
    stock: '15',
    category: 'Headset',
  },
  {
    product_name: 'Headset2',
    price: 80.00,
    stock: '25',
    category: 'Headset',
  },
  {
    product_name: 'Headset2',
    price: 80.00,
    stock: '25',
    category: 'Headset',
  },
  {
    product_name: 'Headset2',
    price: 80.00,
    stock: '25',
    category: 'Headset',
  },
  {
    product_name: 'Headset2',
    price: 80.00,
    stock: '25',
    category: 'Headset',
  },
  // mice
  {
    product_name: 'Mouse1',
    price: 25.00,
    stock: '50',
    category: 'Mice',
  },
  {
    product_name: 'Mouse2',
    price: 30.00,
    stock: '60',
    category: 'Mice',
  },
  {
    product_name: 'Mouse2',
    price: 30.00,
    stock: '60',
    category: 'Mice',
  },
  {
    product_name: 'Mouse2',
    price: 30.00,
    stock: '60',
    category: 'Mice',
  },
  {
    product_name: 'Mouse2',
    price: 30.00,
    stock: '60',
    category: 'Mice',
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
