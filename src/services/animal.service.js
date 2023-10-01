const Animal = require("../models/Animal")

const createService = (body) => Animal.create(body)

const findAllService = () => Animal.find();

const findByIdService = (id) => Animal.findById(id);

const findBName = (name) => Animal.find({name:name})

const deleteById = (id) => Animal.deleteOne({_id:id})

const editById = (id, updates) => Animal.updateOne({_id:id}, {$set:updates})

module.exports = {createService, findAllService,deleteById, editById, findByIdService, findBName}