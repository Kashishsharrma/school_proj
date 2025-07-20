import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBus,
  FaShuttleVan,
  FaBusAlt,
} from "react-icons/fa";

const buses = [
  {
    title: "Airy Buses",
    icon: <FaBus className="text-3xl text-blue-800 mb-2" />,
    bgColor: "bg-blue-100",
  },
  {
    title: "10+ Large Buses",
    icon: <FaBusAlt className="text-3xl text-pink-800 mb-2" />,
    bgColor: "bg-pink-100",
  },
  {
    title: "Mini Buses",
    icon: <FaShuttleVan className="text-3xl text-yellow-800 mb-2" />,
    bgColor: "bg-yellow-100",
  },
];

const transportImages = [
  {
    img:"/images/bus.png",
    alt: "Yellow school bus parked near a school",
  },
  {
    img:"/images/bus.png",
    alt: "School bus on street with blurred background",
  },
  {
    img:"/images/bus.png",
    alt: "Yellow school bus on road during daytime",
  },
  {
    img:"/images/bus.png",
    alt: "Mini school bus parked near curb",
  },
];

const Transport = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-20 font-[Lato]">
      {/* Back Button to Information */}
      <Link
        to="/information"
        className="text-lg text-black font-[700] inline-block mb-8"
      >
        &lt; Back
      </Link>

      {/* Left Arrow to Uniform */}
      <Link
        to="/information/uniform"
        className="flex items-center justify-center fixed left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-2 sm:p-3 rounded-full shadow-lg transition z-50"
      >
        <FaArrowLeft className="text-lg sm:text-xl" />
      </Link>

      {/* Right Arrow to Calendar */}
      <Link
        to="/information/calendar"
        className="flex items-center justify-center fixed right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-2 sm:p-3 rounded-full shadow-lg transition z-50"
      >
        <FaArrowRight className="text-lg sm:text-xl" />
      </Link>

      {/* Title */}
      <h1 className="text-4xl font-bold text-left mb-10">School Transport</h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        {buses.map((bus, index) => (
          <div
            key={index}
            className={`${bus.bgColor} rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300`}
          >
            <div className="flex flex-col items-center text-black">
              {bus.icon}
              <h2 className="text-xl font-semibold mt-2">{bus.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Paragraph below cards */}
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-lg">
        Our school transport system is designed for safety, comfort, and punctuality. Whether it's a large bus for long routes or a mini bus for tighter streets, all vehicles are maintained to the highest standards to ensure students travel with ease and confidence.
      </p>

      {/* Transport Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {transportImages.map((img, idx) => (
          <img
            key={idx}
            src={img.img}
            alt={img.alt}
            className="w-full h-60 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default Transport;
