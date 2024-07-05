import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import "./db.js";

import { AuthRouter } from "./routes/auth.js";
import { AdminRouter } from "./routes/admin.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
// app.use(express.static("public"));
const publicPath = path.resolve(process.cwd(), "public");
app.use("/public", express.static(publicPath));
// app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/auth", AuthRouter);
app.use("/admin", AdminRouter);

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
