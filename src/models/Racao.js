const mongoose = require('mongoose')

const RacaoSchema = new mongoose.Schema({
    name: {type: String, required:true},
    price: {type: Number, required:true},
    peso: {type: Number, required:true},
    dataCompra: {type:String, required:true},
})

const Racao = mongoose.model("Racao", RacaoSchema);

module.exports = Racao;