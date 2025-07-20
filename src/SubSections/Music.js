import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { GiMusicalNotes, GiGuitar, GiDrum, GiMicrophone } from "react-icons/gi";

const MusicRoom = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-20 font-[Lato]">
      {/* Left Arrow to Smart Classes */}
      <Link
        to="/academics/smart-class"
        className="hidden md:flex items-center justify-center fixed left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-3 rounded-full shadow-lg transition"
      >
        <FaArrowLeft />
      </Link>

      {/* Header */}
      <div className="mb-10">
        <Link
          to="/academics"
          className="text-lg text-black mt-2 inline-block mb-2"
        >
          &lt; Back
        </Link>
        <h2 className="text-4xl font-bold text-gray-800">Music Room</h2>
        <p className="text-lg text-gray-600 mt-2 max-w-3xl">
          The Music Room at our school is a place where creativity and rhythm come alive. Students are introduced to various forms of Indian and Western music, trained in both vocals and instruments, and encouraged to express themselves through musical exploration.
        </p>
      </div>

      {/* Instrument Cards */}
<div className="mt-20">
  <h3 className="text-2xl font-bold text-gray-800 mb-6">Instruments</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {[
      {
        icon: <GiGuitar size={30} />,
        title: "Guitar",
        color: "#D97706", // Amber
        bg: "#FEF3C7",
      },
      {
        icon: <GiDrum size={30} />,
        title: "Drums",
        color: "#DC2626", // Red
        bg: "#FEE2E2",
      },
      {
        icon: <GiMicrophone size={30} />,
        title: "Vocal",
        color: "#2563EB", // Blue
        bg: "#DBEAFE",
      },
      {
        icon: <GiMusicalNotes size={30} />,
        title: "Keyboard",
        color: "#10B981", // Green
        bg: "#D1FAE5",
      },
      {
        icon: <GiMusicalNotes size={30} />,
        title: "Tabla",
        color: "#8B5CF6", // Violet
        bg: "#EDE9FE",
      },
      {
        icon: <GiMusicalNotes size={30} />,
        title: "Harmonium",
        color: "#F97316", // Orange
        bg: "#FFEDD5",
      },
      {
        icon: <GiMusicalNotes size={30} />,
        title: "Flute",
        color: "#14B8A6", // Teal
        bg: "#CCFBF1",
      },
      {
        icon: <GiMusicalNotes size={30} />,
        title: "Dholak",
        color: "#EF4444", // Rose
        bg: "#FEE2E2",
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center justify-center p-5 bg-[#f9f9f9] rounded-xl shadow hover:shadow-md transition"
      >
        <div
          className="p-4 rounded-full mb-3"
          style={{
            backgroundColor: item.bg,
            color: item.color,
          }}
        >
          {item.icon}
        </div>
        <h4 className="text-md font-semibold text-gray-800">{item.title}</h4>
      </div>
    ))}
  </div>
</div>


      {/* Gallery */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Inside the Music Room</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1508780709619-79562169bc64",
            "https://images.unsplash.com/photo-1508780709619-79562169bc64",
            "https://images.unsplash.com/photo-1508780709619-79562169bc64",
          ].map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Music Room ${index + 1}`}
              className="rounded-xl shadow-md hover:scale-105 transition"
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default MusicRoom;
