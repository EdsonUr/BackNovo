const route = require('express').Router();
const brinquedoController = require("../controllers/brinquedo.controller")

route.post("/", brinquedoController.create)
route.get("/", brinquedoController.findAll)

module.exports = route;