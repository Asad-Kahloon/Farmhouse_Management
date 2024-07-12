import bcrypt from "bcrypt";
import express from "express";
import dotenv from "dotenv";
import multer from "multer";

import { Admin } from "../models/Admin.js";

dotenv.config();

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/admins"); // Set your upload destination
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Set file name
  },
});
const upload = multer({ storage });

const router = express.Router();

//  member details update

router.put("/member/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, cnic, email, gender, phone } = req.body;

    const member = await Admin.findByIdAndUpdate(
      id,
      { name, gender, cnic, email, phone },
      { new: true }
    );

    if (!member) {
      return res.status(404).json({ error: "Member not found." });
    }

    return res.json({ updated: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while updating the member." });
  }
});

export { router as UpdateRouter };
