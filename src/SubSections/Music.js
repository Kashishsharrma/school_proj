import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const MusicRoom = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-20 font-[Lato]">
      {/* Left Arrow to Smart Classes */}
      <Link
        to="/academics/smart-class"
        className="hidden md:flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-3 rounded-full shadow-lg transition"
      >
        <FaArrowLeft />
      </Link>

      {/* Header */}
      <div className="mb-10">
        <Link
          to="/academics"
          className="text-lg text-black mt-2 inline-block mb-2"
        >
          &lt; Back
        </Link>
        <h2 className="text-3xl font-bold text-gray-800">Music Room</h2>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/biology-lab.jpg"
            alt="Music Room"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Description */}
        <div>
          <p className="mb-4">
            The music room fosters creativity and expression through a wide range
            of instruments and vocal training.
          </p>
          <p className="mb-4">
            Students are encouraged to explore musical talent, participate in performances,
            and develop appreciation for music from different cultures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MusicRoom;
