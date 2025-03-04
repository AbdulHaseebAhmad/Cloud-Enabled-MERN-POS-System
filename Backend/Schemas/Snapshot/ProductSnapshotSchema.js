import mongoose, { mongo } from "mongoose";

const ProductSnapshotSchema = new mongoose.Schema({
    Product: {
        type: String,
        required: true
    },
    Stock: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },    
    status: {
        type: String,
        required: true
    },
})

export default mongoose.model("ProductSnapshot", ProductSnapshotSchema);
