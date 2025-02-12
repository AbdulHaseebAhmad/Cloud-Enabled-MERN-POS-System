import {Router} from "express";
import CategorySnapshotSchema from "../../Schemas/Snapshot/CategorySnapshotSchema.js";



const snapshotRoute = Router();
snapshotRoute.post("/api/snapshots/category/addsnapshot/", async (req, res) => {
    const {Category,Stock,date} = req.body;
    try {
        await CategorySnapshotSchema.create({
            Category,
            Stock,
            date,
        });
        res.status(200).send("Snapshot created successfully");
    }
    catch(err){
        console.log(err);
        res.status(500).send("Error in creating snapshot");
    }
});



export default snapshotRoute;

