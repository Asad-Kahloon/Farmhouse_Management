import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <nav className="w-full h-16 flex justify-between items-center px-4 bg-gray-800 text-white">
      <div className="text-3xl font-extrabold">AK</div>

      {/* Menu Items */}
      <ul className="hidden gap-4x md:flex">
        <li className="px-4 text-2xl hover:font-bold border-b-transition">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 text-2xl hover:font-bold border-b-transition">
          <Link to="login">Login</Link>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-0 left-0 w-full h-screen bg-gray-800 flex flex-col justify-center items-center ${
          nav ? "block" : "hidden"
        }`}
      >
        <li className="py-6 text-2xl hover:font-bold border-b-transition ">
          <Link to="/">Home</Link>
        </li>
        <li className="py-6 text-2xl hover:font-bold border-b-transition ">
          <Link to="login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
