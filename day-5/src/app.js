const express = require("express")

const app = express()

app.use(express.json()) //middleware

const notes = []

// GET /notes
app.get("/notes", (req, res)=>{
    res.send(notes)
})

// POST /notes
app.post("/notes", (req, res)=>{
    console.log(req.body)
    notes.push(req.body)
    
    res.send("note created.")
})

// DELETE /notes/:index
app.delete("/notes/:index", (req, res)=>{
    delete notes[req.params.index];

    res.send("note deleted successfully.")
})

// PATCH /notes/:index
app.patch("/notes/:index", (req, res)=>{
    notes[req.params.index].title = req.body.title
    notes[req.params.index].description = req.body.description

    res.send("note updates successfully.")
})




module.exports = app