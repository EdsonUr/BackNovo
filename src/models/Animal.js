const mongoose = require('mongoose')

const AnimalSchema = new mongoose.Schema({
    name: {type: String, required:true},
    type: {type: String, required:true},
    userCodigo: {type:String, required: true},
})

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;