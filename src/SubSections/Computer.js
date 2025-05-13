import React from "react";
import { motion } from "framer-motion";
import { FaComputer } from "react-icons/fa6";

const ComputerLab = () => {
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
          <FaComputer className="w-16 h-16 md:w-20 md:h-20 text-[#8D3C44]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Computer Lab</h2>
        <p className="text-lg font-medium text-gray-700">
          Hands-on experiments and scientific exploration
        </p>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
       The computer lab at Galaxy Star Public School is a modern, tech-enhanced space designed to foster digital literacy and innovation. Equipped with the latest hardware and software, it provides students with hands-on experience in coding, graphic design, and multimedia projects. Our lab supports a dynamic curriculum that encourages problem-solving and creativity through technology.        </p>

        <p className="mt-4 text-base text-gray-600 leading-relaxed">
        Guided by expert instructors, students gain essential skills to navigate the digital world confidently. The computer lab is not just a place for learning; it's a gateway to exploring new possibilities and preparing for future technological advancements. 
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
          className="w-full max-w-sm mt-[100px] md:max-w-md lg:max-w-lg rounded-lg shadow-md object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default ComputerLab;
