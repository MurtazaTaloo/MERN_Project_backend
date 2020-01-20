const Listing = require("../models/Listing");
const mongoose = require("mongoose");

// this method gets all the availabe listings.
const getListings = async (req, res) => {
  try {
    let listings = await Listing.find().sort("-createdAt");
    res.json(listings);
  } catch (err) {
    res.status(400).send("Error:" + err);
  }
};

// this method will fetch one listing from the database as per the id
const getOneListing = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    let listing = await Listing.findById(id);

    res.json(listing);
  } catch (err) {
    res.status(400).send("Error: " + err);
  }
};

// this method will create a new listing and save it in the database. Only admin can access the route and it needs admin auth
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

// this method will let you edit a listing by a given id. Only admin can access this route
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
    res.json(err);
  }
};

// this deletes the listing by id. Only admin can access this route
const deleteListing = async (req, res) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findById(id);

    listing.remove();
    res.send("listing deleted.");
  } catch (err) {
    res.status(400).send("Error: " + err);
  }
};

module.exports = {
  createListing,
  getListings,
  editListing,
  deleteListing,
  getOneListing
};
