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
    type: Number,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  Supplier: {
    type: String,
    required: true,
  },
  variants:[
    {
      name: { type: String, required: true }, 
      sku: { type: String, required: true },
      priceModifier: { type: Number, required: true },
      stock: { type: Number, required: true },
      image: { type: String, required: true },
    }
  ],
  Stock: {
    type: Number,
  },  
  createdDate :{
    type:Date, default: () => new Date() 
  }
});

export default mongoose.model("Product", ProductSchema);
