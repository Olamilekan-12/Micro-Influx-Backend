import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import campaignRoutes from "./routes/campaignRoutes";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"));

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", campaignRoutes);

app.listen(7000, () => {
  console.log("server started on localhost:7000");
});
