import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between p-5 bg-gray-800 text-white">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/" className="text-2xl font-medium">
          Logo
        </Link>
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      <div
        className={`flex flex-col md:flex-row md:flex items-center w-full md:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          className="block text-2xl font-medium py-2  px-4 hover:text-gray-300"
        >
          Home
        </Link>
        <Link
          to="login"
          className="block text-2xl font-medium py-2 px-4 hover:text-gray-400"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
