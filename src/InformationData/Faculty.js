import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
} from "react-icons/fa";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowBack,
} from "react-icons/io";
import {
  MdOutlineChair,
  MdOutlineSupervisorAccount,
  MdOutlineSchool,
  MdOutlineBusinessCenter,
  MdOutlineVolunteerActivism,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    title: "Chairman",
    icon: <MdOutlineChair className="text-red-800" />,
    bg: "bg-red-200",
    description:
      "Our Chairman leads the institution with a visionary mindset, ensuring strategic growth and maintaining academic excellence.",
    image: "https://via.placeholder.com/400x200?text=Chairman",
  },
  {
    title: "Vice Principal",
    icon: <MdOutlineSupervisorAccount className="text-yellow-800" />,
    bg: "bg-yellow-200",
    description:
      "The Vice Principal manages academic schedules, supports students, and maintains discipline across all departments.",
    image: "https://via.placeholder.com/400x200?text=Vice+Principal",
  },
  {
    title: "Faculty",
    icon: <MdOutlineSchool className="text-pink-800" />,
    bg: "bg-pink-200",
    description:
      "Our faculty comprises experienced educators who specialize in various subjects, nurturing students with dedication.",
    image: "https://via.placeholder.com/400x200?text=Faculty",
  },
  {
    title: "Management",
    icon: <MdOutlineBusinessCenter className="text-purple-800" />,
    bg: "bg-purple-200",
    description:
      "Efficient management staff handle day-to-day operations, admissions, finance, and infrastructure needs.",
    image: "https://via.placeholder.com/400x200?text=Management",
  },
  {
    title: "Helpers & Staff",
    icon: <MdOutlineVolunteerActivism className="text-teal-800" />,
    bg: "bg-teal-200",
    description:
      "Our support staff keeps the school functioning smoothly—from cleaning, maintenance to student assistance.",
    image: "https://via.placeholder.com/400x200?text=Helpers+%26+Staff",
  },
];

const FacultyPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <section className="relative bg-white py-16 px-6 md:px-20 font-[Lato]">
      <Link
        to="/information"
        className="text-lg text-black font-[700] inline-block mb-10"
      >
        &lt; Back
      </Link>

      <Link
        to="/information/calendar"
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-3 rounded-full shadow-lg transition"
      >
        <FaArrowLeft className="text-xl" />
      </Link>

      

      <h1 className="text-3xl font-bold text-left mb-8">Our School Faculty</h1>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="w-full">
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex items-center justify-between p-4 rounded-lg shadow-md border hover:bg-gray-50 transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className={`rounded-full ${section.color} shadow-inner`}>
                  <div className={` rounded-full p-2 ${section.bg}`}>
                    {section.icon}
                  </div>
                </div>
                <span className="text-xl font-semibold">{section.title}</span>
              </div>
              {openSection === index ? (
                <IoIosArrowUp className="text-2xl" />
              ) : (
                <IoIosArrowDown className="text-2xl" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {openSection === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="bg-gray-50 mt-3 px-6 py-4 rounded-lg shadow-inner">
                    <p className="text-gray-700 mb-4">{section.description}</p>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="rounded-lg w-full max-w-2xl"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacultyPage;
