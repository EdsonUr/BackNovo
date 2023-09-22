const route = require('express').Router();
const animalController = require("../controllers/animal.controller")

route.post("/", animalController.create)
route.get("/", animalController.findAll)
route.delete("/:id", animalController.deleteOne)
route.patch("/:id", animalController.editId)

module.exports = route;