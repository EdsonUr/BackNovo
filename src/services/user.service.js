const User = require("../models/User")

const createService = (body) => User.create(body)

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id)

const findBName = (name) => User.find({name:name})

module.exports = {createService, findAllService, findByIdService, findBName}