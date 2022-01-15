const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
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
    tag_name: {

      // define as integer
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
