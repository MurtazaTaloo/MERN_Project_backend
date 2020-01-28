const stripe = require("stripe")("sk_test_p1910isHbzlwV1z2skaM50k600GvB2v0rk");

const processPayment = async (req, res) => {
  const tokenId = req.body.tokenId;
  // console.log(body);

  try {
    let { status } = await stripe.charges.create({
      amount: 20000,
      currency: "usd",
      description: "An example charge",
      source: tokenId
    });

    res.json({ status });
  } catch (err) {
    // console.log(err);
    res.status(500).end();
  }
};

module.exports = processPayment;
