const racaoService = require("../services/racao.service")

const mongoose = require("mongoose")

const create = async(req,res) => {
    const {name, price, peso, rating, dataCompra, userCodigo} = req.body;
    if(!name || !price || !peso || !rating || !dataCompra || !userCodigo){
        res.status(400).send({message: "Todos os campos precisam estar preenchidos"})
    }

    const racao = await racaoService.createService(req.body);

    if(!racao){
        return res.status(400).send("Error creating racao.")
    }

    const pesoKg = peso/1000;

    res.status(201).send({
        message: "Racao created successfully",
        racao:{
            name,
            price,
            pesoKg,
            rating,
            dataCompra,
            userCodigo
        }
    })
}

const findAll = async (req,res) =>{
    const racoes = await racaoService.findAllService();

    if(racoes.length === 0){
        return res.status(400).send({message:"Nao existe ração cadastrada"})
    }

    res.send(racoes)
}

const deleteOne = async (req,res) => {
    const id = req.params.id;
    
    const user = await racaoService.deleteById(id);

    if(!user){
        return res.status(400).send({message: "Ração not found"})
    }

    res.send(user)
}

const editId = async (req,res) => {
    const id = req.params.id;
    const updates = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: "Invalid ID"})
    }

    const edit = await racaoService.editById(id, updates);

    if(!edit){
        return res.status(400).send({message: "Ração not found"})
    }

    res.send(edit)
}

module.exports = { create, findAll, deleteOne, editId}