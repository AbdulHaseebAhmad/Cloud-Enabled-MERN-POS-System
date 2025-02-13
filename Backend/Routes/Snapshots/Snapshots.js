import {Router} from "express";
import CategorySnapshotSchema from "../../Schemas/Snapshot/CategorySnapshotSchema.js";
import OrderSchema from "../../Schemas/Orders/OrderSchema.js";


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


snapshotRoute.get("/api/snapshots/category/snapshot", async (req, res) => {
        try{
            let categorySnapshotArray = await CategorySnapshotSchema.aggregate([
                {
                    $group: {
                        _id: {
                            category: "$Category",
                            month: { $month: { $toDate: "$date" } }  
                        },
                        totalStock: { $sum: "$Stock" }  
                    }
                }
            ]);
            
            let salesSnapshotsArray = await OrderSchema.aggregate([
                { 
                    $unwind: "$cartItems"  
                },
                {
                    $group: {
                        _id: {
                            category: "$cartItems.Category",  
                            month: { $month: { $toDate: "$createdDate" } }  
                        },
                        totalSales: { $sum: "$cartItems.Qty" }  
                    }
                }
            ]);

            let data = categorySnapshotArray.map(({_id:{category,month},totalStock}) => {
                let sales = salesSnapshotsArray.find(({_id:{category:category2,month:month2}}) => category === category2 && month === month2 );
                return {
                    refund:0,
                    category,
                    month,
                    totalStock,
                    sales: sales ? sales.totalSales : 0,
                    netSales:0
                };
            }).sort((a, b) => a.month - b.month);
            res.status(200).send(data);
        }
        catch(err){
            console.log(err);
            res.status(500).send("Error in fetching snapshots");
        }
        
    
});    

export default snapshotRoute;

