import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";

const imageUrls = [
  "/images/GALLERY WEB 1.jpg",
  "/images/GALLERY WEB 2.jpg",
  "/images/GALLERY WEB 3.jpg",
  "/images/GALLERY WEB 4.jpg",
  "/images/GALLERY WEB 5.jpg",
  "/images/GALLERY WEB 6.jpg",
  "/images/galaxy star wallpaper.jpg",
  "/images/logo.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-screen px-6 py-12 bg-white"
    >
      {/* Heading */}
      <h1 className="text-6xl mt-[40px] font-bold mb-10  text-[#1e2a50] font-[500] text-left">
        GALLERY
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6">
        {imageUrls.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="w-full h-56 md:h-64 object-cover rounded-sm transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-sm shadow-lg px-4 max-w-[90vw] max-h-[70vh] flex items-center justify-center"
          >
            {/* Close Button */}
            <IoIosClose
              className="absolute top-[-9px] left-1 text-3xl text-black rounded-full bg-white font-[500] cursor-pointer hover:bg-red-600 hover:font-[500] hover:text-white transition"
              onClick={() => setSelectedImage(null)}
            />
            {/* Enlarged Image */}
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[70vh] object-contain rounded-sm"
            />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Gallery;
