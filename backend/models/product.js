const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Product extends Model {}
Product.init({
  name: { type: DataTypes.STRING, allowNull:false },
  slug: DataTypes.STRING,
  short: DataTypes.STRING,
  description: DataTypes.TEXT,
  price: { type: DataTypes.INTEGER, allowNull:false },
  stock: { type: DataTypes.INTEGER, defaultValue:0 },
  category: DataTypes.STRING,
  images: { type: DataTypes.TEXT, defaultValue:'[]', // JSON string
    get(){ const raw = this.getDataValue('images'); return JSON.parse(raw || '[]') },
    set(val){ this.setDataValue('images', JSON.stringify(val||[])) }
  }
}, { sequelize, modelName:'product' });

module.exports = Product;
