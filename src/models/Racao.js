const mongoose = require('mongoose')

const RacaoSchema = new mongoose.Schema({
    name: {type: String, required:true},
    price: {type: Number, required:true},
    peso: {type: Number, required:true},
    rating: {type:Number, required:true},
    dataCompra: {type:String, required:true},
    userCodigo: {type:String, required: true},
    animalCodigo:{type:String}
})

const Racao = mongoose.model("Racao", RacaoSchema);

module.exports = Racao;