const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema(
  {
    title: String,
    image: String,
    description: String,
    price: String,
    orders: Number,
    available: Boolean
  },
  {
    collection: "listings"
  }
);

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
