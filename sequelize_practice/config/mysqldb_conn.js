const Sequelize = require("sequelize");
require('dotenv').config();
const {DB_DATABASE, DB_USER, DB_PASS, DB_HOST} = process.env;
const DB = new Sequelize(
  DB_DATABASE,
  DB_USER,
  DB_PASS,
  {
    dialect: "mysql",
    host: DB_HOST,
    freezeTableName: true,
    logging: false,
    pool: {
      max: 30,
      min: 0,
      acquire: 30000000,
      idle: 10000
    }
  }
);

module.exports = DB;