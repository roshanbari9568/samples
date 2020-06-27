const router = require("express").Router();
const UserController = require("../controllers/user.controller");

/*******************  IMPORTER CONTROLLER ROUTES *******************/
router.get("/getdata", UserController.getData);
module.exports = router;