let jwt = require("jsonwebtoken");
require("dotenv").config();

// this intercepts the requests and call next when condition is met
let checkToken = (req, res, next) => {
  console.log("req headers ", req.headers);
  console.log("inside the middleware");

  let token =
    // checking the header of request to find token and pass just an empty string if not found
    req.headers["x-access-token"] || req.headers["authorization"] || "";

  if (token.startsWith("Bearer ")) {
    // removing Bearer from the token
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: "token is not valid"
        });
      } else {
        // console.log(decoded);
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // status codes are a good practise to send with the request if its been refused
    return res.status(403).json({
      success: false,
      message: "Auth token has not been supplied"
    });
  }
};

module.exports = {
  checkToken: checkToken
};
