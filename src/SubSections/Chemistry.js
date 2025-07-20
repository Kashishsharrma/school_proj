import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ChemistryLab = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center py-16 px-6 md:px-20 font-[Lato]"
      style={{
        backgroundImage: "url('/images/chemistry.jpg')",
      }}
    >
      {/* Back Button and Heading */}
      <div className="mb-10">
        <Link
          to="/academics"
          className="text-lg text-white mt-2 font-[500] inline-block mb-2"
        >
          &lt; Back
        </Link>
        <h2 className="text-3xl font-[500] text-white">Chemistry Lab</h2>
      </div>

      {/* Left Arrow */}
      <Link
        to="/academics/biology-lab"
        className="fixed z-50 left-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 md:p-3 rounded-full shadow-md hover:bg-[#1e2a50] hover:text-white transition-all duration-300"
      >
        <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
      </Link>

      {/* Right Arrow */}
      <Link
        to="/academics/library"
        className="fixed z-50 right-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 md:p-3 rounded-full shadow-md hover:bg-[#1e2a50] hover:text-white transition-all duration-300"
      >
        <FaArrowRight className="w-4 h-4 md:w-5 md:h-5" />
      </Link>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-xl p-6 text-center flex flex-col justify-start hover:scale-105 transition-transform duration-300 min-h-[400px]">
          <img
            src="/images/chemistry-lab.jpg"
            alt="Organic Chemistry"
            className="w-full h-52 object-cover rounded-lg"
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-[#1e2a50]">Organic Chemistry</h3>
            <p className="text-sm text-gray-600 mt-2">
              Explore carbon compounds, reactions, mechanisms, and hands-on organic experiments in our modern lab setup.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-xl p-6 text-center flex flex-col justify-start hover:scale-105 transition-transform duration-300 min-h-[400px]">
          <img
            src="/images/bio.jpg"
            alt="Inorganic Chemistry"
            className="w-full h-52 object-cover rounded-lg"
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-[#1e2a50]">Inorganic Chemistry</h3>
            <p className="text-sm text-gray-600 mt-2">
              Learn about elements, salts, metals, and conduct color reaction experiments to understand the periodic trends.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-xl p-6 text-center flex flex-col justify-start hover:scale-105 transition-transform duration-300 min-h-[400px]">
          <img
            src="/images/learn.png"
            alt="Physical Chemistry"
            className="w-full h-52 object-cover rounded-lg"
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-[#1e2a50]">Physical Chemistry</h3>
            <p className="text-sm text-gray-600 mt-2">
              Dive into concepts like kinetics, thermodynamics, and conduct lab-based evaluations to reinforce theoretical principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChemistryLab;
