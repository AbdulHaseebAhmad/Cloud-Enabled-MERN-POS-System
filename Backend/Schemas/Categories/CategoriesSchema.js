import mongoose from 'mongoose';

const CategoriesSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String,  },
    image: { type: String,  },
    products: { type: Array, default: [] },
    suppliers: { type: Array, default: [] },
    status: { type: String, default: "Active" },
    stock: { type: Number, default: 0 },
    });




export default mongoose.model("Category", CategoriesSchema);

