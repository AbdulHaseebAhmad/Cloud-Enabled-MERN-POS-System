import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  "Product Name": {
    type: String,
    required: true,
  },
  SKU: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Category: {
    type: Object,
    required: true,
  },
  Supplier: {
    type: String,
    required: true,
  },
  variants:{
    type: Array,
  },
  Stock: {
    type: Number,
  },  
});

export default mongoose.model("Product", ProductSchema);
