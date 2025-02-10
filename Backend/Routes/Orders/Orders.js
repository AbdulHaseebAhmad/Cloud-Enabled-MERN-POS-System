import { Router } from "express";
import OrderSchema from "../../Schemas/Orders/OrderSchema.js";
import ProductSchema from "../../Schemas/Product/ProductSchema.js";
import SupplierSchema from "../../Schemas/Supplier/SupplierSchema.js";
import CategoriesSchema from "../../Schemas/Categories/CategoriesSchema.js";
const ordersRoute = Router();

ordersRoute.post("/api/order/checkout", async (request, response) => {
  const { order } = request.body;
  const { cartItems } = order;
  try {
    for (const orderItem of cartItems) {
      await ProductSchema.findOneAndUpdate(
        { "variants.sku": orderItem.sku },
        { $inc: { "variants.$.stock": -orderItem.Qty, Stock: -orderItem.Qty } }
      );
      await SupplierSchema.findOneAndUpdate(
        { "Supplier Name": orderItem.Supplier },
        { $inc: { 'Total Stock': -orderItem.Qty } }
      );
      await CategoriesSchema.findOneAndUpdate(
        { "name": orderItem.Category },
        { $inc: { 'stock': -orderItem.Qty } }
      );
    }
    
    await OrderSchema.create(order);
    request.io.emit("changesMadeToProducts", "Product stock updated");
    request.io.emit("changesMadeToSuppliers", "Supplier stock updated");
    response.status(200).send("Order created successfully");
  } catch (err) {
   // console.log(err);
    response.status(500).send("Error creating order");
  }
});



export default ordersRoute;
