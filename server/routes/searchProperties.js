const express = require("express");
const router = express.Router();
const connectDB = require("../db/db.js");

router.use(express.json());

router.post("/search-properties", async (req, res) => {
    const db = await connectDB();
    console.log(req.body);
    const { address, keywords } = req.body;

    const regexPattern = keywords.map((word) => `\\b${word}\\b`).join("|");
    const regex = new RegExp(regexPattern, "i");
    var query = address ? { address: address } : {};
    if (keywords.length > 0) {
        query = { $or: [{ address: address }, { description: { $regex: regex } }] };
    }
    try {
        const results = await db.find(query).toArray();
        res.send(results);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/search", async (req, res) => {
    const db = await connectDB();
    const searchTerm = req.body.searchTerm;
    const regex = new RegExp(searchTerm, "i");
    try {
        // Use a regular expression to perform a case-insensitive search
        const matchingAddresses = await db
            .find({ address: { $regex: regex } })
            .limit(6)
            .project({ address: 1, _id: 0 })
            .toArray();
        // const items = await db.find({ address: { $regex: searchTerm, $options: "i" } });
        // console.log(matchingAddresses.map((item) => item.address));
        res.json(matchingAddresses.map((item) => item.address));
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
