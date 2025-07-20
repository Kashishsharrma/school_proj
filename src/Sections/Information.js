import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { PiBooks, PiStudentFill } from "react-icons/pi";
import { BsBusFront } from "react-icons/bs";
import { MdCalendarMonth, MdCreditCard, MdLocationPin } from "react-icons/md";
import { LuClock } from "react-icons/lu";

const InformationData = [
  {
    title: "School Books",
    description:
      "Complete list of prescribed textbooks and reference materials for all classes.",
    icon: <PiBooks size={26} />,
    iconBg: "bg-blue-200",
    iconColor: "text-blue-800",
    path: "/information/books",
  },
  {
    title: "School Uniform",
    description:
      "Official uniform guidelines, dress code, and approved suppliers information.",
    icon: <PiStudentFill size={26} />,
    iconBg: "bg-green-200",
    iconColor: "text-green-800",
    path: "/information/uniform",
  },
  {
    title: "School Transport",
    description:
      "Bus routes, timings, transport fees, and safety guidelines for school transportation.",
    icon: <BsBusFront size={26} />,
    iconBg: "bg-yellow-200",
    iconColor: "text-yellow-800",
    path: "/essentials/transport",
  },
  {
    title: "Academic Calendar",
    description:
      "Important dates, holidays, examination schedules, and academic year planning.",
    icon: <MdCalendarMonth size={26} />,
    iconBg: "bg-purple-200",
    iconColor: "text-purple-800",
    path: "/information/calendar",
  },
  {
    title: "School Timings",
    description:
      "Class schedules, break timings, and office hours for different grade levels.",
    icon: <LuClock size={26} />,
    iconBg: "bg-indigo-200",
    iconColor: "text-indigo-800",
    path: "/information/timings",
  },
  {
    title: "Campus",
    description: "Explore locations of classrooms, facilities, and more.",
    icon: <MdLocationPin size={26} />,
    iconBg: "bg-orange-200",
    iconColor: "text-orange-800",
    path: "/information/campus-map",
  },
  {
    title: "Faculty",
    description:
      "Meet our experienced and passionate teaching staff committed to excellence.",
    icon: <MdCreditCard size={26} />,
    iconBg: "bg-pink-200",
    iconColor: "text-pink-800",
    path: "/information/faculty",
  },
];

const Information = () => {
  const navigate = useNavigate();

  return (
      <motion.div
      initial={{ opacity: 0, y: 50 }}      
      animate={{ opacity: 1, y: 0 }}        
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-4 py-12"               
    >
    <div className="w-full min-h-screen px-6 md:px-20 py-16 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {InformationData.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition cursor-pointer"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full ${item.iconBg}`}
              >
                <div className={`text-3xl ${item.iconColor}`}>{item.icon}</div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-[500] text-center text-black mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-black text-sm text-center mb-4">
              {item.description}
            </p>

            {/* Button */}
            <div className="text-center">
              <button
                onClick={() => navigate(item.path)}
                className="text-sm font-semibold text-black hover:text-indigo-700 transition flex items-center gap-1 mx-auto"
              >
                Learn more <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </motion.div>
  );
};

export default Information;
