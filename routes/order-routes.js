const express = require("express");
const router = express.Router();
const { createOrder, getOrders } = require("../controllers/order-controller");

//here are the routes for Orders
router.post("/new", createOrder);
router.get("/all", getOrders);

module.exports = router;
