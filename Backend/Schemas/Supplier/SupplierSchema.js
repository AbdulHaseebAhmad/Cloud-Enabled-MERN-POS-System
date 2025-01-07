import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
  "Supplier Name": {
    type: String,
    required: true,
  },
  "Supplier Contact": {
    type: String,
    required: true,
  },
  "Supplier Address": {
    type: String,
    required: true,
  },
  "Supplier Id": {
    type: String,
    required: true,
  },
  "Payment Details": {
    type: Object,
    required: true,
  },
  "Total Stock": {
    type: Number,
  },
});

export default mongoose.model("Supplier Details", SupplierSchema);
