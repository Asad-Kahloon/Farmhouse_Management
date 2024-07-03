import { useState } from "react";
import { FaHome, FaUser, FaCog, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 shadow-md">
          <span className="text-xl items-center font-semibold z-20">AK</span>
          <button onClick={toggleSidebar} className="text-white z-10 md:hidden">
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <a
            href="/"
            className="flex items-center p-2 text-white hover:bg-gray-500 rounded-md"
          >
            <FaHome className="mr-2" /> Home
          </a>
          <a
            href="/profile"
            className="flex items-center p-2 text-white  hover:bg-gray-500 rounded-md"
          >
            <FaUser className="mr-2" /> Profile
          </a>
          <a
            href="/settings"
            className="flex items-center p-2 text-white  hover:bg-gray-500 rounded-md"
          >
            <FaCog className="mr-2" /> Settings
          </a>
        </nav>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`md:hidden fixed text-white top-4 left-4 ${
          sidebarOpen ? "hidden" : "md:hidden"
        }`}
      >
        <FaBars size={24} />
      </button>
    </div>
  );
};

export default Sidebar;
