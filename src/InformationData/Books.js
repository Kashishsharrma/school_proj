import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import {
  FaSchool,
  FaAppleAlt,
  FaBook,
  FaPalette,
  FaShapes,
  FaFeatherAlt,
  FaCalculator,
  FaGlobe,
  FaAtom,
  FaLaptopCode,
  FaLanguage,
  FaUserGraduate,
  FaBrain,
  FaArrowRight,
} from "react-icons/fa";
import { GiNotebook, GiArchiveResearch } from "react-icons/gi";

const booksData = {
  "Pre-Nursery": ["Rhymes", "Picture Book", "Fun with Colors"],
  Nursery: ["English Primer", "Number Book", "Art & Craft", "Rhymes"],
  LKG: ["English", "Math", "EVS", "Drawing"],
  UKG: ["English", "Hindi", "Math", "EVS"],
  "Class 1": ["English Primer", "Mathematics", "EVS", "Drawing"],
  "Class 2": ["English", "Mathematics", "Hindi", "Science"],
  "Class 3": ["English Literature", "Mathematics", "Hindi Grammar", "Science"],
  "Class 4": ["English", "Math", "EVS", "Computer Science"],
  "Class 5": ["English", "Hindi", "Science", "SST", "Computer"],
  "Class 6": [
    "Math",
    "Science",
    "English Lit.",
    "English Lang.",
    "SST",
    "Computer",
  ],
  "Class 7": ["Math", "Science", "SST", "English", "Hindi", "G.K."],
  "Class 8": ["Math", "Science", "SST", "English", "Hindi", "Sanskrit"],
  "Class 9": [
    "English",
    "Hindi",
    "Math",
    "Science (Phy/Chem/Bio)",
    "SST",
    "IT",
  ],
  "Class 10": ["Math", "Science", "SST", "English", "Hindi", "Computer"],
};

const iconMap = {
  "Pre-Nursery": { icon: <FaAppleAlt />, color: "#e53e3e", bg: "#fed7d7" },
  Nursery: { icon: <FaBook />, color: "#805ad5", bg: "#e9d8fd" },
  LKG: { icon: <FaPalette />, color: "#d69e2e", bg: "#fefcbf" },
  UKG: { icon: <FaShapes />, color: "#319795", bg: "#b2f5ea" },
  "Class 1": { icon: <GiNotebook />, color: "#38a169", bg: "#c6f6d5" },
  "Class 2": { icon: <FaFeatherAlt />, color: "#dd6b20", bg: "#fbd38d" },
  "Class 3": { icon: <FaCalculator />, color: "#2b6cb0", bg: "#bee3f8" },
  "Class 4": { icon: <FaLaptopCode />, color: "#4a5568", bg: "#e2e8f0" },
  "Class 5": { icon: <FaGlobe />, color: "#6b46c1", bg: "#e9d8fd" },
  "Class 6": { icon: <FaAtom />, color: "#c53030", bg: "#feb2b2" },
  "Class 7": { icon: <FaLanguage />, color: "#2f855a", bg: "#c6f6d5" },
  "Class 8": { icon: <FaUserGraduate />, color: "#1a202c", bg: "#e2e8f0" },
  "Class 9": { icon: <FaBrain />, color: "#b83280", bg: "#fbb6ce" },
  "Class 10": { icon: <GiArchiveResearch />, color: "#1c4532", bg: "#9ae6b4" },
};

const Books = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (className) => {
    setOpenDropdown((prev) => (prev === className ? null : className));
  };

  return (
    <section className="relative py-16 px-6 md:px-20 font-[Lato] bg-white min-h-screen">
      {/* Back Link */}
      <Link
        to="/information"
        className="text-lg text-black font-[700] inline-block mb-8"
      >
        &lt; Back
      </Link>

      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-gray-800 mb-10">School Books</h2>

      {/* Book Dropdowns */}
      <div className="space-y-4">
        {Object.entries(booksData).map(([className, books], idx) => {
          const iconDetails = iconMap[className] || {
            icon: <FaSchool />,
            color: "#4a5568",
            bg: "#e2e8f0",
          };

          const isOpen = openDropdown === className;

          return (
            <div
              key={idx}
              className="border-b border-gray-300 pb-2 transition-all duration-300"
            >
              {/* Toggle Line */}
              <div
                className="flex items-center justify-between cursor-pointer hover:text-[#1e2a50] hover:scale-[1.01] transition-transform duration-200"
                onClick={() => toggleDropdown(className)}
              >
                <div className="flex items-center gap-3 text-xl font-semibold text-gray-800">
                  <span
                    className="rounded-full p-2 text-white"
                    style={{
                      backgroundColor: iconDetails.bg,
                      color: iconDetails.color,
                    }}
                  >
                    {iconDetails.icon}
                  </span>
                  {className}
                </div>
                {isOpen ? (
                  <IoIosArrowUp className="text-2xl text-[#1e2a50] transition-transform duration-300" />
                ) : (
                  <IoIosArrowDown className="text-2xl text-[#1e2a50] transition-transform duration-300" />
                )}
              </div>

              {/* Animated Dropdown List */}
              <div
                className={`ml-14 overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="list-disc text-gray-700 text-base space-y-1 pl-4">
                  {books.map((book, bookIdx) => (
                    <li key={bookIdx}>{book}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Side Floating Link */}
      <Link
        to="/information/uniform"
        className="flex items-center justify-center fixed right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-2 sm:p-3 rounded-full shadow-lg transition z-50 text-sm sm:text-base"
      >
        <FaArrowRight className="text-lg sm:text-xl" />
      </Link>
    </section>
  );
};

export default Books;
