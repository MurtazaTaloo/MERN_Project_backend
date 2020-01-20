const Listing = require("../models/Listing");
const mongoose = require("mongoose");

const createListing = async (req, res) => {
  const { title, image, description, price, orders, available } = req.body;

  const newListing = new Listing({
    title,
    image,
    description,
    price,
    orders,
    available
  });

  try {
    await newListing.save();
    // const cafeObject = await Cafe.findById(cafe);
    // cafeObject.reviews.push(newListing._id);
    // cafeObject.save();

    res.json(newListing);
  } catch (err) {
    res.status(400).send("Error: " + err);
  }
};

module.exports = { createListing };
