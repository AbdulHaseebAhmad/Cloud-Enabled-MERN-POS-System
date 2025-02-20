import { Router } from "express";
import OrderSchema from "../../Schemas/Orders/OrderSchema.js";
import ProductSchema from "../../Schemas/Product/ProductSchema.js";
import SupplierSchema from "../../Schemas/Supplier/SupplierSchema.js";
import timeStamp from "../../Middlewares/TimeStamp.js";
import ProductSnapshotSchema from "../../Schemas/Snapshot/ProductSnapshotSchema.js";

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
    const { startDate, endDate } = req;
    try{
      const totalProducts = await ProductSchema.countDocuments();
      let lowStock = await ProductSchema.aggregate([
        {
          $unwind: "$variants",
        },
        {
          $match: {
            "variants.stock": { $lt: 200 },
          },
        },
        {
          $project: {
            _id: 0,
            "Product Name": 1,
            Stock: "$variants.stock",
            "Variant Name": "$variants.name",
          },
        },
        {
          $sort: { Stock: 1 },
        },
        {
          $limit: 1,
        },
      ]);

      let fastMovingProduct = await OrderSchema.aggregate([
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
        { $sort: { totalQty: 1 } },
        { $limit: 1 },
      ]);

      let deadStock = await ProductSnapshotSchema.aggregate([
        {
          $match: {
            date: { $gte: startDate, $lte: endDate },
          },
        },
        {
          $sort: { date: 1, Stock:-1 },
        },
        {
          $group: {
            _id: "$Product",
            firstStock: { $first: "$Stock" },
            lastStock: { $last: "$Stock" },
            firstDate: { $first: "$date" },
            lastDate: { $last: "$date" },
          },
        },
        {
          $match: {
            $expr: { $eq: ["$firstStock", "$lastStock"] },
          },
        },
        {
          $project: {
            _id: 0,
            "Product Name": "$_id",
            Stock: "$firstStock",
            Date: "$firstDate",
          },
        },
        {
          $sort: { Date: 1 },
        },
        {
          $limit: 1,
        },
      ]);



      lowStock = `${lowStock[0]?.["Product Name"]} (${lowStock[0]?.["Variant Name"]})`  ?? "No Low Stock";
      fastMovingProduct = fastMovingProduct[0]?._id ?? "No Fast Moving Product";
      deadStock = deadStock[0]?.["Product Name"] ?? "No Dead Stock";
      res.status(200).json({
        "Total Stock":totalProducts, "Low Stock":lowStock,"Fast Moving Stock":fastMovingProduct,"Dead Stock":deadStock});
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
              $sum: ["$variants.stock"],
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
      })
        .sort({ createdDate: -1 })
        .limit(1);

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

      let deadStock = await ProductSnapshotSchema.aggregate([
        {
          $match: {
            date: { $gte: startDate, $lte: endDate },
          },
        },
        {
          $sort: { date: 1, Stock:-1 },
        },
        {
          $group: {
            _id: "$Product",
            firstStock: { $first: "$Stock" },
            lastStock: { $last: "$Stock" },
            firstDate: { $first: "$date" },
            lastDate: { $last: "$date" },
          },
        },
        {
          $match: {
            $expr: { $eq: ["$firstStock", "$lastStock"] },
          },
        },
        {
          $project: {
            _id: 0,
            "Product Name": "$_id",
            Stock: "$firstStock",
            Date: "$firstDate",
          },
        },
        {
          $sort: { Date: 1 },
        },
        {
          $limit: 1,
        },
      ]);

      const fm = fastMovingProduct?.[0]?._id ?? "No Data";
      const totalProductsValue = totalProductsValuee?.[0]?.totalProductsValue ?? 0;
      const avgProductValue = totalProductsValuee?.[0]?.avgProductValue ?? 0;
      const outOfStockProduct = outOfStock?.[0]?.productName ?? "No Out Of Stock";
      const totalProducts = totalProductsValuee[0]?.totalStock ?? 0;
      newProducts = newProducts[0]?.["Product Name"] ?? "No New Products";
      deadStock = deadStock[0]?.["Product Name"] ?? "No Dead Stock";

      res.status(200).json({
        "Total Products": totalProducts,
        "Total Inv. Value": `$${totalProductsValue}`,
        "Fast Moving": fm,
        "Avg Product Price": `$${parseInt(avgProductValue, 10)}`,
        "Out-of-Stock": outOfStockProduct,
        "New Products": newProducts,
        "Dead Products":deadStock,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err.message });
    }
  }
);

export default analyticsRoute;


