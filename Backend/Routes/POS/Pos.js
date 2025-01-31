import { Router } from "express";
import ProductSchema from "../../Schemas/Product/ProductSchema.js";
const posRouter = Router();

posRouter.post("/api/pos/get-product", async (req, res) => {
  const { SKU } = req.body;
  console.log(SKU)
  try{
    let product = await ProductSchema.findOne(
      { "variants.sku": SKU },
      {
        _id: 1,
        SKU: 1,
        Price: 1,
        "Product Name": 1,
        Supplier: 1,
        Category: 1,
        "variants.$": 1,
      }
    );
    product = {...product._doc, ...product._doc.variants[0],Qty:1,id:product._id};
    res.status(200).send(product);
  }
  catch (err){
    res.status(500).send("Product not found");
  }
});

export default posRouter;
