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
      iconBg: "bg-[#e7ecf4]",
      iconColor: "text-[#0c2c34]",
      textColor: "text-[#0c2c34]",
    },
    {
      icon: <GoTrophy size={30} />,
      number: "100%",
      text: "Satisfied Parents",
      iconBg: "bg-[#f3ecfc]",
      iconColor: "text-[#7c3aed]",
      textColor: "text-[#7c3aed]",
    },
    {
      icon: <LuSchool size={30} />,
      number: "50+",
      text: "Certified Teachers",
      iconBg: "bg-[#e9f0fe]",
      iconColor: "text-[#2563eb]",
      textColor: "text-[#2563eb]",
    },
    {
      icon: <FaRankingStar size={30} />,
      number: "100%",
      text: "Unblemished Scores",
      iconBg: "bg-[#e6f6ec]",
      iconColor: "text-[#16a34a]",
      textColor: "text-[#16a34a]",
    },
  ];

  return (
    <div className="bg-[#f9fafb] py-16">
      {/* Title Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-[#0c0c0c]">Our Achievements</h2>
        <p className="text-[#64748b] mt-4 text-lg max-w-2xl mx-auto">
          Over the years, Galaxy Star Public School has maintained excellence in education and continues
          to be a trusted choice for parents and students.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <div
              className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ${item.iconBg}`}
            >
              <div className={`${item.iconColor}`}>{item.icon}</div>
            </div>

            {/* Number */}
            <div className={`text-3xl font-bold mb-1 ${item.textColor}`}>
              {item.number}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
