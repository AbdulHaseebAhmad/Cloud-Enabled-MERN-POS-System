import express from "express";
import { config as configDotenv } from "dotenv";
import authenticationRouter from "./Routes/Authentication/Authentication.js";
import cors from "cors";
import mongoose from "mongoose";
import supplierCrudRouter from "./Routes/Supplier/suppliercrud.js";
import productCrudRouter from "./Routes/Product/productcrud.js";

configDotenv();

const app = express();
const PORT = process.env.PORT || 5000;
const MongoDbUri = process.env.MONGODB_URI;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
mongoose
  .connect(MongoDbUri,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Database connection error:", err));

app.use(express.json());
app.use(authenticationRouter);
app.use(supplierCrudRouter);
app.use(productCrudRouter);

app.get("/", (request, response) => {
  response.json("Running");
});

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
