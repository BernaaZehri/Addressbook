const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "members",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Firstname: {
      type: Sequelize.STRING
    },
    Lastname: {
      type: Sequelize.STRING
    },
    Email: {
      type: Sequelize.STRING
    },
    Country: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);