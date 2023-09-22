const mongoose = require('mongoose')

const BrinquedoSchema = new mongoose.Schema({
    name: {type: String, required:true},
    price: {type: Number, required:true},
    rating: {type: Number, required:true},
    dataCompra: {type:String, required:true},
    userCodigo: {type:String, required: true},
    animalCodigo:{type:String}
})

const Brinquedo = mongoose.model("Brinquedo", BrinquedoSchema);

module.exports = Brinquedo;