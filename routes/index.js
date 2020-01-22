const express = require("express");
const router = express.Router();
const sendMail = require("../controllers/nodeMailer")


router.use("/listings", require("./listing-routes"));
router.post("/api/form", sendMail);


module.exports = router;
