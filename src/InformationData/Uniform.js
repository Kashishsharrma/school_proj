import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaUserAlt, FaUserGraduate } from "react-icons/fa";

// Sample image URLs — update with your real image paths
const uniformData = [
  {
    title: "Boys - Weekdays (Summer)",
    image: "/assets/uniform/boys-weekday-summer.jpg",
    items: [
      "Pink shirt and  Black Trouser",
      "Black tie and belt",
      "Black shoes with white socks",
    ],
  },
  {
    title: "Boys - Wed/Sat (Summer)",
    image: "/assets/uniform/boys-sat-summer.jpg",
    items: [
       "House polo T-shirt and sweatpants(color-coded)",
      "black shoes and woolen socks",
    ],
  },
  {
    title: "Boys - Weekdays (Winter)",
    image: "/assets/uniform/boys-weekday-winter.jpg",
    items: [
       "Full-sleeve pink shirt and back trousers",
      "Black tie and belt",
      "Grey sweater and black blazer",
      "Woolen socks and black shoes",
    ],
  },
  {
    title: "Boys - Wed/Sat (Winter)",
    image: "/assets/uniform/boys-sat-winter.jpg",
    items: [
      "House jacket and sweatpants(color-coded)",
      "black shoes and woolen socks",
    ],
  },
  {
    title: "Girls - Weekdays (Summer)",
    image: "/assets/uniform/girls-weekday-summer.jpg",
    items: [
      "Pink shirt and  Black Tunic/trouser",
      "Black tie and belt",
      "Black shoes with white socks",
    ],
  },
  {
    title: "Girls - Wed/Sat (Summer)",
    image: "/assets/uniform/girls-sat-summer.jpg",
    items: [
      "House polo T-shirt and sweatpants(color-coded)",
      "black shoes and woolen socks",
    ],
  },
  {
    title: "Girls - Weekdays (Winter)",
    image: "/assets/uniform/girls-weekday-winter.jpg",
    items: [
      "Full-sleeve pink shirt and back trousers",
      "Black tie and belt",
      "Grey sweater and black blazer",
      "Woolen socks and black shoes",
    ],
  },
  {
    title: "Girls - Wed/Sat (Winter)",
    image: "/assets/uniform/girls-sat-winter.jpg",
    items: [
      "House jacket and sweatpants(color-coded)",
      "black shoes and woolen socks",
    ],
  },
];

const Uniform = () => {
  return (
    <section className="relative py-16 px-6 md:px-20 font-[Lato] bg-white min-h-screen">
      {/* Back Link */}
      <Link
        to="/information"
        className="text-lg text-black font-[700] inline-block mb-8"
      >
        &lt; Back
      </Link>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-800 mb-10">School Uniform</h2>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {uniformData.map((uniform, index) => (
          <div
            key={index}
            className="bg-[#f9fafb] rounded-2xl shadow hover:shadow-lg transition overflow-hidden border border-gray-200"
          >
            {/* Image */}
            <img
              src={uniform.image}
              alt={uniform.title}
              className="w-full h-44 object-cover"
            />

            {/* Card Body */}
            <div className="p-5">
              <div className="flex items-center gap-3 mb-4 text-lg font-semibold text-[#1e2a50]">
                {uniform.title.includes("Girls") ? (
                  <FaUserGraduate className="text-pink-600" />
                ) : (
                  <FaUserAlt className="text-blue-600" />
                )}
                {uniform.title}
              </div>
              <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
                {uniform.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Link
        to="/information/books"
        className="flex items-center justify-center fixed left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-2 sm:p-3 rounded-full shadow-lg transition z-50"
      >
        <FaArrowLeft className="text-lg sm:text-xl" />
      </Link>

      <Link
        to="/information/transport"
        className="flex items-center justify-center fixed right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-2 sm:p-3 rounded-full shadow-lg transition z-50"
      >
        <FaArrowRight className="text-lg sm:text-xl" />
      </Link>
    </section>
  );
};

export default Uniform;
