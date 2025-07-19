import React from "react";
import { useNavigate } from "react-router-dom";
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
    iconBg: "bg-[#e9f0fe]",
    iconColor: "text-[#2563eb]",
    path: "/essentials/books",
  },
  {
    title: "School Uniform",
    description:
      "Official uniform guidelines, dress code, and approved suppliers information.",
    icon: <PiStudentFill size={26} />,
    iconBg: "bg-[#e6f6ec]",
    iconColor: "text-[#16a34a]",
    path: "/essentials/uniform",
  },
  {
    title: "School Transport",
    description:
      "Bus routes, timings, transport fees, and safety guidelines for school transportation.",
    icon: <BsBusFront size={26} />,
    iconBg: "bg-[#f3f4f6]",
    iconColor: "text-[#b45309]",
    path: "/essentials/transport",
  },
  {
    title: "Academic Calendar",
    description:
      "Important dates, holidays, examination schedules, and academic year planning.",
    icon: <MdCalendarMonth size={26} />,
    iconBg: "bg-[#f3ecfc]",
    iconColor: "text-[#7c3aed]",
    path: "/essentials/calendar",
  },
  {
    title: "School Timings",
    description:
      "Class schedules, break timings, and office hours for different grade levels.",
    icon: <LuClock size={26} />,
    iconBg: "bg-[#f3ecfc]",
    iconColor: "text-[#7c3aed]",
    path: "/essentials/timings",
  },
  {
    title: "Campus",
    description:
      "Explore locations of classrooms, facilities, and more.",
    icon: <MdLocationPin size={26} />,
    iconBg: "bg-[#fef6e7]",
    iconColor: "text-[#ea580c]",
    path: "/essentials/campus-map",
  },
];

const Information = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-6 md:px-20 py-16 bg-white mt-[70px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {InformationData.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 text-center bg-white hover:shadow-md transition cursor-pointer"
            onClick={() => navigate(item.path)}
          >
            {/* Icon */}
            <div
              className={`w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full ${item.iconBg}`}
            >
              <span className={`${item.iconColor}`}>{item.icon}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>

            {/* Learn more button */}
            <button
              className="border rounded-md px-4 py-2 text-sm font-medium text-gray-900 
              border-gray-300 hover:bg-gray-100 flex items-center justify-center gap-1 mx-auto"
            >
              Learn more <span aria-hidden="true">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
