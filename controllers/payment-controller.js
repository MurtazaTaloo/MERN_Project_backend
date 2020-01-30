const stripe = require("stripe")(process.env.STRIPE);

const { createOrder } = require("../controllers/order-controller");

const processPayment = async (req, res) => {
  const tokenId = req.body.tokenId;
  // console.log(req);
  const amount = req.body.orderData.cartTotal * 100;
  // console.log(amount);
  try {
    let { status } = await stripe.charges.create({
      amount: amount,
      currency: "usd",
      description: "An example charge",
      source: tokenId
    });

    // console.log(req.body.orderData);

    newOrder = createOrder(req.body.orderData);
    res.json({ status });
  } catch (err) {
    // console.log(err);
    res.status(500).end();
  }
};

module.exports = processPayment;
