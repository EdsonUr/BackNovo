const Brinquedo = require("../models/Brinquedo")

const createService = (body) => Brinquedo.create(body)

const findAllService = () => Brinquedo.find();

const deleteById = (id) => Brinquedo.deleteOne({_id:id})

const editById = (id, updates) => Brinquedo.updateOne({_id:id}, {$set:updates})

module.exports = {createService, findAllService, deleteById, editById}