const { model } = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema");

// "holding" tells Mongoose to use or create the "holdings" collection
const HoldingsModel = model("holding", HoldingsSchema);

module.exports = { HoldingsModel };