import React from "react";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#8D3C44] text-white py-16 px-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Email Subscription Section */}
        <div>
          <label className="block text-lg mb-2">Email *</label>
          <input
            type="email"
            className="w-full bg-transparent border-b border-white outline-none text-white p-2"
            placeholder="Enter your email"
          />
          <button className="mt-4 bg-black text-white py-2 px-6 rounded-full">
            Submit
          </button>
        </div>

        {/* Menu Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">MENU</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Academics</li>
            <li>Gallery</li>
            <li>Apply & Enroll</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT</h3>
          <p>Opening Hours: 8 A.M. to 3 P.M.</p>
          <p>Monday to Saturday</p>
          <p>8:00am - 02:00pm</p>
          <p className="mt-2">+91 9041321493</p>
          <p>galaxystar.sekhwan@gmail.com</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-end space-x-4 mt-10 pr-10">
        <FaYoutube className="text-2xl cursor-pointer" />
        <FaInstagram className="text-2xl cursor-pointer" />
        <FaFacebook className="text-2xl cursor-pointer" />
      </div>

      {/* Copyright */}
      <p className="text-center text-sm mt-8">
        © by Galaxy Star Public School
      </p>
    </footer>
  );
};

export default Footer;
