const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
  name: {
    type: String,
    required: [true, "Stock name is required"],
    trim: true,
  },
  qty: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [1, "Quantity must be at least 1"],
  },
  avg: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  net: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
});

module.exports = { HoldingsSchema };