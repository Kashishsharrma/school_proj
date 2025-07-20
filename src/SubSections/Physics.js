import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PhysicsLab = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-20 font-[Lato]">
      {/* Left Arrow to School Library */}
      <Link
        to="/academics/library"
        className="hidden md:flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-3 rounded-full shadow-lg transition"
      >
        <FaArrowLeft />
      </Link>

      {/* Right Arrow to Sports Activities */}
      <Link
        to="/academics/sports"
        className="hidden md:flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-3 rounded-full shadow-lg transition"
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
        <h2 className="text-3xl font-bold text-gray-800">Physics Lab</h2>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/biology-lab.jpg"
            alt="Physics Lab"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Description */}
        <div>
          <p className="mb-4">
            The Physics Lab is equipped with modern instruments to help students
            explore the fundamental principles of physics through hands-on
            experimentation and observation.
          </p>
          <p className="mb-4">
            Students perform various experiments related to mechanics, optics,
            electricity, and magnetism, fostering analytical thinking and
            scientific inquiry in a well-structured environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhysicsLab;
