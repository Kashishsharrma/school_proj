import React from "react";
import { motion } from "framer-motion";
import { GiMaterialsScience } from "react-icons/gi";

const PhysicsLab = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-6 w-full bg-white"
    >
      {/* Left Side: Content */}
      <div className="flex-1 text-center mt-[100px] md:text-left">
        <div className="flex items-center justify-center md:justify-start mb-4">
          <GiMaterialsScience className="w-16 h-16 md:w-20 md:h-20 text-[#8D3C44]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Physics Lab – Unveiling the Secrets of Science
        </h2>
        <p className="text-lg font-medium text-gray-700">
        Exploring Physics through Hands-on Experiments

</p>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
       The Physics Lab at Galaxy Star Public School offers students a hands-on approach to understanding scientific principles. Equipped with modern tools, the lab enables experiments in mechanics, electricity, optics, and thermodynamics. 
</p>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
        Students engage in practical learning to strengthen theoretical concepts, fostering critical thinking and problem-solving skills. The lab provides a safe and dynamic environment where curiosity drives exploration and discovery, inspiring young minds to delve deeper into the wonders of physics.
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
          src="/images/physics-lab.jpg"
          alt="physics Lab"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default PhysicsLab;
