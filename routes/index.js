const express = require("express");
const router = express.Router();
const sendMail = require("../controllers/nodeMailer")


router.use("/listings", require("./listing-routes"));



router.use("/orders", require("./order-routes"));


module.exports = router;
