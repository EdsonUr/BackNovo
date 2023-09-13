const racaoService = require("../services/racao.service")

const mongoose = require("mongoose")

const create = async(req,res) => {
    const {name, price, peso, dataCompra} = req.body;
    if(!name || !price || !peso || !dataCompra){
        res.status(400).send({message: "Todos os campos precisam estar preenchidos"})
    }

    const racao = await racaoService.createService(req.body);

    if(!racao){
        return res.status(400).send("Error creating racao.")
    }

    const pesoKg = peso/1000;
    console.log(pesoKg)

    res.status(201).send({
        message: "Racao created successfully",
        racao:{
            name,
            price,
            pesoKg,
            dataCompra
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

module.exports = { create, findAll}