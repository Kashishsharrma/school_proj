import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Shaping = () => {
  return (
    <div
      className="relative w-full h-[600px] mt-16 bg-cover bg-center flex flex-col items-center justify-center gap-8"
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <Link
          to="/academics"
          className="text-white font-semibold px-6 py-3 rounded-full bg-[#1e2a50] hover:bg-white hover:text-[#1e2a50] border-2 border-white transition font-[700] duration-300"
        >
          Explore Academics
        </Link>
      </motion.div>
    </div>
  );
};

export default Shaping;
