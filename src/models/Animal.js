const mongoose = require('mongoose')

const AnimalSchema = new mongoose.Schema({
    name: {type: String, required:true},
    type: {type: Number, required:true},
    brinquedos: {type: Array, required: true},
    racoes: {type:Array, required:true}
})

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;