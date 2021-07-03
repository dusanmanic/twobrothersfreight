const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

require("dotenv").config();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = 3002;

app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'firebase.id01@gmail.com',
    pass: 'NemaSifra123' 
  }
});

app.get("/log", function (req, res) {
  res.send('Hello World!!!')
})

app.post("/send", function (req, res) {

    let mailOptions = {
      from: 'Most Famous Company',
      to: 'dusan.manic@hotmail.com',
      subject: 'Job application',
      text: 
      `Hello, you have new application:
      
      First name: ${req.body.mailerState.firstName} 
      Last name: ${req.body.mailerState.lastName}
      Current Street Address (line 1): ${req.body.mailerState.address_one}
      Current Street Address (line 2): ${req.body.mailerState.address_two}
      Country: ${req.body.mailerState.country}
      City: ${req.body.mailerState.city}
      State/Province: ${req.body.mailerState.province}
      Phone number: ${req.body.mailerState.tel}
      E-mail address: ${req.body.mailerState.email}
      How much driving experience: ${req.body.mailerState.driving}
      How many carriers: ${req.body.mailerState.carriers}
      How many accidents: ${req.body.mailerState.accidents}      
      How many violations: ${req.body.mailerState.violations}`
    };

    let responseMail = {
      from: 'Most Famous Company',
      to: `${req.body.mailerState.email}`,
      subject: 'Job application',
      text: `Hello ${req.body.mailerState.firstName} ${req.body.mailerState.lastName}, thank you for application!
      Please verify your information on folowing url "http://213.196.96.84/verify/${req.body.mailerState.verificationURL}"`
    }

    transporter.sendMail(responseMail, function (err, data) {
      if (err) {
        console.log("Error " + err);
        res.json({ status: "Email not sent" });
      } else {
        console.log("Email sent successfully");
        res.json({ status: "Email sent" });
      }
    });
   
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("Error " + err);
        res.json({ status: "Email not sent" });
      } else {
        console.log("Email sent successfully");
        res.json({ status: "Email sent" });
      }
    });
});
  
