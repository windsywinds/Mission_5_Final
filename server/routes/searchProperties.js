const express = require("express");
const router = express.Router();
const connectDB = require("../db/db.js");

router.use(express.json());

const keysForDb = { bedroom: "bedrooms", bathroom: "bathrooms", rent: "price", pets: "pets" };

const createQuery = (data) => {
    let amountToQuery = 0;
    let addressQuery = {};
    const query = [];

    const createKeywordRegex = (keywords) => {
        const regexPattern = keywords.map((word) => `\\b${word}\\b`).join("|");
        return new RegExp(regexPattern, "i");
    };

    for (const key in data) {
        if (Array.isArray(data[key])) {
            if (key !== "keywords") {
                const [from, to] = data[key];
                if (from !== "Any" || to !== from) {
                    var rangeQuery = {};
                    if (to === "Any") {
                        rangeQuery = to === from ? { [keysForDb[key]]: from } : { [keysForDb[key]]: { $gte: from === "Any" ? 0 : from } };
                    } else {
                        rangeQuery = to === from ? { [keysForDb[key]]: from } : { [keysForDb[key]]: { $gte: from === "Any" ? 0 : from, $lte: to } };
                    }
                    query.push(rangeQuery);
                }
            } else {
                const keywords = data[key];
                if (keywords.length > 0) {
                    const regex = createKeywordRegex(keywords);
                    query.push({ description: { $regex: regex } });
                }
            }
        } else {
            if (key === "address" && data[key].length > 0) {
                addressQuery = { [key]: data[key] };
                amountToQuery++;
            } else if (key !== "address" && data[key] !== "Any") {
                query.push({ [key]: data[key] });
            }
        }
    }

    let finalQuery = {};
    if (amountToQuery + query.length >= 2) {
        finalQuery = amountToQuery === 0 ? { $and: query } : { $or: [addressQuery, { $and: query }] };
    } else {
        finalQuery = amountToQuery === 0 ? (query.length > 0 ? { $and: query } : {}) : addressQuery;
    }
    // console.log(finalQuery);
    return finalQuery;
};

router.post("/search-properties", async (req, res) => {
    const db = await connectDB();

    const query = createQuery(req.body);

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
