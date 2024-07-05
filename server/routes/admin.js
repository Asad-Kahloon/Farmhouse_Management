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

router.post("/register", upload.single("photo"), async (req, res) => {
  try {
    const { name, cnic, email, password, gender, phone } = req.body;
    const photo = req.file; // Uploaded image file
    const aname = await Admin.findOne({ $or: [{ cnic }, { email }] });
    if (aname) {
      if (aname.cnic === cnic) {
        return res.json({
          cnic: true,
          message: "Account Already Registered On This CNIC",
        });
      }
      if (aname.email === email) {
        return res.json({
          email: true,
          message: "Account Already Registered On This Email",
        });
      }
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const newAdmin = new Admin({
        name,
        gender,
        cnic,
        email,
        phone,
        password: hashPassword,
        role: "staff member",
        photo: photo.filename,
      });
      await newAdmin.save();
      return res.json({ admin_registered: true });
    }
  } catch (error) {
    console.error(error);
    return res.json({ message: "Error Creating Admin" });
  }
});

export { router as AdminRouter };
