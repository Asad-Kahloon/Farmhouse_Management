import { useState } from "react";
import { FaUser, FaCog } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

import { fetchLoggedInUser } from "../Functions/DataFetching";

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // fetching data of logged in user
  const loggedinUser = fetchLoggedInUser();

  return (
    <nav className="bg-gray-800 shadow-md h-16 flex items-center justify-between px-4 md:px-8">
      {/* Logo or Brand Name (if applicable) */}
      <div className="text-xl font-semibold text-white"></div>

      <div className="flex items-center space-x-4">
        {/* Name and Role */}
        <div className="flex flex-col">
          <h5 className="text-white">{loggedinUser.name}</h5>
          <h6 className="text-xs text-gray-300">{loggedinUser.role}</h6>
          {/* Replace "Admin" with dynamically fetched role */}
        </div>

        {/* Profile */}
        <div className="relative">
          {/* Profile Image (replace with actual image) */}
          <img
            src={loggedinUser.photo}
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover cursor-pointer"
            onClick={toggleMenu}
          />

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-1">
              <Link
                to="profile"
                className="flex items-center gap-2 px-4 py-2 text-white hover:bg-gray-500 rounded-lg"
              >
                <FaUser />
                Profile
              </Link>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-white hover:bg-gray-500 rounded-lg"
              >
                <FaCog />
                Settings
              </a>
              <Link
                to="/logout"
                className="flex items-center gap-2 px-4 py-2 text-white hover:bg-gray-500 rounded-lg"
              >
                <FiLogOut />
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
