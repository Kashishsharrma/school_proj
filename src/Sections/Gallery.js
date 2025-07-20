import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Image categories
const imageSections = {
  Events: [
    "/images/GALLERY WEB 1.jpg",
    "/images/GALLERY WEB 2.jpg",
    "/images/GALLERY WEB 3.jpg",
    "/images/GALLERY WEB 4.jpg",
    "/images/GALLERY WEB 5.jpg",
    "/images/GALLERY WEB 2.jpg",
    "/images/GALLERY WEB 1.jpg",
    "/images/GALLERY WEB 3.jpg",
  ],
  Campus: [
    "/images/GALLERY WEB 4.jpg",
    "/images/GALLERY WEB 5.jpg",
    "/images/GALLERY WEB 6.jpg",
  ],
  Miscellaneous: [
    "/images/galaxy star wallpaper.jpg",
    "/images/bio.jpg",
  ],
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollRefs = useRef({}); // Refs for each section
  const [scrollStates, setScrollStates] = useState({});

  // Check if we can scroll left or right for each section
  const checkScroll = () => {
    const newScrollStates = {};
    for (const key in scrollRefs.current) {
      const el = scrollRefs.current[key];
      if (el) {
        newScrollStates[key] = {
          canScrollLeft: el.scrollLeft > 0,
          canScrollRight: el.scrollLeft + el.clientWidth < el.scrollWidth,
        };
      }
    }
    setScrollStates(newScrollStates);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (key, direction) => {
    const el = scrollRefs.current[key];
    if (el) {
      const scrollAmount = 300;
      el.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 300); // wait for scroll to finish and then check
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-screen px-6 py-12 bg-white"
    >
      {/* Heading */}
      <h1 className="text-6xl mt-[40px] font-bold mb-10 text-[#1e2a50] text-left">
        GALLERY
      </h1>

      {/* Sectioned Scrollable Gallery */}
      {Object.entries(imageSections).map(([sectionTitle, images], index) => (
        <div key={index} className="mb-12">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-semibold text-[#1e2a50]">
              {sectionTitle}
            </h2>
          </div>

          {/* Arrows + Scrollable Row */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full hover:bg-[#1e2a50] hover:text-white bg-white shadow-md ${
                scrollStates[sectionTitle]?.canScrollLeft ? "text-[#1e2a50]" : "text-gray-300 cursor-not-allowed"
              }`}
              onClick={() => scroll(sectionTitle, "left")}
              disabled={!scrollStates[sectionTitle]?.canScrollLeft}
            >
              <IoIosArrowBack size={20} />
            </button>

            {/* Image Row */}
            <div
              ref={(el) => (scrollRefs.current[sectionTitle] = el)}
              className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar"
              onScroll={checkScroll}
            >
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${sectionTitle} ${i + 1}`}
                  className="w-64 h-44 md:h-56 object-cover rounded-sm flex-shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full hover:bg-[#1e2a50] hover:text-white bg-white shadow-md ${
                scrollStates[sectionTitle]?.canScrollRight ? "text-[#1e2a50]" : "text-gray-300 cursor-not-allowed"
              }`}
              onClick={() => scroll(sectionTitle, "right")}
              disabled={!scrollStates[sectionTitle]?.canScrollRight}
            >
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>
      ))}

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-sm shadow-lg px-4 max-w-[90vw] max-h-[70vh] flex items-center justify-center"
          >
            <IoIosClose
              className="absolute top-[-9px] left-1 text-3xl text-black rounded-full bg-white font-[500] cursor-pointer hover:bg-red-600 hover:text-white transition"
              onClick={() => setSelectedImage(null)}
            />
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
