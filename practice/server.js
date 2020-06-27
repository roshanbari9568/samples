const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const logger = require('./services/winston');
const DB = require('./config/mysqldb_conn');


// CONTROLLERS//
const UserControllers = require('./controllers/user.controller');
// CONTROLLERS//



// MODELS //
const UserModel = require('./models/users.model');
const OrdersModel = require('./models/orders.model');
// MODELS //

OrdersModel.belongsTo(UserModel);
UserModel.hasMany(OrdersModel);

app.use('/',require('./routes/user.routes'))


DB.sync({
    // alter: true
    // force: true
}).then(success =>{
    logger.debug(`DATABASE IS CONNECTED ✅`);
    const Neo4j_connection = require('./config/neo4jdb_conn');
    app.listen(port, (req,res,error) =>{
        logger.debug(`Server is running on port: ${port} ✅`)
    })
})
