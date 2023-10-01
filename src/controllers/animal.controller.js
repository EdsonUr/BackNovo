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

const findById = async (req,res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: "Invalid ID"})
    }
    
    const animal = await animalService.findByIdService(id);

    if(!animal){
        return res.status(400).send({message: "User not found"})
    }

    res.send(animal)
}

const findByName = async (req,res) => {
    try{
        const name = req.params.name;

        const animal = await animalService.findBName(name);
    
        if(animal.length < 1){
            return res.status(400).send({message: "animal not found"})
        }
    
        res.send(animal)
    }catch(err){
        res.status(400).send({message: "dados inválidos"})
    }
    
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


module.exports = { create, findAll, deleteOne, editId, findById, findByName}