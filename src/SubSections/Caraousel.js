import React, { useState } from "react";
import ChemistryLab from "./Subsections/Chemistry";
import ComputerLab from "./Subsections/Computer";
import MusicRoom from "./Subsections/Music";
import PhysicsLab from "./Subsections/Physics";
import PrayerRoom from "./Subsections/Prayer";
import Library from "./Subsections/Library";
import SmartClass from "./Subsections/Smart";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const labs = [
  <ChemistryLab />,
  <ComputerLab />,
  <MusicRoom />,
  <PhysicsLab />,
  <PrayerRoom />,
  <Library />,
  <SmartClass />,
];

const LabCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % labs.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + labs.length) % labs.length);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-8 py-10 relative">
      {React.cloneElement(labs[currentIndex])}

      {/* Left Arrow */}
      <button
        onClick={goToPrev}
        className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 text-4xl text-gray-700 hover:text-blue-500 transition"
      >
        <IoIosArrowBack />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 text-4xl text-gray-700 hover:text-blue-500 transition"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default LabCarousel;
