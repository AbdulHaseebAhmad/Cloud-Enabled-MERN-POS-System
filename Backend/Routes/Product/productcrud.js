import { Router } from "express";
import verifyJWT from "../../Middlewares/TokenSigningMiddleWare.js";
import ProductSchema from "../../Schemas/Product/ProductSchema.js";
import SupplierSchema from "../../Schemas/Supplier/SupplierSchema.js";
import CategoriesSchema from "../../Schemas/Categories/CategoriesSchema.js";
import CategorySnapshotSchema from "../../Schemas/Snapshot/CategorySnapshotSchema.js";
import ProductSnapshotSchema from "../../Schemas/Snapshot/ProductSnapshotSchema.js";
const productCrudRouter = Router();

productCrudRouter.post(
  "/api/product/addproduct",
  verifyJWT,
  async (req, res) => {
    const product = req.body;
    const { variants, Supplier } = product;
    const Stock = variants.reduce((acc, curr) => acc + parseInt(curr.stock), 0);
    let currentCategoryStock = 0;
    try {
      await ProductSchema.create({ ...product, Stock });
      await SupplierSchema.findOneAndUpdate(
        { "Supplier Name": Supplier },
        { $inc: { "Total Stock": Stock } }
      );
      currentCategoryStock = await CategoriesSchema.findOneAndUpdate(
        { name: product.Category },
        {
          $push: { products: product["Product Name"], suppliers: Supplier },
          $inc: { stock: Stock },
        },
        {
          projection: { stock: 1 }, // Correct way to return only the stock field
        }
      );
      // await CategorySnapshotSchema.create({
      //   Category: product.Category,
      //   Stock: currentCategoryStock.stock,
      //   date: new Date(),
      //   status: "Re-Stock",
      //   newProduct: true,
      // });

      // await ProductSnapshotSchema.create({
      //   Product: product["Product Name"],
      //   Stock: Stock,
      //   date: new Date(),
      //   status: "Initial Stock",
      // });

      res.status(200).json({ message: "Product Added Successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

productCrudRouter.get(
  "/api/products/getproducts",
  verifyJWT,
  async (req, res) => {
    try {
      const products = await ProductSchema.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

productCrudRouter.delete(
  "/api/products/deleteproduct/:id",
  verifyJWT,
  async (req, res) => {
    const id = req.params.id;
    try {
      const findProduct = await ProductSchema.findById(id);
      const { Supplier, Stock, Category } = findProduct;
      console.log(Supplier, Stock, Category);
      await SupplierSchema.findOneAndUpdate(
        { "Supplier Name": Supplier },
        { $inc: { "Total Stock": -Stock } }
      );
      await CategoriesSchema.findOneAndUpdate(
        { name: Category },
        { $inc: { stock: -Stock } }
      );
      await ProductSchema.findByIdAndDelete(id);
      res.status(200).json({ message: "Product Deleted Successfully", id });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

export default productCrudRouter;
