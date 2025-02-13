import CategoriesSchema from "../Schemas/Categories/CategoriesSchema.js";
import CategorySnapshotSchema from "../Schemas/Snapshot/CategorySnapshotSchema.js";
import ProductSnapshotSchema from "../Schemas/Snapshot/ProductSnapshotSchema.js";
import ProductSchema from "../Schemas/Product/ProductSchema.js";
const takeDailySnapshot = async () => {
    try {
        console.log("Running daily snapshot job...");

        const categories = await CategoriesSchema.find({});
        const products = await ProductSchema.find({});

        products.map(async (product) => {
            await ProductSnapshotSchema.create({
                date: new Date(),
                Product: product['Product Name'],
                Stock: product.Stock,
                status:product.Stock > 0 ? "In Stock" : "Out of Stock",
            });
        });
        categories.map(async (category) => {
            await CategorySnapshotSchema.create({
                date: new Date(),
                Category: category.name,
                Stock: category.stock,
                status:category.status,
                newProduct: false
            
        });
        });


        console.log("Daily snapshot saved.");
    } catch (error) {
        console.error("Error taking snapshot:", error);
    }
};



export default takeDailySnapshot;