const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");

// "position" tells Mongoose to use or create the "positions" collection
const PositionsModel = model("position", PositionsSchema);

module.exports = { PositionsModel };