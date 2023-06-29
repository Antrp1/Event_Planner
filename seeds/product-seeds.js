const { Product } = require('../models');

const productData = [
// keyboards
  {
    product_name: 'Keychron Q2',
    price: 209.99,
    stock: '10',
    category: 'Keyboards',
  },
  {
    product_name: 'NuPhy Air75',
    price: 129.99,
    stock: '20',
    category: 'Keyboards',
  },
  {
    product_name: 'Keychron V Series',
    price: 84.99,
    stock: '20',
    category: 'Keyboards',
  },
  {
    product_name: 'ROYAL KLUDGE RK61',
    price: 42.49,
    stock: '20',
    category: 'Keyboards',
  },
  {
    product_name: 'Razer Pro Type Ultra',
    price: 159.99,
    stock: '20',
    category: 'Keyboards',
  },
  // monitors
  {
    product_name: 'LG 38WN95c-W',
    price: 1139.99,
    stock: '30',
    category: 'Monitors',
  },
  {
    product_name: 'Dell U3223QE',
    price: 788.99,
    stock: '40',
    category: 'Monitors',
  },
  {
    product_name: 'Dell U2723QE',
    price: 558.95,
    stock: '40',
    category: 'Monitors',
  },
  {
    product_name: 'Dell S2722QC',
    price: 393.00,
    stock: '40',
    category: 'Monitors',
  },
  {
    product_name: 'ASUS ProArt Display PA278QV',
    price: 289.00,
    stock: '40',
    category: 'Monitors',
  },
  // Headset
  {
    product_name: 'Sony WH-1000XM5',
    price: 384.99,
    stock: '15',
    category: 'Headset',
  },
  {
    product_name: 'Bose Noise Cancelling Headphones 700',
    price: 379.00,
    stock: '25',
    category: 'Headset',
  },
  {
    product_name: 'Apple AirPods Max',
    price: 479.99,
    stock: '25',
    category: 'Headset',
  },
  {
    product_name: 'Sony WF-1000M4',
    price: 278.00,
    stock: '25',
    category: 'Headset',
  },
  {
    product_name: 'Apple AirPods Pro',
    price: 199.00,
    stock: '25',
    category: 'Headset',
  },
  // mice
  {
    product_name: 'Logitech MX Master 3',
    price: 96.08,
    stock: '50',
    category: 'Mice',
  },
  {
    product_name: 'Logitech MX Ergo Trackball',
    price: 89.95,
    stock: '60',
    category: 'Mice',
  },
  {
    product_name: 'Tobo Vertical Mouse',
    price: 29.99,
    stock: '60',
    category: 'Mice',
  },
  {
    product_name: 'TECKNET',
    price: 10.79,
    stock: '60',
    category: 'Mice',
  },
  {
    product_name: 'Amazon Basics',
    price: 10.14,
    stock: '60',
    category: 'Mice',
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
