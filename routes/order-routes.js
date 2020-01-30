const express = require("express");
const router = express.Router();
const { getOrders, getOneOrder } = require("../controllers/order-controller");

//here are the routes for Orders
router.get("/all", getOrders);
router.get("/:id", getOneOrder);

module.exports = router;
