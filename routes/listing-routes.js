const express = require("express");
const router = express.Router();
const {
  createListing,
  getListings
} = require("../controllers/listing-controller");

//here we are going to create routes
router.post("/new", createListing);
router.get("/all", getListings);

module.exports = router;
