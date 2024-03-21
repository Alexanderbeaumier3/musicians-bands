const { Sequelize, sequelize } = require("../db");
const { DataTypes } = require("sequelize");

// TODO - define the Song model
let Song = sequelize.define("song", {
  title: {
    // type: Sequelize.STRING,
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  length: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = {
  Song,
};
