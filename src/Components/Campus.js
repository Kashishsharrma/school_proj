import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

const images = ["/images/GALLERY WEB 5.jpg", "/images/GALLERY WEB 6.jpg"];

const Campus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col-reverse md:flex-row bg-white w-full min-h-screen px-6 md:px-16 py-12 md:py-24 items-center">
      
      {/* Left Column (Text Section) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
          Experience Our Campus Life
        </h2>
        <p className="text-lg md:text-xl text-black">
          Live, learn and grow with Galaxy Star Public School.
        </p>
        <Link to="/gallery">
          <button className="border-[3px] border-[#1e2a50] bg-white text-[#1e2a50] font-[700] px-6 py-2 rounded-full text-lg font-medium mt-8 hover:bg-[#1e2a50] hover:text-white transition-all duration-300">
            See More
          </button>
        </Link>
      </div>

      {/* Right Column (Image Slideshow) */}
      <div className="w-full md:w-1/2 relative flex justify-center items-center px-4">
        <img
          src={images[currentIndex]}
          alt="Campus Life"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-xl transition-all duration-500"
        />

        {/* Previous Button */}
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-4 bg-white bg-opacity-60 text-black p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-300"
        >
          <GrFormPrevious className="text-xl" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-4 bg-white bg-opacity-60 text-black p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-300"
        >
          <GrFormNext className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Campus;
