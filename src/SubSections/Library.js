import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import { RiBookShelfFill, RiSchoolLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { IoSchool } from "react-icons/io5";
import { FaSchool } from "react-icons/fa6";


const features = [
  {
    icon: <FaSchool className="text-3xl" />,
    bg: "bg-blue-100",
    text: "Wide Collection of Books",
    img: "/images/lib1.jpg",
  },
  {
    icon: <RiBookShelfFill className="text-orange-500 text-3xl" />,
    bg: "bg-orange-100",
    text: "Dedicated reading area",
    img: "/images/lib2.jpg",
  },
  {
    icon: <GiSchoolBag className="text-3xl" />,
    bg: "bg-purple-100",
    text: "Weekly library periods",
    img: "/images/lib6.jpg",
  },
  {
    icon: <TfiWrite className="text-green-600 text-2xl" />,
    bg: "bg-green-100",
    text: "Interactive Storytelling & Reading Sessions",
    img: "/images/lib3.jpg",
  },
  {
    icon: <IoSchool className="text-pink-500 text-3xl" />,
    bg: "bg-pink-100",
    text: "Library Club Activities",
    img: "/images/lib4.jpg",
  },
  {
    icon: <RiSchoolLine className="text-yellow-600 text-3xl" />,
    bg: "bg-yellow-100",
    text: "Multilingual Book Collection",
    img: "/images/lib5.jpg",
  },
];

const SchoolLibrary = () => {
  return (
    <section className="relative  py-16 px-6 md:px-20 font-[Lato]">
     {/* Navigation Arrows */}
<Link
  to="/academics/chemistry-lab"
  className="hidden md:flex items-center justify-center fixed left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-3 rounded-full shadow-lg transition z-50"
>
  <FaArrowLeft />
</Link>

<Link
  to="/academics/physics-lab"
  className="hidden md:flex items-center justify-center fixed right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-3 rounded-full shadow-lg transition z-50"
>
  <FaArrowRight />
</Link>


      {/* Header */}
      <div className="mb-10">
        <Link
          to="/academics"
          className="text-lg text-black mt-2 font-[500] inline-block mb-2"
        >
          &lt; Back
        </Link>
        <h2 className="text-3xl font-bold text-gray-800">School Library</h2>
      </div>

      {/* Feature Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-10">
        {/* Vertical Line */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 border-l-2 border-dashed border-black z-0"></div>

        {features.map((item, idx) => (
          <div
            key={idx}
            className={`relative z-10 flex items-center gap-4 ${
              idx % 2 === 0 ? "md:justify-start" : "md:justify-start "
            }`}
          >
            
            {/* Image */}
            <img
              src={item.img}
              alt="Feature Illustration"
              className="w-24 h-24 object-contain"
            />

            {/* Icon + Text Block */}
            <div className="max-w-xs flex items-center gap-4">
              <div
                className={`p-3 rounded-full flex items-center justify-center ${item.bg}`}
              >
                {item.icon}
              </div>
              <p className="text-gray-800 font-medium">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SchoolLibrary;
