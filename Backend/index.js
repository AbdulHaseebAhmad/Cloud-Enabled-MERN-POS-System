import express from "express";
import { config as configDotenv } from "dotenv";
import authenticationRouter from "./Routes/Authentication/Authentication.js";
import cors from "cors";
import mongoose from "mongoose";
import supplierCrudRouter from "./Routes/Supplier/suppliercrud.js";
import productCrudRouter from "./Routes/Product/productcrud.js";
import posRouter from "./Routes/POS/Pos.js";
import ordersRoute from "./Routes/Orders/Orders.js"
import http from "http"; 
import { Server } from "socket.io"
import analyticsRoute from "./Routes/Analytics/analytics.js";
import categoryRoute from "./Routes/Category/Category.js";
import snapshotRoute from "./Routes/Snapshots/snapshots.js";
import cron from "node-cron";
import takeDailySnapshot from "./utilities/dailySnapshotFunction.js";

configDotenv();

const app = express();
const PORT = process.env.PORT || 5000;
const MongoDbUri = process.env.MONGODB_URI;


const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
  },
});

app.use((req, res, next) => {
  req.io = io; 
  next();
});


app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
mongoose
  .connect(MongoDbUri)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Database connection error:", err));



  
app.use(express.json());
app.use(authenticationRouter);
app.use(supplierCrudRouter);
app.use(productCrudRouter);
app.use(posRouter);
app.use(ordersRoute);
app.use(analyticsRoute);
app.use(categoryRoute);
app.use(snapshotRoute)
app.get("/", (request, response) => {
  response.send("Running");
});

cron.schedule("0 23 * * *", () => {
  takeDailySnapshot();
}, {
  timezone: "UTC" // Adjust as per your timezone
});


io.on("connection", (socket) => {
  io.emit("connection", "A user connected");
  console.log("A user connected:", socket.id); 
  
  socket.on("changesMadeToProducts", (message) => {
    io.emit("changesMadeToProducts", message);
    console.log("changesMadeToProducts", message);
  });

  socket.on("changesMadeToSuppliers", (message) => {
    io.emit("changesMadeToSuppliers", message);
    console.log("changesMadeToSuppliers", message);
  });

  
  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
