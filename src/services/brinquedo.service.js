const Brinquedo = require("../models/Brinquedo")

const createService = (body) => Brinquedo.create(body)

const findAllService = () => Brinquedo.find();

module.exports = {createService, findAllService}