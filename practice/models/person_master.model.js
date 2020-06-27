const Sequelize = require('sequelize');
const DB = require('../config/mysqldb_conn');

const Orders = DB.define(
    "person_master",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      person_id: {
        type: Sequelize.STRING(100)
      },
      person_firstname:{
        type : Sequelize.STRING(100)
      },
      person_lastname:{
        type: Sequelize.STRING(100)
      },
      arabic_firstname:{
        type : Sequelize.STRING(100)
      },
      arabic_lastname:{
        type: Sequelize.STRING(100)
      },
      person_type:{
        type : Sequelize.STRING(100)
      },
      person_tag:{
        type: Sequelize.STRING(100)
      },
      pinned_status:{
        type : Sequelize.TINYINT(1)
      },
      person_introduce_datetime:{
        type: Sequelize.DATE
      },
      train_count:{
          type: Sequelize.INTEGER(11)
      }


    },
    {
      freezeTableName: true
    }
  );
  
  module.exports = Orders;
  