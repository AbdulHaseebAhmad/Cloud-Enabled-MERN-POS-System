import { Router } from "express";
import verifyJWT from "../../Middlewares/TokenSigningMiddleWare.js";
import ProductSchema from "../../Schemas/Product/ProductSchema.js";

const productCrudRouter = Router();

productCrudRouter.post(
  "/api/product/addproduct",
  verifyJWT,
  async (req, res) => {
    const product = req.body;
    try {
      await ProductSchema.create(product);
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
      await ProductSchema.findByIdAndDelete(id);
      res.status(200).json({ message: "Product Deleted Successfully", id });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

export default productCrudRouter;
