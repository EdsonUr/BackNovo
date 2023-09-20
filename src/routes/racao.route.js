const route = require('express').Router();
const racaoController = require("../controllers/racao.controller")

route.post("/", racaoController.create)
route.get("/", racaoController.findAll)
route.delete("/:id", racaoController.deleteOne)
route.patch("/:id", racaoController.editId)

module.exports = route;