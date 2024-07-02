import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import "./db.js";

import { AdminRouter } from "./routes/auth.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.static("public"));

app.use("/auth", AdminRouter);

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
