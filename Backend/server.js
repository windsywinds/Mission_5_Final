// Importing the Express framework
const express = require("express");
const mongoose = require("mongoose");

// Importing the CORS middleware for handling Cross-Origin Resource Sharing
const cors = require("cors");

// Creating an instance of the Express application
const app = express();

// Setting the port for the server to listen on
const port = 8000;

// Applying the CORS middleware to allow cross-origin requests
app.use(cors());

mongoose.connect("mongodb://localhost:27017/mission5");

const houseSchema = new mongoose.Schema({
  name: String,
  value: Number,
});

const houseModel = mongoose.model("houses", houseSchema);

// Handling GET requests to the "/house" endpoint
app.get("/house", (req, res) => {
  houseModel
    .find({})
    .then(function (houses) {
      res.json(houses);
    })
    .catch(function (err) {
      console.log(err);
    });
});

// Handling GET requests to the "/test" endpoint
app.get("/test", (req, res) => {
  // Responding with a JSON object containing a "text" property
  res.json({ text: "this text is from the backend" });
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  // Logging a message when the server has started successfully
  console.log(`Example app listening on port ${port}`);
});
