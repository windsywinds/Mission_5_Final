const express = require("express");

const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
// require("dotenv").config();

const router = express.Router();

//This route handles searching the entire database collection
console.log(process.env.MONGOURI);
const MONGOURI = "mongodb://localhost:27017/";
// Variables for connection to MongoDB
const DB_NAME = "M5PropertyDB";
const COLLECTION_NAME = "rentals";
const client = new MongoClient(MONGOURI);

router.use(bodyParser.json());

router.get("/", async (req, res) => {
  try {
    await client.connect();
    // console.log("Connected to MongoDB"); //sorry i this is still here i forgot to un comment it. it was spamming my console like every .5 seconds and so i turned it off lol
    const database = client.db(DB_NAME);
    const collection = database.collection(COLLECTION_NAME);
    const result = await collection.find().toArray();
    return res.status(200).json(result);
  } catch (error) {
    console.log("Error reading database:", error);
  } finally {
    await client.close();
  }
});

module.exports = router;
