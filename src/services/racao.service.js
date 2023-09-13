const Racao = require("../models/Racao")

const createService = (body) => Racao.create(body)

const findAllService = () => Racao.find();

module.exports = {createService, findAllService}