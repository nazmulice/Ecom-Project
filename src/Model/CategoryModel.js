const mongoose = require("mongoose");

const modelSchema = mongoose.Schema(
  {
    categoryName: {
      type: String,
      trim: true,
      required: true,
    },
    categoryImg: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const CategoryModel = mongoose.model("categories", modelSchema);
module.exports = CategoryModel;
