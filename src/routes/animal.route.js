const route = require('express').Router();
const animalController = require("../controllers/animal.controller")

route.post("/", animalController.create)
route.get("/", animalController.findAll)

module.exports = route;