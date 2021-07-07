const express = require('express');
const fs = require("fs");
const notes = require('./db/db.json');
const path = require("path");
const uuid = require("uuid");

const api = require("./routes/api");
const html = require("./routes/html");

const app = express();
var PORT = process.env.PORT || 3001


// Middleware
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static('public'));

app.use("/api", api);
// app.use("/", html);

// call for notes.html
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// POSt function for adding new notes to db.json 
// app.post("/api/notes", function (req, res){
//   console.log('Here I am');
//   const notes = JSON.parse(fs.readFileSync("./db/db.json"));
//   newNotes.id = uuid.v4();
//   notes.push(newNotes);
//   fs.writeFileSync("./db/db.json", JSON.stringify(notes));
//   res.json(notes);
// });

// Start listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  