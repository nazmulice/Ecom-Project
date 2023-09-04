const mongoose = require("mongoose");

const modelSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    otp: { type: String, trim: true, required: true },
  },
  { timestamps: true, versionKey: false }
);

const UserModel = mongoose.model("users", modelSchema);
module.exports = UserModel;
