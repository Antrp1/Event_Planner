const { Product } = require('../models');

const productData = [
  // keyboards
  {
    product_name: 'Keychron Q2',
    price: 209.99,
    stock: '10',
    category_id: 1,
    product_description: "Keychron Q2 QMK Custom Mechanical Keyboard"
      image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688108355/Product%20Photos/keychronq2custommechanicalkeyboardhero1-1641452478397_qnvdhw.jpg"
  },
  {
    product_name: 'NuPhy Air75',
    price: 129.99,
    stock: '20',
    category_id: 1,
    product_description: "nuphy Air75 Mechanical Keyboard, 75% Low Profile Wireless Keyboard"
      image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688094623/Product%20Photos/design-medium_vfh4ll.jpg"
  },
  {
    product_name: 'Keychron V Series',
    price: 84.99,
    stock: '20',
    category_id: 1,
    product_description: "The Keychron V Series is a lineup of wired- only mechanical keyboards"
      image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688108491/Product%20Photos/translucent-keychron-v2-with-the-knob-red-backlight-and-v0-wv6g3cr451r91_sxcg7h.jpg"
  },
  {
    product_name: 'ROYAL KLUDGE RK61',
    price: 42.49,
    category_id: 1,
    product_description: "RK ROYAL KLUDGE RK61 Wireless 60 % Triple Mode BT5.0 / 2.4G / USB - C Mechanical Keyboard"
  image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688108570/Product%20Photos/71ghaNYDyRL_d2gic3.jpg"
  },
  {
    product_name: 'Razer Pro Type Ultra',
    price: 159.99,
    stock: '20',
    category_id: 1,
    product_description: "Razer Pro Type Ultra Wireless Mechanical Keyboard: Silent, Linear Switches - Ergonomic Design - HyperSpeed Technology - Connect up to 4 Devices - Fully Programmable Keys & Smart Controls"
  image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688108132/Product%20Photos/61Zl5N5yY7L_nmzqg6.jpg"
  },
  // monitors
  {
    product_name: 'LG 38WN95c-W',
    price: 1139.99,
    stock: '30',
    category_id: 2,
    product_description: "LG 38WN95C - W Monitor 38'"' 21: 9 Curved UltraWide QHD + (3840 x 1600) Nanio IPS Display, Thunderbolt 3, 1ms Response Time, 144Hz Refresh Rate, NVIDIA G - SYNC, AMD FreeSync"
  image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095004/Product%20Photos/medium01_hazgjg.jpg"
},
  {
    product_name: 'Dell U3223QE',
    price: 788.99,
    stock: '40',
    category_id: 2,
    product_description: "Dell UltraSharp U3223QE 31.5'"' 4K UHD WLED LCD Monitor - 16: 9"
  image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095037/Product%20Photos/monitor-u3223qe-gallery-1_ubhnes.jpg"
},
  {
    product_name: 'Dell U2723QE',
    price: 558.95,
    stock: '40',
    category_id: 2,
    product_description: "Dell UltraSharp U2723QE 27'"' 4K UHD WLED LCD Monitor - 16: 9"
  image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688107772/Product%20Photos/Dell-U2723QE-front-view_vn4m3z.jpg"
},
  {
    product_name: 'Dell S2722QC',
    price: 393.00,
    stock: '40',
    category_id: 2,
    product_description: "Dell S2722QC 27-inch 4K USB-C Monitor - UHD (3840 x 2160) Display, 60Hz Refresh Rate, 8MS Grey-to-Grey Response Time (Normal Mode), Built-in Dual 3W Speakers, 1.07 Billion Colors - Platinum Silver"
      image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688107625/Product%20Photos/s2722qc_cfp_00000ff090_gy_dcg6yk.jpg"
  },
  {
    product_name: 'ASUS ProArt Display PA278QV',
    price: 289.00,
    stock: '40',
    category_id: 2,
    product_description: "ASUS ProArt Display PA278QV 27” WQHD (2560 x 1440) Monitor, 100% sRGB/Rec. 709 ΔE < 2, IPS, DisplayPort HDMI DVI-D Mini DP, Calman Verified, Anti-glare, Tilt Pivot Swivel Height Adjustable, Black"
      image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688107490/Product%20Photos/6424478_sd_c2sneq.jpg"
  },
  // Headset
  {
    product_name: 'Sony WH-1000XM5',
    price: 384.99,
    stock: '15',
    category_id: 3,
    product_description: "Dell S2722QC 27 - inch 4K USB - C Monitor - UHD(3840 x 2160) Display, 60Hz Refresh Rate, 8MS Grey - to - Grey Response Time(Normal Mode), Built -in Dual 3W Speakers, 1.07 Billion Colors - Platinum Silver"
  image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095298/Product%20Photos/6145c1d32e6ac8e63a46c912dc33c5bb_qrypd6.jpg"
  },
  {
    product_name: 'Bose Noise Cancelling Headphones 700',
    price: 379.00,
    stock: '25',
    category_id: 3,
    product_description: "Bose Headphones 700, Noise Cancelling Bluetooth Over - Ear Wireless Headphones with Built - In Microphone for Clear Calls and Alexa Voice Control, Black"
  image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688106772/Product%20Photos/g018NC700TB-o_other0_geqww4.jpg"
  },
  {
    product_name: 'Apple AirPods Max',
    price: 479.99,
    stock: '25',
    category_id: 3,
    product_description: "Apple AirPods Max Wireless Over - Ear Headphones.Active Noise Cancelling, Transparency Mode, Spatial Audio, Digital Crown for Volume Control.Bluetooth Headphones for iPhone"
  image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095402/Product%20Photos/81OMrE1LGUL._AC_UF1000_1000_QL80__xga9rh.jpg"
  },
  {
    product_name: 'Sony WF-1000M4',
    price: 278.00,
    stock: '25',
    category_id: 3,
    product_description: "Sony WF - 1000XM4 Industry Leading Noise Canceling Truly Wireless Earbud Headphones with Alexa Built -in, Black"
  image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095447/Product%20Photos/gsmarena_001_fh2lcn.jpg"
  },
  {
    product_name: 'Apple AirPods Pro',
    price: 199.00,
    stock: '25',
    category_id: 3,
    product_description: "Apple AirPods Pro(2nd Generation) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio, MagSafe Charging Case, Bluetooth Headphones for iPhone"
  image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095478/Product%20Photos/Apple-AirPods-Pro-2nd-gen-hero-220907.jpg.news_app_ed_c8rgwe.jpg"
  },
  // mice
  {
    product_name: 'Logitech MX Master 3',
    price: 96.08,
    stock: '50',
    category_id: 4,
    product_description: "Logitech MX Master 3S - Wireless Performance Mouse with Ultra - fast Scrolling, Ergo, 8K DPI, Track on Glass, Quiet Clicks, USB - C, Bluetooth, Windows, Linux, Chrome - Graphite"
  image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095591/Product%20Photos/KmVUTGRLkDywKE7p2oiSH8-1200-80_iasqsb.jpg"
  },
  {
    product_name: 'Logitech MX Ergo Trackball',
    price: 89.95,
    stock: '60',
    category_id: 4,
    product_description: "Logitech MX Ergo Wireless Trackball Mouse Adjustable Ergonomic Design, Control and Move Text / Images / Files Between 2 Windows and Apple Mac Computers(Bluetooth or USB), Rechargeable, Graphite - Black"
  image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095638/Product%20Photos/61L3c09ToNL._AC_UF1000_1000_QL80__utcrfe.jpg"
  },
  {
    product_name: 'Tobo Vertical Mouse',
    price: 29.99,
    stock: '60',
    category_id: 4,
    product_description: "Tobo Ergonomic Mouse; Tobo Vertical Wireless Mouse - Rechargeable 2.4GHz Optical Vertical Mice: 3 Adjustable DPI 800 / 1200 / 1600 Levels 6 Buttons; for Laptop; PC; Computer; Desktop; Black"
            image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095692/Product%20Photos/51YVkhDvs5L_ogwygf.jpg"
  },
  {
    product_name: 'TECKNET',
    price: 10.79,
    stock: '60',
    category_id: 4,
    product_description: "TECKNET Wireless Mouse, 2.4G USB Computer Mouse with 6 - Level Adjustable 3200 DPI, 30 Months Battery, Ergonomic Grips, 6 Buttons Portable for PC, Chromebook, Mac - Grey"
  image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095777/Product%20Photos/BluetoothWir_jp2y8q.jpg"
  },
  {
    product_name: 'Amazon Basics',
    price: 10.14,
    stock: '60',
    category_id: 4,
    product_description: "Amazon Basics Ergonomic Wireless PC Mouse - DPI adjustable - Black"
  image_url: "https://res.cloudinary.com/di3nk6hyq/image/upload/v1688095909/Product%20Photos/611MVODMR0L_rmcfxo.jpg"
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
