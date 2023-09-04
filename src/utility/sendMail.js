const nodemailer = require("nodemailer");
require("dotenv").config();
const SendEmailUtility = async (EmailTo, EmailText, EmailSubject) => {
  try {
    let transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_APP_EMAIL, // host gmail acc
        pass: process.env.GMAIL_APP_PASSWORD, // host gmail app password
      },
    });

    let mailOptions = {
      from: "Ecommerce User Verify <nazmul.000150@gmail.com>",
      to: EmailTo,
      subject: EmailSubject,
      text: EmailText,
    };

    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
module.exports = SendEmailUtility;