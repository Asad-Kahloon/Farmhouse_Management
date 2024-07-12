import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaIdCard,
  FaVenusMars,
  FaPhone,
} from "react-icons/fa";
import InputMask from "react-input-mask";

const UpdateMember = () => {
  const { id } = useParams(); // Get the id parameter from URL
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const getMemberDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/view/member/${id}`);
        setName(res.data.name);
        setEmail(res.data.email);
        setGender(res.data.gender);
        setCnic(res.data.cnic);
        setPhone(res.data.phone);
      } catch (error) {
        console.error("Error fetching member details:", error);
      }
    };

    getMemberDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "cnic":
        setCnic(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(`http://localhost:5000/update/member/${id}`, {
          name,
          email,
          cnic,
          gender,
          phone,
        })
        .then((res) => {
          if (res.data.updated) {
            alert("Member details updated successfully");
            navigate("/admin/staff");
          }
        });
    } catch (error) {
      console.error("Error updating member details:", error);
      alert("Failed to update member details");
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
                value={name}
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
                value={email}
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
                value={phone}
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
                value={cnic}
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
            <label htmlFor="gender" className="block text-gray-700 w-1/4">
              Gender
            </label>
            <div className="flex items-center border-b-2 border-gray-300 py-2 w-3/4">
              <FaVenusMars className="text-gray-500 mr-3" />
              <select
                id="gender"
                name="gender"
                value={gender}
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
