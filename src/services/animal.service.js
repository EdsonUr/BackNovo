const Animal = require("../models/Animal")

const createService = (body) => Animal.create(body)

const findAllService = () => Animal.find();

const deleteById = (id) => Animal.deleteOne({_id:id})

const editById = (id, updates) => Animal.updateOne({_id:id}, {$set:updates})

module.exports = {createService, findAllService,deleteById, editById}