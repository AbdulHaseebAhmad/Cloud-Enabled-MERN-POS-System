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

    return res.status(200).json({
      "Total Sales": `$ ${totalSales.toFixed(2)}`,
      "Avg Order Value": `$ ${averageOrderValue.toFixed(2)}`,
      "Best Product": bestSellingProduct[0],
      "Sales Per Customer": salesPerCustomer,
      "Returned Sales": RreturnedSales,
    });
  }
);

analyticsRoute.get(
  "/api/analytics/live-metrics/inventory",
  timeStamp,
  async (req, res) => {
    const { dateAggregatedOrders } = req;
    try {
      const totalProducts = await ProductSchema.countDocuments();
      const totalStocks = await ProductSchema.aggregate([
        {
          $group: {
            _id: null,
            totalStocks: {
              $sum: "$Stock",
            },
          },
        },
      ]);
      const lowStock = await ProductSchema.find(
        { Stock: { $lt: 200 } },
        {
          _id: 1,
          "Product Name": 1,
          Stock: 1,
        }
      )
        .sort({ Stock: 1 })
        .limit(1);

      let fastMovingStock = Object.entries(
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
      res.status(200).json({
        // "Total Products": totalProducts,
        "Total Stock": totalStocks[0].totalStocks,
        "Low Stock": lowStock[0]["Product Name"],
        "Fast Moving Stock": fastMovingStock[0],
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
);

analyticsRoute.get(
  "/api/analytics/live-metrics/products",
  timeStamp,
  async (req, res) => {
    try {
      const totalProductsValuee = await ProductSchema.aggregate([
        { $unwind: "$variants" },
        {
          $project: {
            _id: 0,
            "Product Name": 1,
            variant: "$variants",
            Price: "$Price",
            TotalValue: {
              $multiply: [
                { $add: ["$variants.priceModifier", "$Price"] },
                "$variants.stock",
              ],
            },
            TotalStock: {
              $add: ["$variants.stock"],
            },
            isOutOfStock: {
              $cond: {
                if: { $eq: ["$variants.stock", 0] },
                then: true,
                else: false,
              },
            },
          },
        },
        { $match: { isOutOfStock: false } },
        {
          $group: {
            _id: null,
            totalProductsValue: {
              $sum: "$TotalValue",
            },
            totalStock: {
              $sum: "$TotalStock",
            },
          },
        },
        {
          $project: {
            _id: 0,
            totalProductsValue: 1,
            totalStock: 1,
            avgProductValue: {
              $divide: ["$totalProductsValue", "$totalStock"],
            },
          },
        },
      ]);
      const fastMovingProduct = await OrderSchema.aggregate([
        { $unwind: "$cartItems" },
        {
          $group: {
            _id: "$cartItems.Product Name",
            totalQty: {
              $sum: "$cartItems.Qty",
            },
          },
        },
        { $sort: { totalQty: -1 } },
        { $limit: 1 },
      ]);

      const outOfStock = await ProductSchema.aggregate([
        { $unwind: "$variants" },
        {
          $project: {
            _id: 0,
            productName: "$Product Name",
            variantName: "$variants.name",
            outOfStock: {
              $cond: {
                if: { $eq: ["$variants.stock", 0] },
                then: true,
                else: false,
              },
            },
          },
        },
        {
          $match: { outOfStock: true }, 
        }
      ]);
      const fm = fastMovingProduct[0]._id;
      const  {totalProductsValue,avgProductValue} = totalProductsValuee[0];
      // const {productName,variantName} = outOfStock[0] ? outOfStock[0] : {productName:"No Out-of-Stock Products",variantName:"No Out-of-Stock Products"};

      res.status(200).json({ 'Total Inv. Value':`$${totalProductsValue}`,"Fast Moving":fm,"Avg Product Price":`$${parseInt(avgProductValue,10)}`,"Out-of-Stock":outOfStock[0] ? outOfStock[0].productName : "No Out Of Stock" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err.message });
    }
  }
);
export default analyticsRoute;
