// server create karna 
// server ko config karna

const express = require("express")
const app = express() /* server create kiya hai */

app.use(express.json()) //middleware

const notes =[]

// GET /notes
app.get("/notes", (req, res)=>{
    res.send(notes)
})

// POST /notes 
app.post("/notes", (req, res)=>{
    console.log(req.body);
    notes.push(req.body)
    res.send("note created")
    console.log(notes);   
})


// DELETE /notes/:index 
app.delete("/notes/:index", (req, res)=>{
    delete notes[req.params.index];
    console.log("Note deleted successfully");      
})


// PATCH /notes/:index 
app.patch("/notes/:index", (req, res)=>{
    notes[req.params.index].description = req.body.description
    console.log("note updated successfully.");
    
})

module.exports = app