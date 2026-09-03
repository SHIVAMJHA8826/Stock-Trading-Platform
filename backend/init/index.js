require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");
const { holdings, positions } = require("./data");

const url = process.env.MONGO_URL;

async function initDB() {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB for data seeding...");

    // Clear old data to prevent duplicate items
    await HoldingsModel.deleteMany({});
    await PositionsModel.deleteMany({});

    // Insert holdings & positions
    await HoldingsModel.insertMany(holdings);
    console.log(`Inserted ${holdings.length} holdings.`);

    await PositionsModel.insertMany(positions);
    console.log(`Inserted ${positions.length} positions.`);

    console.log("Database initialized successfully!");
  } catch (err) {
    console.error("Error inserting data into MongoDB:", err);
  } finally {
    await mongoose.connection.close();
  }
}

initDB();