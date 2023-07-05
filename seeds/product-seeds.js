const { Product } = require('../models');

const productData = [
  // keyboards
  {
    product_name: 'Keychron Q2',
    price: 209.99,
    stock: '10',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688108355/Product%20Photos/keychronq2custommechanicalkeyboardhero1-1641452478397_qnvdhw.jpg"
    category_id: 1,
  },
  {
    product_name: 'NuPhy Air75',
    price: 129.99,
    stock: '20',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688094623/Product%20Photos/design-medium_vfh4ll.jpg"
    category_id: 1,
  },
  {
    product_name: 'Keychron V Series',
    price: 84.99,
    stock: '20',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688108491/Product%20Photos/translucent-keychron-v2-with-the-knob-red-backlight-and-v0-wv6g3cr451r91_sxcg7h.jpg"
    category_id: 1,
  },
  {
    product_name: 'ROYAL KLUDGE RK61',
    price: 42.49,
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688108570/Product%20Photos/71ghaNYDyRL_d2gic3.jpg"
    category_id: 1,
  },
  {
    product_name: 'Razer Pro Type Ultra',
    price: 159.99,
    stock: '20',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688108132/Product%20Photos/61Zl5N5yY7L_nmzqg6.jpg"
    category_id: 1,
  },
  // monitors
  {
    product_name: 'LG 38WN95c-W',
    price: 1139.99,
    stock: '30',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095004/Product%20Photos/medium01_hazgjg.jpg"
    category_id: 2,
  },
  {
    product_name: 'Dell U3223QE',
    price: 788.99,
    stock: '40',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095037/Product%20Photos/monitor-u3223qe-gallery-1_ubhnes.jpg"
    category_id: 2,
  },
  {
    product_name: 'Dell U2723QE',
    price: 558.95,
    stock: '40',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688107772/Product%20Photos/Dell-U2723QE-front-view_vn4m3z.jpg"
    category_id: 2,
  },
  {
    product_name: 'Dell S2722QC',
    price: 393.00,
    stock: '40',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688107625/Product%20Photos/s2722qc_cfp_00000ff090_gy_dcg6yk.jpg"
    category_id: 2,
  },
  {
    product_name: 'ASUS ProArt Display PA278QV',
    price: 289.00,
    stock: '40',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688107490/Product%20Photos/6424478_sd_c2sneq.jpg"
    category_id: 2,
  },
  // Headset
  {
    product_name: 'Sony WH-1000XM5',
    price: 384.99,
    stock: '15',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095298/Product%20Photos/6145c1d32e6ac8e63a46c912dc33c5bb_qrypd6.jpg"
  },
    {
    product_name: 'Bose Noise Cancelling Headphones 700',
    price: 379.00,
    stock: '25',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688106772/Product%20Photos/g018NC700TB-o_other0_geqww4.jpg"
    category_id: 3,
  },
  {
    product_name: 'Bose Noise Cancelling Headphones 700',
    price: 379.00,
    stock: '25',
    category_id: 3,
  },
  {
    product_name: 'Apple AirPods Max',
    price: 479.99,
    stock: '25',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095402/Product%20Photos/81OMrE1LGUL._AC_UF1000_1000_QL80__xga9rh.jpg"
    category_id: 3,
  },
  {
    product_name: 'Sony WF-1000M4',
    price: 278.00,
    stock: '25',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095447/Product%20Photos/gsmarena_001_fh2lcn.jpg"
    category_id: 3,
  },
  {
    product_name: 'Apple AirPods Pro',
    price: 199.00,
    stock: '25',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095478/Product%20Photos/Apple-AirPods-Pro-2nd-gen-hero-220907.jpg.news_app_ed_c8rgwe.jpg"
    category_id: 3,
  },
  // mice
  {
    product_name: 'Logitech MX Master 3',
    price: 96.08,
    stock: '50',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095591/Product%20Photos/KmVUTGRLkDywKE7p2oiSH8-1200-80_iasqsb.jpg"
    category_id: 4,
  },
  {
    product_name: 'Logitech MX Ergo Trackball',
    price: 89.95,
    stock: '60',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095638/Product%20Photos/61L3c09ToNL._AC_UF1000_1000_QL80__utcrfe.jpg"
    category_id: 4,
  },
  {
    product_name: 'Tobo Vertical Mouse',
    price: 29.99,
    stock: '60',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095692/Product%20Photos/51YVkhDvs5L_ogwygf.jpg"
    category_id: 4,
  },
  {
    product_name: 'TECKNET',
    price: 10.79,
    stock: '60',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095777/Product%20Photos/BluetoothWir_jp2y8q.jpg"
    category_id: 4,
  },
  {
    product_name: 'Amazon Basics',
    price: 10.14,
    stock: '60',
    image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095909/Product%20Photos/611MVODMR0L_rmcfxo.jpg"
    category_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
