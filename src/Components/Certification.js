import React from "react";
import { SlBadge } from "react-icons/sl";
import { GoTrophy } from "react-icons/go";
import { LuSchool } from "react-icons/lu";
import { FaRankingStar } from "react-icons/fa6";
import { motion } from "framer-motion";

const Certification = () => {
  const stats = [
    {
      icon: <SlBadge size={30} />,
      number: "12+",
      text: "Years of Excellence",
      iconBg: "bg-pink-200",
      iconColor: "text-pink-800",
      textColor: "text-pink-600",
    },
    {
      icon: <GoTrophy size={30} />,
      number: "100%",
      text: "Satisfied Parents",
      iconBg: "bg-purple-200",
      iconColor: "text-purple-800",
      textColor: "text-purple-600",
    },
    {
      icon: <LuSchool size={30} />,
      number: "50+",
      text: "Certified Teachers",
      iconBg: "bg-red-200",
      iconColor: "text-red-800",
      textColor: "text-red-600",
    },
    {
      icon: <FaRankingStar size={30} />,
      number: "100%",
      text: "Unblemished Scores",
      iconBg: "bg-teal-200",
      iconColor: "text-teal-800",
      textColor: "text-teal-600",
    },
  ];

  return (
    <motion.div
      className="bg-[#f9fafb] py-16"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Title Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold font-[700] text-[#0c0c0c]">Our Achievements</h2>
        <p className="text-black mt-4 font-[500] text-lg max-w-2xl mx-auto">
          Over the years, Galaxy Star Public School has maintained excellence in education and continues
          to be a trusted choice for parents and students.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition text-center"
          >
            <div
              className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ${item.iconBg}`}
            >
              <div className={`${item.iconColor}`}>{item.icon}</div>
            </div>
            <div className={`text-3xl font-bold font-[500] mb-1 ${item.textColor}`}>
              {item.number}
            </div>
            <p className="text-black font-[500] text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certification;
