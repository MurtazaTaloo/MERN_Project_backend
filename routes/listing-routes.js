const express = require("express");
const router = express.Router();
const {
  createListing,
  getListings,
  getOneListing,
  editListing,
  deleteListing
} = require("../controllers/listing-controller");

//here are the routes to listings
router.post("/new", createListing);
router.get("/all", getListings);
router.put("/edit/:id", editListing);
router.delete("/delete/:id", deleteListing);
router.get("/:id", getOneListing);

module.exports = router;
