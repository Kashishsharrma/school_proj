import React from "react";
import { useNavigate } from "react-router-dom";
import { GiPlantSeed, GiMaterialsScience } from "react-icons/gi";
import { SlChemistry } from "react-icons/sl";
import { IoLibraryOutline, IoMusicalNotesSharp } from "react-icons/io5";
import { PiHandsPrayingFill, PiProjectorScreen } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";

const academicsData = [
  { title: "Biology Lab", path: "/academics/biology-lab", icon: <GiPlantSeed className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#8D3C44]" /> },
  { title: "Chemistry Lab", path: "/academics/chemistry-lab", icon: <SlChemistry className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#8D3C44]" /> },
  { title: "School Library", path: "/academics/library", icon: <IoLibraryOutline className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#8D3C44]" /> },
  { title: "Physics Lab", path: "/academics/physics-lab", icon: <GiMaterialsScience className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#8D3C44]" /> },
  { title: "Prayer Room", path: "/academics/prayer-room", icon: <PiHandsPrayingFill className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#8D3C44]" /> },
  { title: "Computer Lab", path: "/academics/computer-lab", icon: <FaComputer className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#8D3C44]" /> },
  { title: "Smart Classes", path: "/academics/smart-class", icon: <PiProjectorScreen className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#8D3C44]" /> },
  { title: "Music Room", path: "/academics/music-room", icon: <IoMusicalNotesSharp className="w-16 h-16 md:w-20 md:h-20 mb-4 text-[#8D3C44]" /> },
];

const Academics = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col items-start justify-center px-16 py-10">
      {/* Hero Heading Section */}
      <div className="mb-8 mt-[80px] w-full">
        <h1 className="text-4xl text-center mx-auto text-black mt-4 mb-4">
          Redefining Excellence: Our Journey Beyond the Ordinary
        </h1>
        <p className="text-lg text-black mx-auto p-4 leading-relaxed max-w-4xl font-medium">
          At <strong>Galaxy Star Public School</strong>, we’ve never been content with just meeting expectations — we strive to
          set new standards. Our legacy is built on challenging the norm, pushing boundaries, and
          fostering a culture that embraces innovation, integrity, and inspiration.
          <br />
          <br />
          From humble beginnings, we have grown into an institution that consistently
          raises the bar in education, not just in terms of academic results, but in cultivating
          well-rounded, confident, and compassionate individuals.
          <br />
          <br />
          At Galaxy Star, we don’t just teach — we transform. And that transformation begins the moment we choose to
          rise above mediocrity and reach for the stars.
        </p>
      </div>

      {/* Subheading */}
      <div className="mb-8 w-full">
        <h2 className="text-4xl text-center mx-auto text-black mt-6 font-bold">Your Future Begins Here</h2>
        <p className="text-lg text-center mx-auto font-medium text-black mt-2">
          Explore all our facilities, we have to offer
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {academicsData.map((item, index) => (
          <div
            key={index}
            className="p-10 h-72 flex flex-col justify-center items-center border-2 border-black rounded-2xl 
            shadow-lg text-center transition-all duration-300 hover:bg-[rgba(141,60,68,0.5)] hover:text-[#8D3C44] cursor-pointer"
            onClick={() => navigate(item.path)}
          >
            {/* Icon */}
            {item.icon}

            {/* Title */}
            <h2 className="text-2xl font-semibold">{item.title}</h2>

            {/* Learn More Link */}
            <p className="mt-6 text-base font-medium">
              <span className="underline">Learn More →</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academics;
