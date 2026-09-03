const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

// "order" tells Mongoose to use or create the "orders" collection
const OrdersModel = model("order", OrdersSchema);

module.exports = { OrdersModel };