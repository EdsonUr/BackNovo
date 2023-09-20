const Racao = require("../models/Racao")

const createService = (body) => Racao.create(body)

const findAllService = () => Racao.find();

const deleteById = (id) => Racao.deleteOne({_id:id})

const editById = (id, updates) => Racao.updateOne({_id:id}, {$set:updates})

module.exports = {createService, findAllService, deleteById, editById}