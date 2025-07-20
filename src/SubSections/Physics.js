import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaGrav } from "react-icons/fa";
import { GiMaterialsScience, GiWeightScale } from "react-icons/gi";
import { Si365Datascience } from "react-icons/si";
import { MdScale } from "react-icons/md";

// Tree Structure Component
const TreeSection = () => {
  const items = [
    {
      icon: <GiMaterialsScience size={36} />,
    },
    {
      icon: <GiWeightScale size={32} />,
    },
    {
      icon: <FaGrav size={36} />,
    },
    {
      icon: <Si365Datascience size={36} />,
    },
    {
      icon: <MdScale size={32} />,
    },
  ];

  return (
    <div className="relative w-full my-16">
      <div className="flex justify-between items-start relative max-w-6xl mx-auto px-4">
        {/* Horizontal Line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-black z-0"></div>

        {items.map((item, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center w-1/5 text-center">
            {/* Vertical connector */}
            <div className="w-1 h-8 bg-black mb-2"></div>
            {/* Icon Circle */}
            <div className="bg-white border border-gray-300 rounded-full p-4 shadow-md mb-2">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Image Cards Section Component
// Image Cards Section Component
const ImageCardsSection = () => {
  const images = [
    {
      img: "/images/chemistry-lab.jpg",
      title: "Simple Pendulum",
    },
    {
      img: "/images/bio.jpg",
      title: "Light & Reflection",
    },
    {
      img: "/images/shaping.jpg",
      title: "Magnetism",
    },
    {
      img: "/images/chemistry.jpg",
      title: "Electric Circuits",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto h-[320px] px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 duration-300 flex flex-col items-center p-6"
        >
          {/* Circular Image */}
          <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
            <img
              src={img.img}
              alt={img.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Title */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-black">{img.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

const PhysicsLab = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-20 font-[Lato]">
      {/* Left Arrow to School Library */}
      <Link
        to="/academics/library"
        className="hidden md:flex items-center justify-center fixed left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-3 rounded-full shadow-lg transition"
      >
        <FaArrowLeft />
      </Link>

      {/* Right Arrow to Sports Activities */}
      <Link
        to="/academics/sports"
        className="hidden md:flex items-center justify-center fixed right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-3 rounded-full shadow-lg transition"
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
        <h2 className="text-3xl font-bold text-black">Physics Lab</h2>
      </div>

      {/* Tree-like Structure */}
      <TreeSection />

      {/* Image Cards Section */}
      <ImageCardsSection />
      {/* Physics Lab Description */}
<div className="max-w-4xl mx-auto mt-12 text-center">
  <p className="text-gray-700 text-lg leading-relaxed">
    The Physics Lab is designed to nurture scientific thinking and hands-on learning. 
    Equipped with a variety of instruments and apparatus, students from middle and senior classes perform experiments aligned with their curriculum. 
    Through activities like measuring gravity, studying magnetism, and exploring circuits, students gain a practical understanding of core physical concepts.
    Safety protocols and guided supervision ensure a secure and engaging learning environment.
    The lab fosters curiosity and builds a strong foundation for students aspiring to pursue science in higher studies.
  </p>
</div>

    </section>
  );
};

export default PhysicsLab;
