const Listing = require("../models/Listing");
const Order = require("../models/Order");
const mongoose = require("mongoose");

// only admin can access order routes.

// this method creates an order (need to figure out what data can I get back from the stripe api)

// const createOrder = async (req, res) => {
//   // assuming that the post request from the front-end after a success page from stripe will send another post request to create a new order in the database. We require an array of product objects to retrieve the id's from it.
//   // let { listings } = req.body; // listings should be an array of all the listings.
//   listings = await Listing.find(); // this is an asyn function
//   // try {
//   //   listings = listings.map(async listing => {
//   //     const foundListing = await Listing.findById(Listing.id);
//   //     return foundListing;
//   //   });
//   // } catch (err) {
//   //   res.status(400).send("Error: " + err);
//   // }
//   const newOrder = new Order({
//     Items: listings,
//     totalValue: 1000, // this should have the total price of the cart
//     NumberOfItems: 3, // this should have the length of the listings array
//     customer: "Murtaza"
//   });

//   try {
//     await newOrder.save();
//     res.json(newOrder);
//   } catch (err) {
//     res.status(400).send("Error: " + err);
//   }

//   // console.log("oh yes it works");
//   // res.send("yes it worked");
// };

// this will get all the orders for admin
const getOrders = async (req, res) => {
  orders = await Order.find(); // this is an asyn function
  res.json(orders);
};

const createOrder = async orderDetails => {
  const { itemsInCart, customerInfo, cartTotal } = orderDetails;
  // console.log(itemsInCart, customerInfo, cartTotal);

  const numberOfItems = itemsInCart.length;

  // console.log(numberOfItems);

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
  // console.log(newOrder);

  return newOrder;
};

module.exports = {
  createOrder,
  getOrders
};
