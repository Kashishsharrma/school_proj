import React from "react";
import { motion } from "framer-motion";
import { PiBooks, PiStudentFill } from "react-icons/pi";
import { BsBusFront } from "react-icons/bs";
import { MdCalendarMonth } from "react-icons/md";

const InformationData = [
  { title: "School Books", icon: <PiBooks className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#8D3C44]" /> },
  { title: "School Uniform", icon: <PiStudentFill className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#8D3C44]" /> },
  { title: "School Transport", icon: <BsBusFront className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#8D3C44]" /> },
  { title: "Academic Calendar", icon: <MdCalendarMonth className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#8D3C44]" /> },
];

const Information = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }} // Re-triggers when scrolling
      className="w-full min-h-screen flex flex-col items-start justify-center px-6 md:px-16 py-8 pt-24"
    >
      {/* Heading Section */}
      <div className="mb-8 w-full text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold">School Essentials</h1>
        <p className="text-base md:text-lg font-medium text-gray-700 mt-2">
          Explore the key details that help you succeed at our school
        </p>
      </div>

      {/* Cards Section (Grouped Animation) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full"
      >
        {InformationData.map((item, index) => (
          <div
            key={index}
            className="p-6 md:p-10 min-h-[250px] flex flex-col justify-center items-center border-2 border-black rounded-2xl 
            shadow-lg text-center transition-all duration-300 hover:bg-[rgba(141,60,68,0.5)] hover:text-[#8D3C44] cursor-pointer"
          >
            {/* Icon */}
            {item.icon}

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-semibold">{item.title}</h2>

            {/* Learn More Link */}
            <p className="mt-4 md:mt-6 text-sm md:text-base font-medium">
              <a href="#" className="underline">
                Learn More →
              </a>
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Information;
