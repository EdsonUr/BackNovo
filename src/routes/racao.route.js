const route = require('express').Router();
const racaoController = require("../controllers/racao.controller")

route.post("/", racaoController.create)
route.get("/", racaoController.findAll)

module.exports = route;