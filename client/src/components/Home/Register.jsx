// src/RegistrationForm.js
import { useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaIdCard,
  FaLock,
  FaVenusMars,
  FaCamera,
} from "react-icons/fa";
import InputMask from "react-input-mask";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cnic: "",
    password: "",
    confirmPassword: "",
    gender: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cnicPattern = /^\d{5}-\d{7}-\d{1}$/;
    if (!cnicPattern.test(formData.cnic)) {
      alert("Please enter a valid CNIC in the format 12345-1234567-1");
      return;
    } else if (formData.password === formData.confirmPassword) {
      // Create form data object to append fields and file
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      axios
        .post("http://localhost:5000/admin/register", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.admin_registered) {
            alert("Staff Member registered successfully");
          } else if (res.data.cnic || res.data.email) {
            alert(res.data.message);
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Passwords do not match...");
    }
  };

  return (
    <div className="max-w-lg w-full md:max-w-3xl md:w-3/5 mx-auto md:mt-20 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Register Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4 flex items-center">
            <label htmlFor="name" className="block text-gray-700 w-1/4">
              Name
            </label>
            <div className="flex items-center border-b-2 border-gray-300 py-2 w-3/4">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="email" className="block text-gray-700 w-1/4">
              Email
            </label>
            <div className="flex items-center border-b-2 border-gray-300 py-2 w-3/4">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="cnic" className="block text-gray-700 w-1/4">
              CNIC
            </label>
            <div className="flex items-center border-b-2 border-gray-300 py-2 w-3/4">
              <FaIdCard className="text-gray-500 mr-3" />
              <InputMask
                mask="99999-9999999-9"
                value={formData.cnic}
                onChange={handleChange}
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="text"
                    id="cnic"
                    name="cnic"
                    placeholder="Enter your CNIC"
                    required
                  />
                )}
              </InputMask>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="password" className="block text-gray-700 w-1/4">
              Password
            </label>
            <div className="flex items-center border-b-2 border-gray-300 py-2 w-3/4">
              <FaLock className="text-gray-500 mr-3" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 w-1/4"
            >
              Confirm Password
            </label>
            <div className="flex items-center border-b-2 border-gray-300 py-2 w-3/4">
              <FaLock className="text-gray-500 mr-3" />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                placeholder="Confirm your password"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="gender" className="block text-gray-700 w-1/4">
              Gender
            </label>
            <div className="flex items-center border-b-2 border-gray-300 py-2 w-3/4">
              <FaVenusMars className="text-gray-500 mr-3" />
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                required
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="mb-6 flex items-center">
            <label htmlFor="photo" className="block text-gray-700 w-1/4">
              Photo
            </label>
            <div className="flex items-center border-b-2 border-gray-300 py-2 w-3/4">
              <FaCamera className="text-gray-500 mr-3" />
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
