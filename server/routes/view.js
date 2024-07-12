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

router.get("/member/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const member = await Admin.findOne({ _id: id });

    if (!member) {
      return res.status(404).json({ error: "Member not found." });
    }

    const { name, email, cnic, gender, phone } = member;

    return res.json({ name, email, cnic, gender, phone });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching the member." });
  }
});

export { router as ViewRouter };
