import { Router } from "express";
import OrderSchema from "../../Schemas/Orders/OrderSchema.js";


const ordersRoute = Router();


ordersRoute.post("/api/order/checkout", async (request,response)=>{
   const {order} = request.body;
    console.log(order)
  try{
    await OrderSchema.create(order); 

    request.io.emit("orderPlaced", (parseInt(order.orderNumber,10)+1));
    response.status(200).send("Order created successfully");
  }
  catch(err){
    response.status(500).send("Error creating order");
  }
})


export default ordersRoute;