const mongoose = require("mongoose");

const modelSchema = mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, required: true },
    
    img1: { type: String, required: true },
    img2: { type: String, trim: true },
    img3: { type: String, trim: true },
    img4: { type: String, trim: true },
    des: { type: String, trim: true, required: true },
    color: { type: String, trim: true, required: true },
    size: { type: String, trim: true, required: true },
  },
  { timestamps: true, versionKey: false }
);

const ProductDetailModel = mongoose.model("productDetails", modelSchema);
module.exports = ProductDetailModel;
