const SendEmailUtility = require("../utility/sendMail");
const UserModel = require("../Model/UserModel");
const UserOTPService = require("../services/UserOtpService");
const UserVerifyService = require("../services/UserVerifyService");
const { EncodeToken } = require("../services/TokenHelper");

//login & create OTP
exports.UserLogin = async (req, res) => {
  let email = req.params.email;
  let code = Math.floor(100000 + Math.random() * 900000);
  let EmailText = "Your verification code is " + code;
  try {
    await SendEmailUtility(email, EmailText, "OTP Verification code");
    //await UserModel.create({ email: email, otp: code });
    await UserOTPService(code, email, UserModel);
    return res.status(200).json(
      { status: "success", message: code }
    );

  } catch (err) {
    console.log(err);
    return res
      .status(200)
      .json({ status: "fail", message: "Something went wrong" });
  }
};



//Verify OTP
exports.VerifyLogin = async (req, res) => {
  let email = req.params.email;
  let otp = req.params.otp;

  let verify = await UserVerifyService(otp, email, UserModel);
  if (verify === 1) {
    // Create JWT Token
    let token = EncodeToken(email);
    await UserOTPService("0", email, UserModel);
    return res.status(200).json({
      success: true,
      message: "Valid OTP",
      token: token,
    });
  } else {
    return res.status(200).json({
      success: false,
      message: "Invalid OTP",
    });
  }
};



exports.UserLogout = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "UserLogout",
  });
};
