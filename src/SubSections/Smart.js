import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SmartClasses = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-20 font-[Lato]">
      {/* Left Arrow to Computer Lab */}
      <Link
        to="/academics/computer-lab"
        className="hidden md:flex items-center justify-center fixed left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-3 rounded-full shadow-lg transition"
      >
        <FaArrowLeft />
      </Link>

      {/* Right Arrow to Music Room */}
      <Link
        to="/academics/music-room"
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
        <h2 className="text-3xl font-bold text-[#1e2a50]">Smart Classes</h2>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left Side Tags */}
        <div className="flex flex-col space-y-4 md:col-span-1">
          <span className="bg-[#1e2a50] text-white px-4 py-2 rounded-full text-center shadow">
            Interactive Boards
          </span>
          <span className="bg-[#1e2a50] text-white px-4 py-2 rounded-full text-center shadow">
            Digital Content
          </span>
          <span className="bg-[#1e2a50] text-white px-4 py-2 rounded-full text-center shadow">
            Engaging Tools
          </span>
        </div>

        {/* Right Side Cards */}
        <div className="md:col-span-4 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#f3f4f6] p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Smart Board Integration</h3>
              <p className="text-sm text-gray-700">
                Enables interactive learning through touch-enabled boards and multimedia tools.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f3f4f6] p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Online Resources</h3>
              <p className="text-sm text-gray-700">
                Access to curated digital content, quizzes, and learning videos to enrich understanding.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f3f4f6] p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Collaborative Learning</h3>
              <p className="text-sm text-gray-700">
                Fosters student collaboration with live annotations, presentations, and discussion tools.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Two Images in a Row */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="/images/smart.jpg"
          alt="Smart Class 1"
          className="w-full rounded-xl shadow-lg object-cover"
        />
        <img
          src="/images/smart.jpg"
          alt="Smart Class 2"
          className="w-full rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default SmartClasses;
