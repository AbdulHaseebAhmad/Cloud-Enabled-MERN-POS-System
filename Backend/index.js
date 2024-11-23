import express from "express";
import { config as configDotenv } from "dotenv";



configDotenv();

const app = express();
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
})
