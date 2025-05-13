import React from "react";
import { motion } from "framer-motion";
import { SlChemistry } from "react-icons/sl";

const ChemistryLab = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="flex flex-col md:flex-row items-center justify-between shadow-lg p-6 md:p-10 gap-6 w-full bg-white"
    >
      {/* Left Side: Content */}
      <div className="flex-1 text-center mt-[100px] md:text-left">
        <div className="flex items-center justify-center md:justify-start mb-4">
          <SlChemistry className="w-16 h-16 md:w-20 md:h-20 text-[#8D3C44]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Chemistry Lab</h2>
        <p className="text-lg font-medium text-gray-700">
          Hands-on experiments and scientific exploration
        </p>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          The Chemistry Lab at <strong>Galaxy Star Public School</strong> provides students with a 
          hands-on environment for exploring chemical reactions and scientific principles. 
          Equipped with modern apparatus and safety gear, the lab encourages young scientists 
          to conduct experiments and deepen their understanding of chemistry.
        </p>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          Experienced instructors guide students through engaging practical sessions, fostering 
          curiosity and critical thinking. The lab is a space where theory meets practice, allowing 
          students to observe real-world applications of their studies.
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
