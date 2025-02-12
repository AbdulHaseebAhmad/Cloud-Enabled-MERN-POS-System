import { Router } from "express";
import OrderSchema from "../../Schemas/Orders/OrderSchema.js";
import ProductSchema from "../../Schemas/Product/ProductSchema.js";
import SupplierSchema from "../../Schemas/Supplier/SupplierSchema.js";
import CategoriesSchema from "../../Schemas/Categories/CategoriesSchema.js";
import CategorySnapshotSchema from "../../Schemas/Snapshot/CategorySnapshotSchema.js";
import ProductSnapshotSchema from "../../Schemas/Snapshot/ProductSnapshotSchema.js";
const ordersRoute = Router();

ordersRoute.post("/api/order/checkout", async (request, response) => {
  const { order } = request.body;
  const { cartItems } = order;
  let categoryStock = "";
  let productStock = "";
  try {
    for (const orderItem of cartItems) {
      productStock = await ProductSchema.findOneAndUpdate(
        { "variants.sku": orderItem.sku },
        { $inc: { "variants.$.stock": -orderItem.Qty, Stock: -orderItem.Qty } },
        { new: true, projection: { Stock: 1 } } // Corrected options
      );
      await SupplierSchema.findOneAndUpdate(
        { "Supplier Name": orderItem.Supplier },
        { $inc: { 'Total Stock': -orderItem.Qty } }
      );
       categoryStock = await CategoriesSchema.findOneAndUpdate(
        { name: orderItem.Category },
        { $inc: { 'stock': -orderItem.Qty } },
        { new: true, projection: { stock: 1 } }  
      );
      if(categoryStock.stock === 0 ){
        await CategorySnapshotSchema.create({
          Category: orderItem.Category,
          Stock: 0,
          date: new Date(),
          status: "Out of stock",
          newProduct: false
  });}
      // 
    if(productStock.Stock ===0){
      await ProductSnapshotSchema.create({
        Product: orderItem['Product Name'],
        Stock: 0,
        date: new Date(),
        status: "Out of stock"
      });
    }

}
    
    await OrderSchema.create(order);
 
    request.io.emit("changesMadeToProducts", "Product stock updated");
    request.io.emit("changesMadeToSuppliers", "Supplier stock updated");
    response.status(200).send("Order created successfully");
  } catch (err) {
   console.log(err);
    response.status(500).send("Error creating order");
  }
});



export default ordersRoute;
