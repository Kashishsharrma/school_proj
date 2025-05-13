import React from "react";
import { SlBadge } from "react-icons/sl";
import { GoTrophy } from "react-icons/go";
import { LuSchool } from "react-icons/lu";
import { FaRankingStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Certification = () => {
  const stats = [
    { icon: <SlBadge size={70} className="text-[#8D3C44] " />, number: "12+", text: "Years of Excellence", bgColor: "rgba(255, 163, 189, 0.5)" },
    { icon: <GoTrophy size={70} className="text-white" />, number: "100%", text: "Satisfied Parents", bgColor: "#8D3C44" },
    { icon: <LuSchool size={70} className="text-[#8D3C44]" />, number: "50+", text: "Certified Teachers", bgColor:"rgba(255, 163, 189, 0.5)" },
    { icon: <FaRankingStar size={70} className="text-white" />, number: "100%", text: "Unblemished Scores", bgColor: "#8D3C44" },
  ];

  return (
    <>
      {/* Header Section - Now Fully Responsive */}
      <div className="w-full flex flex-col md:flex-row items-center my-16 px-8 text-center md:text-left">
        <h2 className="text-4xl font-bold w-full md:w-1/2 mb-4 md:mb-0">
          Explore Our Diverse Range of Academic Facilities
        </h2>
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <p className="text-lg leading-relaxed font-poppins font-extralight">
            At Galaxy Star Public School, we pride ourselves on providing a diverse range of facilities designed to enhance the educational experience for every student. From well-equipped classrooms and specialized laboratories to creative spaces for arts and music, our campus fosters a holistic learning environment.
          </p>
          <Link to="/academics">
            <button className="bg-white text-[#8D3C44] px-6 py-3 rounded-full text-lg font-semibold mt-4 
              border-2 border-[#8D3C44] transition-all duration-300 
              hover:bg-[#8D3C44] hover:text-white">
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* Stats Cards with Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8 mt-8">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-2xl text-center shadow-lg flex flex-col items-center"
            style={{ backgroundColor: item.bgColor }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} // Ensures re-triggering on every view
          >
            {/* Icon at the Top with Hover Zoom Effect */}
            <motion.div 
              className="mb-4"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              {item.icon}
            </motion.div>

            {/* Number with Larger Font */}
            <div className={`text-4xl font-semibold mb-2 ${item.bgColor === "#8D3C44" ? "text-white" : "text-[#8D3C44]"}`}>
              {item.number}
            </div>

            {/* Text Below */}
            <p className={`text-lg font-semibold ${item.bgColor === "#8D3C44" ? "text-white" : "text-[#8D3C44]"}`}>
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Certification;
