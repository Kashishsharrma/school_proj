import React from "react";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

const Display = () => {
  return (
    <div className="pt-[60px]">
      <div
        className="relative min-h-screen bg-cover bg-center flex items-end"
        style={{ backgroundImage: "url('/images/galaxy star wallpaper.jpg')" }}
      >
        {/* Brightened gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-white/10"></div>

        {/* Text Content on Bottom */}
        <div className="relative z-10 w-full text-center pb-24 px-4 text-white font-lato">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-[700] uppercase tracking-wide leading-tight text-white drop-shadow-[1px_1px_1px_black]">
            <span className="block sm:hidden">
              Galaxy Star<br />Public School
            </span>
            <span className="hidden sm:block whitespace-nowrap">
              Galaxy Star Public School
            </span>
          </h1>

          <p className="mt-2 text-xs font-[700] sm:text-sm md:text-base font-medium tracking-wider uppercase">
            Affiliated to I.C.S.E. PU-158
          </p>
        </div>

        {/* Social Icons - Top on small, Bottom on sm+ */}
        <div className="absolute z-10 text-white text-xl sm:text-2xl flex flex-col space-y-4
                        left-4 sm:left-6
                        top-4 sm:top-auto 
                        bottom-auto sm:bottom-24">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube className="hover:text-red-500 transition-colors duration-300" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF className="hover:text-blue-500 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Display;
