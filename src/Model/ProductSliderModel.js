const mongoose = require("mongoose");

const modelSchema = mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, required: true },
    title: { type: String, trim: true, required: true },
    des: { type: String, trim: true, required: true },
    price: { type: String, trim: true, required: true },
    image: { type: String, trim: true, required: true },
  },
  { timestamps: true, versionKey: false }
);

const ProductSliderModel = mongoose.model("productSliders", modelSchema);
module.exports = ProductSliderModel;
