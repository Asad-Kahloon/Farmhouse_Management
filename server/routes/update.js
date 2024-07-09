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

// staff member registration

router.put("/member:id", upload.single("photo"), async (req, res) => {
  try {
    const id = req.params.id;
    const { name, cnic, email, password, gender, phone } = req.body;
    const photo = req.file; // Uploaded image file
    const hashPassword = await bcrypt.hash(password, 10);
    const member = await Admin.findByIdAndUpdate(
      { _id: id },
      { name, gender, cnic, password: hashPassword, email, phone, photo }
    );
    return res.json({ updated: true });
  } catch (error) {
    return res.json(error);
  }
});

export { router as UpdateRouter };
