import { Router } from "express";
import verifyJWT from "../../Middlewares/TokenSigningMiddleWare.js";
import ProductSchema from "../../Schemas/Product/ProductSchema.js";
import SupplierSchema from "../../Schemas/Supplier/SupplierSchema.js"
const productCrudRouter = Router();

productCrudRouter.post(
  "/api/product/addproduct",
  verifyJWT,
  async (req, res) => {
    const product = req.body;
    const {variants,Supplier} = product;
    const Stock = variants.reduce((acc, curr) => acc + curr.stock, 0);
    try {
      await ProductSchema.create({...product, Stock});
      await SupplierSchema.findOneAndUpdate({'Supplier Name': Supplier}, {$inc: {'Total Stock':Stock}});
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
      const {Supplier, Stock} = findProduct;
      await SupplierSchema.findOneAndUpdate({'Supplier Name': Supplier}, {$inc: {'Total Stock':-Stock}});
      await ProductSchema.findByIdAndDelete(id);
      res.status(200).json({ message: "Product Deleted Successfully", id });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

export default productCrudRouter;
