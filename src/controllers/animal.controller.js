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

module.exports = { create, findAll}