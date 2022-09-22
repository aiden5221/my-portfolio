require('dotenv').config({ path: '../../.env'})
const nodemailer = require("nodemailer");


exports.handler = async function(event, context, callback){

  const body = JSON.parse(event.body);

  const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });

  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });


  const name = body.firstName + body.lastName;
  const email = body.email;
  const message = body.message;
  const phone = body.phone;

  const mail = {
    from: name,
    to: "aidenjr521@hotmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>`,
  };

  try {
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        console.log('error occurred')
        res.json(error);
      } else {
        console.log('sending message')
        res.json({ code: 200, status: "Message Sent" });
      }
    });

    callback(null, { statusCode: 200, body: JSON.stringify(mail)});

  } catch (error) {
    callback(error)

  }
}


