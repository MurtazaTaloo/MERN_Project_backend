const express = require("express");
const router = express.Router();

router.use("/listings", require("./listing-routes"));

module.exports = router;
