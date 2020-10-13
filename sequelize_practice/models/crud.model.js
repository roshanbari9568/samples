const Sequelize = require('sequelize');
const DB = require('../config/mysqldb_conn');

const hospitals = DB.define(
    "hospitals",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      userno: {
        type: Sequelize.STRING(100)
      },
      product_type:{
        type : Sequelize.STRING(100)
      },
      merchant:{
        type: Sequelize.STRING(100)
      }
    }
    ,
    {
      freezeTableName: true
    }
  );
  
  module.exports = hospitals;
  