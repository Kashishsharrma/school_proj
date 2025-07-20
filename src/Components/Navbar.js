import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Academics", path: "/academics" },
    { name: "Gallery", path: "/gallery" },
    { name: "Information", path: "/information" },
    { name: "Apply & Enroll", path: "/enroll" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[60px] bg-[#1e2a50] flex items-center justify-between px-6 z-50 shadow-md">
        {/* Logo and Name */}
        <div className="flex items-center space-x-2">
          <div className="bg-white rounded-full p-1">
            <img src="/images/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
          </div>
          <h1 className="text-white text-sm md:text-xl font-[700] font-[Lato]">
            Galaxy Star Public School
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center font-[Lato]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`text-white text-lg transition-all duration-[10ms] hover:text-blue-200 ${
                    isActive ? "font-[700]" : "font-normal"
                  } `}
                >
                  {item.name}
                </Link>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white rounded-full"></span>
                )}
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-3xl z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1e2a50] z-40 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg pt-20 px-6 font-[Lato]`}
      >
        <ul className="flex flex-col space-y-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center justify-between w-full text-white text-lg transition-all duration-300 hover:scale-105 ${
                    isActive ? "font-[700]" : "font-normal"
                  } hover:font-[700]`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  <HiOutlineArrowNarrowRight className="text-xl" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
