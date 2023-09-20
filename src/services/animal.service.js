const Animal = require("../models/Animal")

const createService = (body) => Animal.create(body)

const findAllService = () => Animal.find();

module.exports = {createService, findAllService}