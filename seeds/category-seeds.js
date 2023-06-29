const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Keyboards',
    },
    {
        category_name: 'Monitors',
    },
    {
        category_name: 'Headset',
    },
    {
        category_name: 'Mice',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;