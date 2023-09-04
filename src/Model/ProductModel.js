const mongoose = require("mongoose");

const modelSchema = mongoose.Schema(
  {
        title: { type: String, trim: true, required: true },
        shortDes: { type: String, trim: true, required: true },
        price: { type: String, trim: true, required: true },
        discount: { type: String, trim: true, default: false },
        discountPrice: { type: String, trim: true },
        image: { type: String, trim: true, required: true },
        star: { type: String, trim: true, required: true },
        stock: { type: String, trim: true, required: true, default: true },
        remarks: { type: String, trim: true, required: true, enum: ["new", "popular", "top", "regular"] },
  },
  { timestamps: true, versionKey: false }
);

const ProductModel = mongoose.model("products", modelSchema);
module.exports = ProductModel;
