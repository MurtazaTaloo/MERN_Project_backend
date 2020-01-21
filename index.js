require("dotenv").config();
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
  console.log(req.body.name)
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li> Name: ${req.body.name}</li>
        <li> Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'kale.boyer51@ethereal.email',
        pass: 'wfcKKB7hXUUygFjnbT',
      }
    })
    let mailOptions = {
      from: 'xmedicinepower@gmail.com',
      to: 'marco1993@live.com',
      replyTo: 'test@testaccount.com',
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail
    }
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log('Error', err );
      } else {
        console.log('Email En route!');
      }

    // console.log("Message sent: %s", info.messageId);
    // console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
    })
  })
})


// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`)
// });

require("dotenv").config();

const PORT = process.env.PORT || 5000;



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
