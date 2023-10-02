const brinquedoService = require("../services/brinquedo.service")

const mongoose = require("mongoose")

const create = async(req,res) => {
    try{
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
    }catch(error){
        return res.status(400).send("Error creating brinquedo.")
    }
}

const findAll = async (req,res) =>{
    try{
        const brinquedos = await brinquedoService.findAllService();

        if(brinquedos.length === 0){
            return res.status(400).send({message:"Nao existe brinquedo cadastrado"})
        }
    
        res.send(brinquedos)
    }catch(error){
        return res.status(400).send({message:"Nao existe brinquedo cadastrado"})
    }
    
}

const deleteOne = async (req,res) => {
    try{
        const id = req.params.id;
    
        const user = await brinquedoService.deleteById(id);
    
        if(!user){
            return res.status(400).send({message: "Brinquedo not found"})
        }
    
        res.send(user)
    }catch(error){
        return res.status(400).send({message: "Brinquedo not found"})
    }
    
}

const editId = async (req,res) => {
    try{
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
    }catch(error){
        return res.status(400).send({message: "Error editing"})
    }
    
}

module.exports = { create, findAll, deleteOne, editId}