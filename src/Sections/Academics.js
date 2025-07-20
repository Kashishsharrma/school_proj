import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LuMicroscope } from "react-icons/lu";
import { PiTestTubeBold, PiBookOpenText, PiMusicNotesBold } from "react-icons/pi";
import { TbAtom } from "react-icons/tb";
import { RxDesktop } from "react-icons/rx";
import { LuMonitorSmartphone } from "react-icons/lu";
import { GiSoccerBall } from "react-icons/gi"; // ✅ New Icon

const academicsData = [
  {
    title: "Biology Lab",
    description:
      "State-of-the-art biology laboratory for hands-on learning and experiments.",
    path: "/academics/biology-lab",
    icon: <LuMicroscope size={26} />,
    iconBg: "bg-green-200",
    iconColor: "text-green-800",
  },
  {
    title: "Chemistry Lab",
    description:
      "Well-equipped chemistry laboratory with safety protocols and advanced instruments.",
    path: "/academics/chemistry-lab",
    icon: <PiTestTubeBold size={26} />,
    iconBg: "bg-blue-200",
    iconColor: "text-blue-800",
  },
  {
    title: "School Library",
    description:
      "Extensive collection of books, digital resources, and quiet study spaces for research.",
    path: "/academics/library",
    icon: <PiBookOpenText size={26} />,
    iconBg: "bg-purple-200",
    iconColor: "text-purple-800",
  },
  {
    title: "Physics Lab",
    description:
      "Modern physics laboratory with equipment for practical demonstrations and experiments.",
    path: "/academics/physics-lab",
    icon: <TbAtom size={26} />,
    iconBg: "bg-orange-200",
    iconColor: "text-orange-800",
  },
  {
    title: "Sports Activities",
    description:
      "Active sports programs promoting physical fitness, teamwork, and discipline.",
    path: "/academics/sports",
    icon: <GiSoccerBall size={26} />,
    iconBg: "bg-teal-200",
    iconColor: "text-teal-900",
  },
  {
    title: "Computer Lab",
    description:
      "Up-to-date computer lab with high-speed internet and modern systems for digital learning.",
    path: "/academics/computer-lab",
    icon: <RxDesktop size={26} />,
    iconBg: "bg-lime-200",
    iconColor: "text-lime-800",
  },
  {
    title: "Smart Classes",
    description:
      "Technology-integrated classrooms enabling interactive and modern teaching methods.",
    path: "/academics/smart-class",
    icon: <LuMonitorSmartphone size={26} />,
    iconBg: "bg-red-200",
    iconColor: "text-red-800",
  },
  {
    title: "Music Room",
    description:
      "Dedicated space for musical learning and practice with instruments and audio tools.",
    path: "/academics/music-room",
    icon: <PiMusicNotesBold size={26} />,
    iconBg: "bg-pink-200",
    iconColor: "text-pink-700",
  },
];

const Academics = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}      // Starts below and invisible
      animate={{ opacity: 1, y: 0 }}        // Moves up into place and fades in
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-4 py-12"               // Tailwind layout styling
    >
    <div className="w-full min-h-screen px-6 md:px-20 py-16 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {academicsData.map((item, index) => (
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
            <p className="text-black font-[400] text-sm text-center mb-4">
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

export default Academics;
