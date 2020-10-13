const crudmodel = require('../models/crud.model')


exports.setData = (req,res) =>{

    var userno = req.body.userno;
    var product_type = req.body.product_type;
    var merchant = req.body.merchant;
    
    console.log("This is for create function");

    crudmodel.create({

        userno : userno,
        product_type : product_type,
        merchant : merchant

    }).then(data => {
        res.jsonp({
            success: true,
            "data": data
        })

    }).catch(err => {
        res.jsonp({
            success: false,
            message: err
        })
    })
}


exports.getData = (req,res) =>{

    console.log("This is for findAll function");


    crudmodel.findAll({

        raw:true,
        attributes: [],
        where :{
            id :1
        }
    }).then(data => {
        res.jsonp({
            success: true,
            "data": data
        })

    }).catch(err => {
        res.jsonp({
            success: false,
            message: err
        })
    })
}

