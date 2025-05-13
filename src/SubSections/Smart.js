import React from "react";
import { motion } from "framer-motion";
import {PiProjectorScreen } from "react-icons/pi";

const ChemistryLab = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="flex flex-col md:flex-row items-center justify-between  p-6 md:p-10 gap-6 w-full bg-white"
    >
      {/* Left Side: Content */}
      <div className="flex-1 text-center mt-[100px] md:text-left">
        <div className="flex items-center justify-center md:justify-start mb-4">
          <PiProjectorScreen className="w-16 h-16 md:w-20 md:h-20 text-[#8D3C44]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Smart Classes – Enhancing Education with Technology
        </h2>
        <p className="text-lg font-medium text-gray-700">
        Interactive learning with smart technology

</p>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
        At Galaxy Star Public School, every classroom is equipped with smart technology to transform traditional learning. These interactive smart classes facilitate engaging lessons with multimedia tools, making complex concepts easier to understand. Teachers utilize digital resources to create an immersive educational experience, catering to different learning styles.
        </p>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
        The smart classrooms empower students to participate actively, fostering collaboration and creativity. By integrating technology, we aim to provide a modern, effective, and stimulating learning environment.
        </p>
      </div>

      {/* Right Side: Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }}
        className="flex-1"
      >
        <img
          src="/images/chemistry-lab.jpg"
          alt="Chemistry Lab"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default ChemistryLab;
