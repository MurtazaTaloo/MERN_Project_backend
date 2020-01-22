const express = require("express");
const router = express.Router();
const sendMail = require("../controllers/nodeMailer");

router.use("/listings", require("./listing-routes"));

router.use("/orders", require("./order-routes"));

// this call sendMail function in the nodeMailer file in controllers.
router.post("/api/form", sendMail);

module.exports = router;
