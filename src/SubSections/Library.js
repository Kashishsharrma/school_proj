import React from "react";
import { motion } from "framer-motion";
import { IoLibraryOutline} from "react-icons/io5";

const Library = () => {
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
          <IoLibraryOutline className="w-16 h-16 md:w-20 md:h-20 text-[#8D3C44]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">School Library: A Universe of Knowledge
        </h2>
        <p className="text-lg font-medium text-gray-700">
        Gateway to knowledge and endless imagination

</p>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
        This space is a vibrant hub of learning, offering a vast collection of books, magazines, and digital resources. It provides a quiet space for students to read, research, and explore new topics, fostering a love for lifelong learning.
           </p>

        <p className="mt-4 text-base text-gray-600 leading-relaxed">
        With cozy reading corners and study areas, the library encourages curiosity and supports academic growth. It's a place where knowledge meets imagination.     
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
          src="/images/library.jpg"
          alt="Chemistry Lab"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default Library;
