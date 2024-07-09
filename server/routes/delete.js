import express from "express";
import dotenv from "dotenv";

import { Admin } from "../models/Admin.js";

dotenv.config();

const router = express.Router();

// delete staff member from admin collection

router.delete("/member/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const member = await Admin.findByIdAndDelete({ _id: id });
    return res.json({ deleted: true, member });
  } catch (error) {
    return res.json(error);
  }
});

export { router as DeleteRouter };
