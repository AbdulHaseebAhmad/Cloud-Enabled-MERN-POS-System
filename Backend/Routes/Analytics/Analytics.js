import { Router } from "express";
import OrderSchema from "../../Schemas/Orders/OrderSchema.js";
import ProductSchema from "../../Schemas/Product/ProductSchema.js";
import SupplierSchema from "../../Schemas/Supplier/SupplierSchema.js";
import timeStamp from "../../Middlewares/TimeStamp.js";

const analyticsRoute = Router();

analyticsRoute.get(
  "/api/analytics/live-metrics/sales",
  timeStamp,
  async (req, res) => {
    console.log(req.dateAggregatedOrders);
    const totalOrders = req.dateAggregatedOrders.length;
    const totalSales = req.dateAggregatedOrders.reduce(
      (acc, order) => acc + order.totalPrice,
      0
    );
    const averageOrderValue = totalSales / totalOrders;

    let bestSellingProduct = Object.entries(
      req.dateAggregatedOrders
        .map(({ cartItems }) => {
          return cartItems;
        })
        .reduce((acc, cartItems) => {
          cartItems.forEach(({ "Product Name": name, Qty }) => {
            if (acc[name]) {
              acc[name] += Qty;
            } else {
              acc[name] = Qty;
            }
          });
          return acc;
        }, {})
    ).reduce(
      (acc, [name, qty]) => {
        if (acc[1] < qty) {
          acc = [name, qty];
        }
        return acc;
      },
      ["", 0]
    );

    const salesPerCustomer = "No Data";
    const RreturnedSales = "No Data";

    return res
      .status(200)
      .json({
        "Total Sales": `$ ${totalSales.toFixed(2)}`,
        "Avg Order Value":`$ ${averageOrderValue.toFixed(2)}`,
        "Best Product": bestSellingProduct[0],
        "Sales Per Customer": salesPerCustomer,
        "Returned Sales": RreturnedSales,
      });
  }
);

export default analyticsRoute;
