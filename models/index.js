
const User = require("./user");
const Product = require("./product");
const Category = require('./Category');

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id'
  });
  // Categories have many Products
  Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
  });

module.exports = { User, Category, Product };
