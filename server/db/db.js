const { MongoClient } = require("mongodb");
const MONGOURI = process.env.MONGOURI || "mongodb://127.0.0.1:27017/";
const DB_NAME = "M5PropertyDB";
const COLLECTION_NAME = "rentals";
const client = new MongoClient(MONGOURI);

async function connectDB() {
    try {
        await client.connect();
        const db = client.db(DB_NAME).collection(COLLECTION_NAME);
        return db;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit with failure
    }
}

module.exports = connectDB;
