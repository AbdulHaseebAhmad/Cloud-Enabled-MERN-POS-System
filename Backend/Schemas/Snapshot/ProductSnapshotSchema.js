import mongoose, { mongo } from "mongoose";

const ProductSnapshotSchema = new mongoose.Schema({
    Product: {
        type: String,
        required: true
    },
    Stock: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },    
    status: {
        type: String,
        required: true
    }, // re stock or out of stock
    
})

export default mongoose.model("ProductSnapshot", ProductSnapshotSchema);
