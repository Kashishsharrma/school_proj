import React from "react";

const Shaping = () => {
  return (
    <div
      className="relative w-full h-[600px] mt-16 bg-cover bg-center flex items-center justify-center "
      style={{
        backgroundImage: "url('/images/shaping.jpg')",
      }}
    >
      <svg
        viewBox="0 0 800 200"
        className="w-[90%] max-w-4xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <text
          x="50%"
          y="40%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Lato"
          fontSize="56"
          fontWeight="700"
          fill="white"
        >
          Shaping bright minds
        </text>
        <text
          x="50%"
          y="70%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Lato"
          fontSize="56"
          fontWeight="700"
          fill="white"
        >
          for a brighter future
        </text>
      </svg>
    </div>
  );
};

export default Shaping;
