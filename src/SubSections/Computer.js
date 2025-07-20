import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { GiProcessor, GiNetworkBars } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const ComputerLab = () => {
  const carouselImages = [
    "/images/computer.jpg",
    "/images/computer.jpg",
    "/images/computer.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative bg-white py-16 px-6 md:px-20 font-[Lato]">
      {/* Navigation Arrows (Fixed) */}
      <Link
        to="/academics/sports"
        className="hidden md:flex items-center justify-center fixed left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-3 rounded-full shadow-lg transition z-50"
      >
        <FaArrowLeft />
      </Link>

      <Link
        to="/academics/smart-class"
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
        <h2 className="text-3xl font-bold text-gray-800">Computer Lab</h2>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <MdComputer className="text-4xl text-blue-600 mb-3" />
          <h4 className="text-xl font-semibold text-gray-800">30+ Computers</h4>
        </div>
        <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <GiProcessor className="text-4xl text-green-600 mb-3" />
          <h4 className="text-xl font-semibold text-gray-800">Modern CPUs</h4>
        </div>
        <div className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-md transition">
          <GiNetworkBars className="text-4xl text-yellow-600 mb-3" />
          <h4 className="text-xl font-semibold text-gray-800">High-Speed Internet</h4>
        </div>
      </div>

      {/* Description + Image Carousel */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Description */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Empowering Students with Technology
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our state-of-the-art computer lab is designed to introduce students
            to the digital world through hands-on learning. Equipped with modern
            systems, structured internet access, and guided instruction, it lays
            the foundation for digital literacy, coding, and responsible internet use.
          </p>
        </div>

        {/* Carousel */}
        <div className="md:w-1/2 relative overflow-hidden h-64 rounded-xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={current}
              src={carouselImages[current]}
              alt="Computer Lab"
              className="absolute w-full h-full object-cover rounded-xl shadow"
              custom={direction}
              initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Carousel Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComputerLab;
