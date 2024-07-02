import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { Admin } from "../models/Admin.js";

dotenv.config();

const router = express.Router();

// For Login Authentication
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.json({ login: false, message: "User not found" });
    }
    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return res.json({ login: false, message: "Incorrect Password" });
    } else {
      const token = jwt.sign(
        { email: admin.email, role: admin.role },
        process.env.Admin_Key
      );
      res.cookie("token", token, { httpOnly: true, secure: true });
      return res.json({
        login: true,
        role: admin.role,
        token,
        message: "Login Successful",
      });
    }
  } catch (error) {
    return res.json(error);
  }
});

export { router as AdminRouter };
