const UserVerifyService = async (code, email, DataModel) => {
  
  if (code === "0") {
    return 0;
  } else {
    return await DataModel.find({ email: email, otp: code }).count("total");
  }
};
module.exports = UserVerifyService;
