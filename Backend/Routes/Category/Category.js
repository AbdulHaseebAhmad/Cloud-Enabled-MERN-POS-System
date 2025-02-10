import { Router } from "express";
import CategoriesSchema from "../../Schemas/Categories/CategoriesSchema.js";

const categoryRoute = Router();

categoryRoute.post("/api/category/addcategory", async (req, res) => {
  const { categoryName } = req.body;
  try {
    await CategoriesSchema.create({ name: categoryName });
    res.status(200).json({ message: "Category Added Successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

categoryRoute.get("/api/category/getcategories", async (req, res) => {
  try {
    const categories = await CategoriesSchema.find();
    console.log(categories)
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
);
export default categoryRoute;
