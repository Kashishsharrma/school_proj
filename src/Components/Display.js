import React from "react";

const Display = () => {
    return (
      <div className="relative text-white text-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/galaxy star wallpaper.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 flex flex-col ml-12 text-left justify-center h-full space-y-4">
          <h1 className="text-5xl font-poppins  font-bold">Welcome To</h1>
          <h2 className="text-6xl font-poppins font-bold ">Galaxy Star Public School</h2>
          <h3 className="text-xl font-poppins font-bold">Where excellence meets opportunity</h3>
        </div>
      </div>
    );
  };

export default Display;