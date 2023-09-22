const route = require('express').Router();
const brinquedoController = require("../controllers/brinquedo.controller")

route.post("/", brinquedoController.create)
route.get("/", brinquedoController.findAll)
route.delete("/:id", brinquedoController.deleteOne)
route.patch("/:id", brinquedoController.editId)

module.exports = route;