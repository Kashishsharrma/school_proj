import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFootballBall,
  FaRunning,
  FaBasketballBall,
  FaSwimmer,
} from "react-icons/fa";
import { GiTennisRacket, GiWhistle } from "react-icons/gi";
import { motion } from "framer-motion";

const activities = [
  { title: "Football", icon: <FaFootballBall />, desc: "Training sessions and inter-school competitions." },
  { title: "Basketball", icon: <FaBasketballBall />, desc: "Daily practice and tournaments." },
  { title: "Running", icon: <FaRunning />, desc: "Track events and fitness training." },
  { title: "Swimming", icon: <FaSwimmer />, desc: "Indoor and outdoor pools with certified trainers." },
  { title: "Tennis", icon: <GiTennisRacket />, desc: "Lawn tennis coaching and championships." },
  { title: "Coaching", icon: <GiWhistle />, desc: "Expert sports staff and PE sessions." },
];

const Sports = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-20 font-[Lato]">
      {/* Navigation Arrows */}
      <Link
        to="/academics/physics-lab"
        className="hidden md:flex items-center justify-center fixed left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-3 rounded-full shadow-lg transition"
      >
        <FaArrowLeft />
      </Link>

      <Link
        to="/academics/computer-lab"
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
        <h2 className="text-3xl font-bold text-gray-800">Sports Activities</h2>
      </div>

      {/* Star Layout */}
      <div className="relative w-full flex justify-center items-center min-h-[500px] my-32">
        {/* Central Image */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg z-10 bg-white">
          <img
            src="/images/bio.jpg" // Replace with your image
            alt="Sports"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Surrounding Activity Cards */}
        {activities.map((activity, index) => {
          const angle = (360 / activities.length) * index;
          const radius = 250; // Increased spacing from center

          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ opacity: 1, x, y }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="absolute w-40 md:w-52 bg-[#f8f9fc] p-3 md:p-4 rounded-xl shadow-md text-center"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <div className="text-2xl md:text-3xl text-[#1e2a50] mb-2">{activity.icon}</div>
              <h4 className="text-sm md:text-md font-semibold text-gray-800 mb-1">{activity.title}</h4>
              <p className="text-xs md:text-sm text-gray-600">{activity.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Media Gallery */}
      <div className="mt-24">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Images */}
          <img src="/sports/img1.jpg" alt="Sports 1" className="rounded-lg shadow-lg w-full h-60 object-cover" />
          <img src="/sports/img2.jpg" alt="Sports 2" className="rounded-lg shadow-lg w-full h-60 object-cover" />
          <img src="/sports/img3.jpg" alt="Sports 3" className="rounded-lg shadow-lg w-full h-60 object-cover" />

          {/* Videos */}
          <video controls className="rounded-lg shadow-lg w-full h-60 object-cover">
            <source src="/sports/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls className="rounded-lg shadow-lg w-full h-60 object-cover">
            <source src="/sports/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Sports;
