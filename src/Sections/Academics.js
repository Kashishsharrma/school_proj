import React from "react";
import { useNavigate } from "react-router-dom";
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
    iconBg: "bg-gray-100",
    iconColor: "text-green-600",
  },
  {
    title: "Chemistry Lab",
    description:
      "Well-equipped chemistry laboratory with safety protocols and advanced instruments.",
    path: "/academics/chemistry-lab",
    icon: <PiTestTubeBold size={26} />,
    iconBg: "bg-gray-100",
    iconColor: "text-blue-600",
  },
  {
    title: "School Library",
    description:
      "Extensive collection of books, digital resources, and quiet study spaces for research.",
    path: "/academics/library",
    icon: <PiBookOpenText size={26} />,
    iconBg: "bg-gray-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Physics Lab",
    description:
      "Modern physics laboratory with equipment for practical demonstrations and experiments.",
    path: "/academics/physics-lab",
    icon: <TbAtom size={26} />,
    iconBg: "bg-gray-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Sports Activities",
    description:
      "Active sports programs promoting physical fitness, teamwork, and discipline.",
    path: "/academics/sports",
    icon: <GiSoccerBall size={26} />,
    iconBg: "bg-gray-100",
    iconColor: "text-lime-600",
  },
  {
    title: "Computer Lab",
    description:
      "Up-to-date computer lab with high-speed internet and modern systems for digital learning.",
    path: "/academics/computer-lab",
    icon: <RxDesktop size={26} />,
    iconBg: "bg-gray-100",
    iconColor: "text-blue-700",
  },
  {
    title: "Smart Classes",
    description:
      "Technology-integrated classrooms enabling interactive and modern teaching methods.",
    path: "/academics/smart-class",
    icon: <LuMonitorSmartphone size={26} />,
    iconBg: "bg-gray-100",
    iconColor: "text-red-600",
  },
  {
    title: "Music Room",
    description:
      "Dedicated space for musical learning and practice with instruments and audio tools.",
    path: "/academics/music-room",
    icon: <PiMusicNotesBold size={26} />,
    iconBg: "bg-gray-100",
    iconColor: "text-pink-600",
  },
];

const Academics = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen px-6 md:px-20 py-16 bg-white mt-[70px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {academicsData.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition cursor-pointer"
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
            <h3 className="text-xl font-semibold text-center text-black mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm text-center mb-4">
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
  );
};

export default Academics;
