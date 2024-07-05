import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    axios
      .post("http://localhost:5000/auth/login", { email, password })
      .then((res) => {
        if (res.data.login) {
          localStorage.setItem("email", `${email}`);
          localStorage.setItem("login", true);
          localStorage.setItem("role", `${res.data.role}`);
          localStorage.setItem("cnic", `${res.data.cnic}`);
          localStorage.setItem("photo", `${res.data.photo}`);
          localStorage.setItem("name", `${res.data.name}`);
          localStorage.setItem("phone", `${res.data.phone}`);

          alert(res.data.message);
          navigate("/authentication");
        } else if (!res.data.login) {
          alert(res.data.message);
        }
      });
  };

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <FaLock className="text-gray-500 mr-3" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
