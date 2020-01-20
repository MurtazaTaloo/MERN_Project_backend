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
    res.json(newListing);
  } catch (err) {
    res.status(400).send("Error: " + err);
  }
};

const getListings = async (req, res) => {
  let listings = await Listing.find().sort("-createdAt");
  res.json(listings);

  // return res;
};

const editListing = async (req, res) => {
  const { id } = req.params;
  const { title, image, description, price, orders, available } = req.body;

  try {
    let listing = await Listing.findById(id);
    listing.title = title;
    listing.description = description;
    listing.image = image;
    listing.price = price;
    listing.orders = orders;
    listing.available = available;
    await listing.save();

    // or this
    // await Listing.updateOne({ id: id }, { title: title });
    console.log(listing);

    res.json(listing);
  } catch (err) {
    console.log(err);

    res.json(err);
  }
};

// const deleteReview = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const review = await Review.findById(id);
//     const cafe = await Cafe.findById(review.cafe);
//     const index = cafe.reviews.indexOf(id);
//     cafe.reviews.splice(index, 1);
//     cafe.save();
//     review.remove();
//     res.send("Review deleted.");
//   } catch (err) {
//     res.status(400).send("Error: " + err);
//   }
// };

module.exports = { createListing, getListings, editListing };
