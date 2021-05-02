const nodemailer = require('nodemailer');

const mailOptions = {
  from: 'firebase.id01@gmail.com',
  to: 'dusan.manic@hotmail.com',
  subject: 'Invoices due',
  text: `zdravo`
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'firebase.id01@gmail.com',
    pass: 'NemaSifra123' 
  }
});

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
  console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});