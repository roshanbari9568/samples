const mongoose = require("mongoose");
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

//DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,  useUnifiedTopology: true }, 
() =>{
        console.log("Connected to DB")
    })


//bring in routes

const postRoutes = require('./routes/post')
// const myOwnMiddleWare = (req,res,callback) =>
// {
//     console.log("Morgan the middleware applied & page got refreshed")
//     callback();
// }

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
//app.use(myOwnMiddleWare);
app.use("/", postRoutes);


const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log("API is listening on port", port)
})
