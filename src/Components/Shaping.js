import React from "react";
import { motion } from "framer-motion";

const Shaping = () => {
  return (
    <div
      className="relative w-full h-[600px] mt-16 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/shaping.jpg')",
      }}
    >
      <svg
        viewBox="0 0 800 200"
        className="w-[90%] max-w-4xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.text
          x="50%"
          y="40%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Lato"
          fontSize="56"
          fontWeight="700"
          fill="white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Shaping bright minds
        </motion.text>

        <motion.text
          x="50%"
          y="70%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Lato"
          fontSize="56"
          fontWeight="700"
          fill="white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          for a brighter future
        </motion.text>
      </svg>
    </div>
  );
};

export default Shaping;
