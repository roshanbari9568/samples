const Sequelize = require('sequelize');
const DB = require('../config/mysqldb_conn');

const users = DB.define(
    "users",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(100)
      },
      address: {
        type: Sequelize.STRING(100)
      },
      gender:{
        type:Sequelize.STRING(100)
      },
      contact_no:
      {
        type: Sequelize.STRING(100)
      }
    },
    {
      freezeTableName: true
    }
  );
  
  module.exports = users;
  