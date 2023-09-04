const mongoose = require("mongoose");

const modelSchema = mongoose.Schema(
  {
    productId: {type: mongoose.Schema.Types.ObjectId,required: true},
    userId: {type: mongoose.Schema.Types.ObjectId,required: true},
    invoiceId: {type: mongoose.Schema.Types.ObjectId,required: true},
    
    color: { type: String, required: true },
    size: { type: String, required: true },
    qty: { type: String, required: true },
    price: { type: String, required: true},
  },
  { timestamps: true, versionKey: false }
);

const InvoiceProductModel = mongoose.model("invoiceProducts", modelSchema);
module.exports = InvoiceProductModel;
