const route = require('express').Router();
const userController = require("../controllers/user.controller")

route.post("/", userController.create)
route.get("/login", userController.login)
route.get("/", userController.findAll)
route.get("/:name", userController.findByName)

module.exports = route;