import mongoose from "mongoose";
const CategorySnapshotSchema = new mongoose.Schema({

    Category: {
        type: String,
        required: true
    },
    Stock: {
        type: "Number",
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

export default mongoose.model("CategorySnapshot", CategorySnapshotSchema);