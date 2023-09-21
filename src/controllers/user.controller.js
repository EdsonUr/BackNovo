const User = require("../models/User");
const userService = require("../services/user.service")

const mongoose = require("mongoose")

const create = async(req,res) => {
    const {name, userName, email, password, avatar, background} = req.body;
    if(!name || !userName || !email || !password || !avatar || !background ){
        res.status(400).send({message: "Todos os campos precisam estar preenchidos"})
    }

    const user = await userService.createService(req.body);

    if(!user){
        return res.status(400).send("Error creating user.")
    }

    res.status(201).send({
        message: "User created successfully",
        user:{
            id: user._id,
            name,
            userName,
            email,
            password,
            avatar,
            background
        }
    })
}

const findAll = async (req,res) =>{
    const users = await userService.findAllService();

    if(users.length === 0){
        return res.status(400).send({message:"There are no registered users"})
    }

    res.send(users)
}

const findById = async (req,res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: "Invalid ID"})
    }
    
    const user = await userService.findByIdService(id);

    if(!user){
        return res.status(400).send({message: "User not found"})
    }

    res.send(user)
}

const findByName = async (req,res) => {
    const name = req.params.name;

    const user = await userService.findBName(name);

    if(user.length < 1){
        return res.status(400).send({message: "User not found"})
    }

    res.send(user)
}

const login = async (req,res) => {
    const name = req.query.name;

    const check = await userService.findBName(name)
    if(check[0].password === req.query.password){
        res.send(check)
    }else{
        return res.status(400).send({message: "Senha errada"})
    }

}

module.exports = { create, findAll, findById, findByName, login}