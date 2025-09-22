const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Order extends Model {}
Order.init({
  userId: DataTypes.INTEGER,
  items: { type: DataTypes.TEXT, // JSON string: [{productId,name,price,qty}]
    get(){ return JSON.parse(this.getDataValue('items') || '[]') },
    set(v){ this.setDataValue('items', JSON.stringify(v||[])) }
  },
  total: { type: DataTypes.INTEGER, allowNull:false },
  paymentMethod: DataTypes.STRING,
  paymentInfo: DataTypes.TEXT,
  status: { type: DataTypes.STRING, defaultValue:'pending' }
}, { sequelize, modelName:'order' });

module.exports = Order;
