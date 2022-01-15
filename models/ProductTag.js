const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
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
    product_id: {

      // define as integer
      type: DataTypes.INTEGER,

      // reference product model's id
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {

      // define as integer
      type: DataTypes.INTEGER,

      // reference tag model's id
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
