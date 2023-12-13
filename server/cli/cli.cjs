const fs = require("fs");
const path = require("path");
const program = require("commander");
const { prompt } = require("inquirer");
const { MongoClient, ObjectId } = require("mongodb");

//This CLI exists to seed the DB
// The add function can be used as a template for a front end page to add an entry

const MONGOURI = process.env.MONGOURI || "mongodb://localhost:27017/"
const DBNAME = "M5PropertyDB"
const COLLECTION_NAME = "rentals"

program.version("1.0.0").description("Database entry system");

program
  .command("add")
  .alias("a")
  .description("Add a single entry")
  .action(() => {
    prompt(questions).then((answers) => addEntry(answers));
  });
program
  .command("seed <filePath>")
  .alias("s")
  .description("Automatically add propertys from a json file")
  .action((answer) => seedPropertys(answer));


  const questions = [
    {
      type: "input",
      name: "message",
      message: "Enter your message:",
    }
  ];

  const addEntry = async (message) => {
    const client = new MongoClient(MONGOURI);
    try {
      await client.connect();
      const database = client.db("HelloWorld");
      const collection = database.collection("messages");
      const result = await collection.insertOne(message);
      console.info(`Added new entry with ID: ${result.insertedId}`);
    } finally {
      await client.close();
    }
  };
  const seedPropertys = async (filePath) => {
    console.info("Attempting to read file at path:", filePath);
    if (typeof filePath !== "string") {
      console.info("Path not valid. Dir format: ./server/data/propertyData.json");
    }
    const client = new MongoClient(MONGOURI);
    try {
      const absolutePath = path.join(process.cwd(), filePath);
      console.info("Attempting to read file at path:", absolutePath);
      const jsonData = JSON.parse(
        await fs.promises.readFile(absolutePath, "utf-8"),
      );
  
      await client.connect();
      const database = client.db(DBNAME);
      const collection = database.collection(COLLECTION_NAME);
      await collection.insertMany(jsonData);
      console.info("Number of new properties added:", jsonData.length);
    } finally {
      await client.close();
    }
  };

  program.parse(process.argv);