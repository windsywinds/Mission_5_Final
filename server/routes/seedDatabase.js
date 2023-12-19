const express = require("express");
const path = require("path");
const fs = require("fs");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
require("dotenv").config();

const router = express.Router();

//This route handles seeding the property file to the database via the frontend client

const MONGOURI = process.env.MONGOURI || "mongodb://localhost:27017/";
// Variables for connection to MongoDB
const DB_NAME = "M5PropertyDB";
const COLLECTION_NAME = "rentals";
const client = new MongoClient(MONGOURI);

router.use(bodyParser.json());
router.post("/", async (req, res) => {
    console.log("Incoming seed request");
    console.log(req.body);
    let filePath;

    if (req.body.requestType === "local") {
        filePath = "../server/data/propertyData.json";
    } else if (req.body.requestType === "docker") {
        filePath = "./data/propertyData.json";
    }
    console.info("Attempting to read file at path:", filePath);
    if (typeof filePath !== "string") {
        console.info("Path not valid. Dir format: ./server/data/propertyData.json");
    }
    try {
        const absolutePath = path.join(process.cwd(), filePath);
        console.info("Attempting to read file at path:", absolutePath);
        const jsonData = JSON.parse(await fs.promises.readFile(absolutePath, "utf-8"));

        await client.connect();
        const database = client.db(DB_NAME);
        const collection = database.collection(COLLECTION_NAME);
        await collection.insertMany(jsonData);
        const result = await collection.find().toArray();
        console.info("Number of new properties added:", jsonData.length);
        return res.status(200).json(result);
    } catch (error) {
        console.log("Error seeding database:", error);
    } finally {
        await client.close();
    }
});

module.exports = router;
