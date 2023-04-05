const express = require("express");
const dotenv = require('dotenv')
dotenv.config();

// creating server
const app = express();
const notes = require("./data/notes");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("api is running");
    console.log(notes);
})

//creating api to handle get request and returning the response
app.get("/api/notes", (req, res) => {

    // const note = notes.filter((ob) => ob.id === id)
    //return notes list as response with 200 status code
     res.status(200).json({
        status: "true",
        msg: "Notes fetched ",
        notes
    });
    // res.json(notes);
})

app.get("/api/notes/:id", (req, res) =>{
    // keep req before res

    // fetch id from url 
    const { id } = req.params;

    console.log(req.params);

    //finding note with that id
    const note = notes.filter((doc) =>
        doc.iid === parseInt(id)
    );
    // res.send(note);
    res.status(200).json({
        status: "true",
        msg: `Notes by ${id} fetched`,
        note
    })
})
// has to be at end
app.listen(5000,console.log(`Server started at ${PORT} port`));
