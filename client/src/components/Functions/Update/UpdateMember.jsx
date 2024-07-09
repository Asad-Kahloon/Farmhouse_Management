import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMemberDetails } from "../../Functions/DataFetching";
import { MemberUpdate } from "./Update";
import {
  FaUser,
  FaEnvelope,
  FaIdCard,
  FaLock,
  FaVenusMars,
  FaCamera,
  FaPhone,
} from "react-icons/fa";
import InputMask from "react-input-mask";

const UpdateMember = () => {
  const { id } = useParams(); // Get the id parameter from URL
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cnic: "",
    password: "",
    confirmPassword: "",
    gender: "",
    photo: null,
  });

  useEffect(() => {
    const getMemberDetails = async () => {
      try {
        const member = await fetchMemberDetails(id); // Pass the id to fetch details
        setFormData({
          name: member.name,
          phone: member.phone,
          email: member.email,
          cnic: member.cnic,
          gender: member.gender,
          // Assuming other fields like password and photo are fetched or can be updated separately
        });
      } catch (error) {
        console.error("Error fetching member details:", error);
        // Handle error (e.g., show error message)
      }
    };

    getMemberDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await MemberUpdate(id, formData); // Pass id and formData to update details
      // Handle successful update (e.g., show success message)
    } catch (error) {
      console.error("Error updating member details:", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="max-w-lg w-full md:max-w-3xl md:w-3/5 mx-auto md:mt-20 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Details</h2>
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
            <label htmlFor="phone" className="block text-gray-700 w-1/4">
              Phone
            </label>
            <div className="flex items-center border-b-2 border-gray-300 py-2 w-3/4">
              <FaPhone className="text-gray-500 mr-3" />
              <input
                type="phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                placeholder="Enter your phone"
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMember;
