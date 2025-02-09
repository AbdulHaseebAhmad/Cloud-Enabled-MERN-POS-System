import OrderSchema from "../Schemas/Orders/OrderSchema.js";


const timeStamp = async (req, res, next) => {
  let date = new Date(Date.now());
  date = date.toISOString().split("T")[0];
 try{
  const timeStampedOrders = await OrderSchema.aggregate([
    {
        $match: { createdDate: timeStamp }
    }
]);  
  req.dateAggregatedOrders = timeStampedOrders;
  next();
 }
 catch(err){
    console.log(err);
    return res.status(500).send("Internal Server Error");
 }
};

export default timeStamp;
