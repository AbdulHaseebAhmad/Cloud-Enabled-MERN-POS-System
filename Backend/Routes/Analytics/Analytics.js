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
    const { startDate, endDate } = req;
    const dateAggregatedOrders = await OrderSchema.aggregate([
      {
        $match: {
          createdDate: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: null,
          totalSales: {
            $sum: "$totalPrice",
          },
          totalOrders: {
            $sum: 1,
          },
          avergeOrderValue: {
            $avg: "$totalPrice",
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalSales: 1,
          totalOrders: 1,
          avergeOrderValue: 1,
        },
      },
    ]);

    const bestSellingProduct = await OrderSchema.aggregate([
      {
        $match: {
          createdDate: { $gte: startDate, $lte: endDate },
        },
      },
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

    const salesPerCustomer = "No Data";
    const RreturnedSales = "No Data";

    return res.status(200).json({
      "Total Sales": `$ ${dateAggregatedOrders[0]?.totalSales?.toFixed(2)}`,
      "Avg Order Value": `$ ${dateAggregatedOrders[0]?.avergeOrderValue?.toFixed(
        2
      )}`,
      "Best Product": bestSellingProduct[0]?._id,
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
        dateAggregatedOrders
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
    const { startDate, endDate } = req;
    try {

      //totalProductsValue totalStock avgProductValue not time bound
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

      let newProducts = await ProductSchema.find({
        createdDate: { $gte: startDate, $lte: endDate },
      }).sort({ createdDate: -1 }).limit(1);

      
      
      //fm not time bound
      const fastMovingProduct = await OrderSchema.aggregate([
        { $match: { createdDate: { $gte: startDate, $lte: endDate } } },
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
        },
      ]);

      const fm = fastMovingProduct?.[0]?._id ?? "No Data";
      const totalProductsValue =
        totalProductsValuee?.[0]?.totalProductsValue ?? 0;
      const avgProductValue = totalProductsValuee?.[0]?.avgProductValue ?? 0;
      const outOfStockProduct =
        outOfStock?.[0]?.productName ?? "No Out Of Stock";
      const totalProducts = totalProductsValuee[0].totalStock ?? 0;
      newProducts = newProducts[0]?.["Product Name"] ?? "No New Products";
      res.status(200).json({
        "Total Products": totalProducts,
        "Total Inv. Value": `$${totalProductsValue}`,
        "Fast Moving": fm,
        "Avg Product Price": `$${parseInt(avgProductValue, 10)}`,
        "Out-of-Stock": outOfStockProduct,
        "New Products":newProducts
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err.message });
    }
  }
);

export default analyticsRoute;
