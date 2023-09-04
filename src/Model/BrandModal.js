const mongoose = require("mongoose");

const brandSchema = mongoose.Schema(
  {
    brandName: {
      type: String,
      trim: true,
      required: true,
    },
    brandImg: {
      type: String,
      trim: true,
      required: true,
    },
  

  },
  { timestamps: true, versionKey: false }
);

const BrandModel = mongoose.model("brands", brandSchema);
module.exports = BrandModel;
