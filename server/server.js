const cors = require("cors");
const express = require("express");
const dotenv = require('dotenv')
const bodyParser = require("body-parser");

//route paths
const landing = require("./routes/landing.js");
const seedDatabase = require("./routes/seedDatabase.js")
const searchDatabase = require("./routes/searchDatabase.js")

const app = express();
const PORT = process.env.PORT || 8001;


//Middleware
//tell cors to allow requests from all origins to prevent rejection in container
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: '*',
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

//routes
app.get("/", landing);
app.use("/seedDatabase", cors(corsOptions), seedDatabase);
app.use("/searchDatabase", cors(corsOptions), searchDatabase);

//Handle any unexpected or missed errors
app.use((error, req, res, next) => {
  console.error(error.stack);
  // Check if the error is a known type
  if (error.name === 'ValidationError') {
    // Handle validation errors
    res.status(400).json({ error: 'Validation failed', details: error.errors });
  } else {
    res.status(500).json({ error: 'Internal server error' });
  }
});

const server = app.listen(PORT, () => {
  const address = server.address();
  const host = address.address === '::' ? 'localhost' : address.address;
  console.log(`The server is running on address: ${host}:${address.port}`);
});

