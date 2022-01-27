const express = require("express")
const routes = require ("./models/routes")
const mongoose = require("mongoose")

//connect to mongoose database

mongoose
    .connect("mongodb://localhost:27017/anime",{ useNewUrlParser: true})
    .then(()=>{
        const app = express()
        app.use(express.json())
        app.use("/api",routes)

        app.listen(7000,()=>
        {
            console.log("here you are Luffy!!")
        })
    })
