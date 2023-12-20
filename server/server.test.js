const express = require("express");
const request = require("supertest");
const supertest = require("supertest");
const { MongoClient } = require("mongodb");

jest.mock('mongodb');

const seedDatabase = require("./routes/seedDatabase.js");
const searchDatabase = require("./routes/searchDatabase.js");
const landing = require("./routes/landing.js");

const app = express();
app.use(express.json());

// Mock a connection to allow testing routes which contain Mongo connections
beforeAll(async () => {
    // Mock MongoClient.connect
    MongoClient.connect.mockResolvedValue({
      db: () => ({
        collection: () => ({
          find: jest.fn().mockResolvedValue([]), // Mock find method to return an empty array
        }),
      }),
      close: jest.fn(), // Mock close method
    });
  });
  
  // Close the mocked MongoDB connection after all tests
afterAll(async () => {
    MongoClient.connect.mockRestore();
  });

app.get("/", landing);
app.use("/seedDatabase", seedDatabase);
app.use("/searchDatabase", searchDatabase);

describe("Check the existence and operation of the server", () => {
  it("#1 route should exist and be a function", () => {
    expect(landing).toBeDefined(); //Checks it is a defined value/type - is boolean
    expect(typeof landing).toBe("function"); //Checked it is a function
  });
  it("#1 should return the expected response from the server if operational", async () => {
    const expected = `
    <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Server</title>
      <style>
      </style>
    </head>
    <body>
  
      <h1>Up and Running!</h1>
    </body>
  </html>
    `
    const response = await request(app).get("/");
    expect(response.text).toContain(expected);
  });
});


