const mongoose = require("mongoose")

const connectDatabase = () =>{
    console.log("Wait connecting to database")

    mongoose.connect("mongodb+srv://root:root@cluster0.grkkpkg.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connected"))
    .catch(err => console.log(err))
}

module.exports = connectDatabase