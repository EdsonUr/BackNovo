const express = require('express');
const cors = require('cors');
const userRoute = require("./src/routes/user.route")
const racaoRoute = require("./src/routes/racao.route")
const brinquedoRoute = require("./src/routes/brinquedo.route")
const animalRoute = require("./src/routes/animal.route")
const connectDatabase = require("./src/database/db")

const app = express();
app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","POST, PUT, PATCH, GET, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Headers","Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization")
    app.use((cors()));
    next();
})
const port = 5000;
connectDatabase();

app.use(express.json())

app.use("/user", userRoute);
app.use("/racao", racaoRoute);
app.use("/brinquedo", brinquedoRoute)
app.use("/animal",animalRoute )

app.listen(port, () => console.log(`http://localhost:${port}`))