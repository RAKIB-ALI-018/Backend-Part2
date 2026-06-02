//server ko start karta hai
//aur database se connect karta hai


const app = require("./src/app")
const mongoose = require("mongoose")
const connectToDB = require("./src/config/database")
require("dotenv").config()

connectToDB()


app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");   
})