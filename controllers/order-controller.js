const Order = require("../models/Order");
const mongoose = require("mongoose");

// only admin can access order routes.

// this will get all the orders for admin
const getOrders = async (req, res) => {
  orders = await Order.find(); // this is an asyn function
  res.json(orders);
};

const getOneOrder = async (req, res) => {
  // console.log(req.params);

  const { id } = req.params;
  console.log(id);
  try {
    let order = await Order.findById(id);

    console.log(order);

    res.json(order);
  } catch (err) {
    res.status(400).send("Error: " + err);
  }
};

const createOrder = async orderDetails => {
  const { itemsInCart, customerInfo, cartTotal } = orderDetails;

  const numberOfItems = itemsInCart.length;

  const newOrder = new Order({
    items: itemsInCart,
    totalValue: cartTotal,
    numberOfItems,
    customer: customerInfo
  });

  try {
    await newOrder.save();
    console.log("order has been created");
  } catch (err) {
    console.log("order has failed");
  }

  return newOrder;
};

module.exports = {
  createOrder,
  getOrders,
  getOneOrder
};
