const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    Items: Array, // this will contain one or more listing objects
    totalValue: Number,
    NumberOfItems: Number,
    customer: Object // array of objects or just object
  },
  { timestamps: true },

  {
    collection: "orders"
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
