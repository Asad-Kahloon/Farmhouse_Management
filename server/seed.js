import bcrypt from "bcrypt";
import { Admin } from "./models/Admin.js";

import "./db.js";

async function AdminAccount() {
  try {
    const adminCount = await Admin.countDocuments({ role: "admin" });
    if (adminCount === 0) {
      const hashPassword = await bcrypt.hash("admin", 10);
      const newAdmin = new Admin({
        cnic: "34602-4242018-9",
        password: hashPassword,
        name: "Asad Javed",
        gender: "male",
        role: "admin",
        photo: "asad.jpeg",
        email: "asadkahloon77@gmail.com",
        phone: "+923314163905",
      });
      await newAdmin.save();
      console.log("Admin Created");
    } else {
      console.log("There is already Admin Account");
    }
  } catch (error) {
    console.log(error);
  }
}

AdminAccount();
