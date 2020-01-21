const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const app = express()
const mongoose = require("mongoose");
const cors = require("cors");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/api/form',(req, res) => {
  console.log(req.body)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

// Mongoose

const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(process.env.DB_URL, dbConfig, err => {
  if (err) console.error("Error ❌");
  else console.log("Connected to db ✅");
});

app.use(express.json());
app.use(cors());

//Connecting the routes
app.use(require("./routes/index"));

app.get("/", function(req, res) {
  res.send("hello world");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
