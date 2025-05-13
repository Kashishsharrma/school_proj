import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation(); // Get the current route
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-4/5 max-w-screen-xl h-14 flex justify-between items-center px-8 bg-white rounded-full z-50 shadow-lg">
      {/* Logo */}
      <img src="/images/logo.jpg" alt="School Logo" className="h-12 w-auto ml-4" />
      
      {/* Hamburger Button */}
      <button 
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-lg font-medium">
        {[{ name: "Home", path: "/" },
          { name: "Academics", path: "/academics" },
          { name: "Gallery", path: "/gallery" }, 
          { name: "Information", path: "/information" }, 
          { name: "Apply & Enroll", path: "/enroll" },
        ].map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`transition-all duration-300 ${
                (item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path))
                ? "text-[#B22234]"
                : "text-black"
            } hover:text-[#B22234] `}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {[{ name: "Home", path: "/" },
              { name: "Academics", path: "/academics" },
              { name: "Gallery", path: "/gallery" }, 
              { name: "Information", path: "/information" }, 
              { name: "Apply & Enroll", path: "/enroll" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block text-lg font-medium ${
                    location.pathname === item.path ? "text-[#B22234]" : "text-black"
                  } hover:text-[#B22234] `}
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
