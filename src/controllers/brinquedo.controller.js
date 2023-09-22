const brinquedoService = require("../services/brinquedo.service")

const mongoose = require("mongoose")

const create = async(req,res) => {
    const {name, price, rating, dataCompra, userCodigo} = req.body;
    if(!name || !price || !rating || !dataCompra || !userCodigo){
        res.status(400).send({message: "Todos os campos precisam estar preenchidos"})
    }

    const brinquedo = await brinquedoService.createService(req.body);

    if(!brinquedo){
        return res.status(400).send("Error creating brinquedo.")
    }

    res.status(201).send({
        message: "Racao created successfully",
        racao:{
            name,
            price,
            rating,
            dataCompra,
            userCodigo
        }
    })
}

const findAll = async (req,res) =>{
    const brinquedos = await brinquedoService.findAllService();

    if(brinquedos.length === 0){
        return res.status(400).send({message:"Nao existe brinquedo cadastrado"})
    }

    res.send(brinquedos)
}

const deleteOne = async (req,res) => {
    const id = req.params.id;
    
    const user = await brinquedoService.deleteById(id);

    if(!user){
        return res.status(400).send({message: "Brinquedo not found"})
    }

    res.send(user)
}

const editId = async (req,res) => {
    const id = req.params.id;
    const updates = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: "Invalid ID"})
    }

    const edit = await brinquedoService.editById(id, updates);

    if(!edit){
        return res.status(400).send({message: "Brinquedo not found"})
    }

    res.send(edit)
}

module.exports = { create, findAll, deleteOne, editId}