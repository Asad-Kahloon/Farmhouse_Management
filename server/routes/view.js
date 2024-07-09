import bcrypt from "bcrypt";
import express from "express";
import dotenv from "dotenv";

import { Admin } from "../models/Admin.js";

dotenv.config();

const router = express.Router();

// view staff member from admin collection

router.get("/viewStaff", async (req, res) => {
  try {
    const members = await Admin.find({ role: "staff member" });
    return res.json({ members });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching staff members." });
  }
});

router.get("/viewMember:id", async (req, res) => {
  try {
    const id = req.params.id;
    const member = await Admin.findOne(id);
    return res.json({ member });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching staff members." });
  }
});

export { router as ViewRouter };
