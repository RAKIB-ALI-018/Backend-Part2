// server create
const express = require("express")
const app = express()

const path = require('path') //new thing
const cors = require("cors") //new thing
const noteModel = require("./Models/notes.model")




app.use(express.json()) //Middleware
app.use(cors())
app.use(express.static("./public")) //new thing





// POST /api/notes
// create a new note and save data in mongodb
// req.body = {title, description}
app.post("/api/notes", async (req, res)=>{
    const {title, description} = req.body

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message:"Note created Successfully",
        note
    })
})

// GET /api/notes
// fetch all the data from mongodb and send them in resposnse

app.get("/api/notes", async (req, res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message:"Notes fetched successfully.",
        notes
    })
})

// DELETE /api/notes/:id
// delete node with the id rom req.params

app.delete("/api/notes/:id", async (req, res)=>{
    const id = req.params.id
    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"Note deleted successfully."
    })
})

// PATCH /api/notes/:id
// update the description of note by the id
// req.body = {description}
app.patch("/api/notes/:id", async (req, res)=>{
    const id = req.params.id
    const {description} = req.body

    await noteModel.findByIdAndUpdate(id, {description})

    res.status(200).json({
        message:"Note updated Successfully."
    })
})


//middleware
//Maan lo user ne wo api request ki jo 
// humne create hi nahi hai toh 
// ye middleware usse kuch response bhejega

// console.log(__dirname)
app.use('*name', (req, res)=>{ 
    res.sendFile(path.join(__dirname, ".." , "/public/index.html"))   
})

module.exports = app