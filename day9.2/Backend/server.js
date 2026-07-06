//server start
//connection to db

const app = require("./src/app")
require("dotenv").config()
const mongoose = require("mongoose")
const connectToDB = require("./src/config/database")

connectToDB()

app.listen(3000, ()=>{
    console.log("server is running on port 3000");   
})