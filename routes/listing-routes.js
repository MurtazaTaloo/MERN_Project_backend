const express = require("express");
const router = express.Router();
const {
  createListing,
  getListings,
  editListing,
  deleteListing
} = require("../controllers/listing-controller");

//here we are going to create routes
router.post("/new", createListing);
router.get("/all", getListings);
router.put("/edit/:id", editListing);
router.delete("/delete/:id", deleteListing);

module.exports = router;
