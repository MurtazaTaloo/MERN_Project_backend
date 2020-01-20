const express = require("express");
const router = express.Router();
const {
  createListing,
  getListings,
  editListing
} = require("../controllers/listing-controller");

//here we are going to create routes
router.post("/new", createListing);
router.get("/all", getListings);
router.put("/edit/:id", editListing);

module.exports = router;
