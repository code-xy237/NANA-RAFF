const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcryptjs');

class User extends Model {
  async matchPassword(plain){ return bcrypt.compare(plain, this.password); }
}
User.init({
  name:{type:DataTypes.STRING,allowNull:false},
  email:{type:DataTypes.STRING,allowNull:false,unique:true},
  password:{type:DataTypes.STRING,allowNull:false},
  phone:{type:DataTypes.STRING},
  role:{type:DataTypes.STRING,defaultValue:'user'}
}, { sequelize, modelName:'user' });

User.beforeCreate(async (user)=> { user.password = await bcrypt.hash(user.password, 10); });

module.exports = User;
