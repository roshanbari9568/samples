const Sequelize = require('sequelize');
const DB = require('../config/mysqldb_conn');

const Orders = DB.define(
    "orders",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      orderno: {
        type: Sequelize.STRING(100)
      },
      category:{
        type : Sequelize.STRING(100)
      },
      merchant:{
        type: Sequelize.STRING(100)
      }
    },
    {
      freezeTableName: true
    }
  );
  
  module.exports = Orders;
  