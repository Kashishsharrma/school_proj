import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosCloseCircleOutline } from "react-icons/io";

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
    <div className="w-full min-h-screen flex flex-col items-start justify-center px-8 py-10">
      {/* Heading Section with Animation */}
      <motion.h1 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }} 
        viewport={{ once: false }}
        className="text-6xl font-bold mt-[80px] mb-8 tracking-widest text-center w-full"
      >
        GALLERY
      </motion.h1>

      {/* Image Grid with Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
        viewport={{ once: false }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full"
      >
        {imageUrls.map((src, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: false }}
            className="overflow-hidden cursor-pointer"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-56 md:h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedImage(src)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for Enlarged Image with Animation */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0, scale: 0.8 }} 
          transition={{ duration: 0.5, ease: "easeOut" }} 
          className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50 p-4"
        >
          <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-[60vw] max-h-[70vh] flex items-center justify-center">
            {/* Close Button */}
            <IoIosCloseCircleOutline
              className="absolute top-3 right-3 text-3xl text-gray-800 cursor-pointer hover:text-red-500 transition"
              onClick={() => setSelectedImage(null)}
            />
            {/* Image Display (Preserves Aspect Ratio, Opens Smaller) */}
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[50vw] max-h-[50vh] object-contain rounded-lg"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
