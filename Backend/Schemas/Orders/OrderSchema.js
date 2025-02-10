import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true, unique: true },
  cartItems: { type: Array, required: true },
  totalPrice: { type: Number, required: true },
  discount: {
    amount: { type: Number, default: 0 },  
    type: { type: String, enum: ["percentage", "flat"], default: "flat" },  
    details: { type: String }, 
  },
  coupon: {
    code: { type: String },  
    discountAmount: { type: Number, default: 0 },  
  },
  cashierId: { type: String },  
  createdDate: { type: String, default: () => new Date().toISOString().split("T")[0] }, 
  createdTime: { type: String, default: () => new Date().toISOString().split("T")[1].split(".")[0] },  
  paymentMethod: { type: String, enum: ["Cash", "Card", "UPI"] },
  status: { type: String, default: "Completed" },
  notes: { type: String },
  Supplier: { type: String },
  Category: { type: String },
});


export default mongoose.model("Order", OrderSchema);
