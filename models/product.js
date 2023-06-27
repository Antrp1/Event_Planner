const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    stock: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    in_stock: { //do we need this?
        type: DataTypes.VIRTUAL,
        get: function () {
            return this.stock>0
        },
        set(value) {
      throw new Error('No in stock');
    }
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);


module.exports = Products;

