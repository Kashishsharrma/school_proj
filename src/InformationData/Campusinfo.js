import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";


const Campusinfo = () => {
  const scrollRef = useRef(null);
  const [scrollPos, setScrollPos] = useState({ left: false, right: true });

  const natureImages = [
    "https://source.unsplash.com/600x400/?nature,1",
    "https://source.unsplash.com/600x400/?campus,trees",
    "https://source.unsplash.com/600x400/?nature,green",
    "https://source.unsplash.com/600x400/?park,school",
    "https://source.unsplash.com/600x400/?garden,flowers",
  ];

  const scrollNature = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const checkScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setScrollPos({
      left: scrollLeft > 0,
      right: scrollLeft + clientWidth < scrollWidth - 1,
    });
  };

  useEffect(() => {
    checkScrollButtons();
    const ref = scrollRef.current;
    if (ref) ref.addEventListener("scroll", checkScrollButtons);
    return () => {
      if (ref) ref.removeEventListener("scroll", checkScrollButtons);
    };
  }, []);

  const Section = ({ title, description, images }) => {
    const [index, setIndex] = useState(0);
    const next = () => {
      if (index < images.length - 1) setIndex(index + 1);
    };
    const prev = () => {
      if (index > 0) setIndex(index - 1);
    };

    return (
      <div className="my-12 px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-full md:w-[40%]">
            <img
              src={images[index]}
              alt={title}
              className="w-full max-h-[250px] object-cover rounded-xl shadow-md"
            />
            <button
              onClick={prev}
              disabled={index === 0}
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow ${
                index === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-[#1e2a50] hover:text-white"
              }`}
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={next}
              disabled={index === images.length - 1}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow ${
                index === images.length - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-[#1e2a50] hover:text-white"
              }`}
            >
              <IoIosArrowForward />
            </button>
          </div>
          <div className="md:w-[60%]">
            <h2 className="text-2xl font-bold text-[#1e2a50] mb-4">{title}</h2>
            <p className="text-gray-700 text-justify leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative bg-white py-16 px-6 sm:px-8 md:px-16 font-[Lato]">
      <Link to="/information" className="text-lg text-black font-[700] inline-block mb-8">
        &lt; Back
      </Link>

      <h1 className="text-3xl font-extrabold text-[#1e2a50] mb-10">Explore Our Campus</h1>

      {/* Auditorium Section */}
      <Section
        title="Auditorium"
        images={["/images/GALLERY WEB 5.jpg", "/images/GALLERY WEB 6.jpg"]}
        description="Our state-of-the-art auditorium is a hub of cultural and academic activities. Equipped with professional lighting and sound systems, it provides an immersive experience for all types of events, including seminars, performances, and ceremonies."
      />

      {/* Nature Section */}
      <div className="my-12 px-4">
        <h2 className="text-2xl font-bold text-[#1e2a50] mb-4">Nature Around Campus</h2>
        <div className="relative">
          <button
            onClick={() => scrollNature("left")}
            disabled={!scrollPos.left}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 ${
              !scrollPos.left ? "opacity-30 cursor-not-allowed" : "hover:bg-[#1e2a50] hover:text-white"
            }`}
          >
            <IoIosArrowBack />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>
              {`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            {natureImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Nature ${index + 1}`}
                className="min-w-[300px] max-w-[300px] h-[200px] object-cover rounded-xl shadow"
              />
            ))}
          </div>

          <button
            onClick={() => scrollNature("right")}
            disabled={!scrollPos.right}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 ${
              !scrollPos.right ? "opacity-30 cursor-not-allowed" : "hover:bg-[#1e2a50] hover:text-white"
            }`}
          >
            <IoIosArrowForward />
          </button>
        </div>
        <p className="mt-4 text-gray-700 text-justify leading-relaxed">
          Surrounded by lush greenery, our campus offers a serene environment that promotes learning and well-being. The natural landscape provides a refreshing escape from the classroom and is ideal for walks, reflection, and connecting with nature.
        </p>
      </div>

      {/* Stage Section */}
      <Section
        title="Main Stage"
        images={["/images/GALLERY WEB 4.jpg", "/images/GALLERY WEB 3.jpg"]}
        description="Our open-air stage is the centerpiece for cultural programs, skits, and annual functions. Designed for visibility and sound, it supports performances that engage the entire school community."
      />

      {/* Reception */}
      <Section
        title="Reception Area"
        images={["/images/GALLERY WEB 5.jpg", "/images/GALLERY WEB 6.jpg"]}
        description="The reception area serves as the first point of contact for visitors, parents, and students. It is staffed by a professional team that ensures smooth communication and assistance for all administrative needs."
      />

      {/* Medical Room */}
      <Section
        title="Medical Room"
        images={[
          "https://source.unsplash.com/800x400/?clinic,medical",
          "https://source.unsplash.com/800x400/?school,health",
        ]}
        description="The well-equipped medical room is available during school hours, managed by trained personnel. It provides first aid, manages minor injuries, and supports student health and safety."
      />

      {/* Playground */}
      <Section
        title="Playground"
        images={["/images/GALLERY WEB 4.jpg", "/images/GALLERY WEB 6.jpg"]}
        description="Our large playground encourages physical activity, sportsmanship, and teamwork. It includes dedicated areas for different games and is an essential part of holistic education at our school."
      />
        {/* Left Arrow to calendar */}
            <Link
              to="/information/calendar"
              className="flex items-center justify-center fixed left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-2 sm:p-3 rounded-full shadow-lg transition z-50"
            >
              <FaArrowLeft className="text-lg sm:text-xl" />
            </Link>
      
            {/* Right Arrow to faculty */}
            <Link
              to="/information/faculty"
              className="flex items-center justify-center fixed right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-2 sm:p-3 rounded-full shadow-lg transition z-50"
            >
              <FaArrowRight className="text-lg sm:text-xl" />
            </Link>
    </section>
    
  );
};

export default Campusinfo;
