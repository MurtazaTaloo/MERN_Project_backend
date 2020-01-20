const express = require("express");
const router = express.Router();
const { createListing } = require("../controllers/listing-controller");

//here we are going to create routes
router.post("/new", createListing);

module.exports = router;
