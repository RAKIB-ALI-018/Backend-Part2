// start the server
// connect to database

const app = require("./src/app")

//connection to database
const mongoose = require("mongoose")

function connectToDB(){
    mongoose.connect("mongodb+srv://rakibali99580_db_user:SMv4Stz8tIAlRoxT@cluster0.bh5nkq2.mongodb.net/day-6")
        .then(()=>{
            console.log("Connect to DB");
            
        })

        .catch((err)=>{
            console.log("Database connection failed: ", err.message);
            
        })
}
connectToDB()

app.listen(3000, ()=>{
    console.log("server is running on port 3000.");
    
})