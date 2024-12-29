import express from "express";
import { config as configDotenv } from "dotenv";
import userRouter from "./user/user.js";
import cors from "cors";

configDotenv();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(userRouter);

app.get("/", (request, response) => {
  response.json("Running");
});

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
