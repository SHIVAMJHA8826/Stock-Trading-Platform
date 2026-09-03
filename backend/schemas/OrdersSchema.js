const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
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
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  mode: {
    type: String,
    required: true,
    enum: ["BUY", "SELL"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = { OrdersSchema };