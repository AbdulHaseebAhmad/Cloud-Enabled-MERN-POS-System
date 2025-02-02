import { Router } from "express";
import OrderSchema from "../../Schemas/Orders/OrderSchema.js";
import ProductSchema from "../../Schemas/Product/ProductSchema.js";

const ordersRoute = Router();


ordersRoute.post("/api/order/checkout", async (request,response)=>{
   const {order} = request.body;
   const {cartItems}= order;
   console.log(cartItems)
  try{
    for (const orderItem of cartItems) {
      await ProductSchema.findOneAndUpdate(
        { "variants.sku": orderItem.sku }, 
        { $inc: { "variants.$.stock": -orderItem.Qty, Stock: -orderItem.Qty } }
      );
    }
    await OrderSchema.create(order); 
    request.io.emit("changesMadeToProducts", "Product stock updated");
    response.status(200).send("Order created successfully");
  }
  catch(err){
    response.status(500).send("Error creating order");
  }
})


export default ordersRoute;