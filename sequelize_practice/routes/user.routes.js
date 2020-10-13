const router = require("express").Router();
const crudController = require("../controllers/crud.controller");

/*******************  IMPORTER CONTROLLER ROUTES *******************/
router.get("/setData",crudController.setData);
module.exports = router;