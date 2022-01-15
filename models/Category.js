const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns

    id: {

      // define as integer
      type: DataTypes.INTEGER,

      // not null
      allowNull: false,

      // make primary key
      primaryKey: true,

      // turn on auto increment
      autoIncrement: true 
    },
    category_name: {

      // define as integer
      type: DataTypes.STRING,

      // not null
      allowNull: false,
    }
  }, 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
