const animalService = require("../services/animal.service")

const mongoose = require("mongoose")

const create = async(req,res) => {
    const {name, type, userCodigo} = req.body;
    if(!name || !type|| !userCodigo){
        res.status(400).send({message: "Todos os campos precisam estar preenchidos"})
    }

    const animal = await animalService.createService(req.body);

    if(!animal){
        return res.status(400).send("Error creating animal.")
    }

    res.status(201).send({
        message: "Animal created successfully",
        racao:{
            name,
            type,
            userCodigo
        }
    })
}

const findAll = async (req,res) =>{
    const animais = await animalService.findAllService();

    if(animais.length === 0){
        return res.status(400).send({message:"Nao existe animal cadastrado"})
    }

    res.send(animais)
}

const deleteOne = async (req,res) => {
    const id = req.params.id;
    
    const user = await animalService.deleteById(id);

    if(!user){
        return res.status(400).send({message: "Animal not found"})
    }

    res.send(user)
}

const editId = async (req,res) => {
    const id = req.params.id;
    const updates = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: "Invalid ID"})
    }

    const edit = await animalService.editById(id, updates);

    if(!edit){
        return res.status(400).send({message: "Animal not found"})
    }

    res.send(edit)
}


module.exports = { create, findAll, deleteOne, editId}