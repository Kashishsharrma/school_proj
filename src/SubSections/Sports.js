import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Sports = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-20 font-[Lato]">
      {/* Left Arrow to Physics Lab */}
      <Link
        to="/academics/physics-lab"
        className="hidden md:flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-3 rounded-full shadow-lg transition"
      >
        <FaArrowLeft />
      </Link>

      {/* Right Arrow to Computer Lab */}
      <Link
        to="/academics/computer-lab"
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
        <h2 className="text-3xl font-bold text-gray-800">Sports Activities</h2>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/biology-lab.jpg"
            alt="Sports Activities"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Description */}
        <div>
          <p className="mb-4">
            Our school emphasizes physical education through a wide range of
            indoor and outdoor sports. Students are encouraged to take part in
            games like football, basketball, athletics, and more.
          </p>
          <p className="mb-4">
            Regular competitions and training sessions are held to build team
            spirit, fitness, and discipline among the students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sports;
