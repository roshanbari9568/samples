const UserModel = require('../models/users.model');
const OrderModel = require('../models/orders.model');




exports.getData = (req,res) => {
  console.log('heya');

OrderModel.findAll({
  raw:true,
  attributes:['id','orderno','user.name','user.address','user.gender'], //where user is model
  include: [{
    model: UserModel,
    where:[{name:'pooja'}],
    // attributes:['name','address','gender']
   // require:true
   
   }]
})
.then(data => {
  res.jsonp({
      success: true,
      
      "data": data[0]
  })
})
}