let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shresthamit7@gmail.com',
    pass: '@$Sthamit7'
  }
});

let mailOptions = {
  from: 'shresthamit7@gmail.com',
  to: 'shresthamit7@gmail.com',
  subject: 'Sending Email using Node.js',
  text: `This is a test`
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});