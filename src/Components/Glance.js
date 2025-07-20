import React from "react";
import { motion } from "framer-motion";

const images = [
  {
    src: "/images/GALLERY WEB 6.jpg",
    heading: "Welcome Every Star",
    text: "Our Reception Area - Where every journey begins.",
  },
  {
    src: "/images/GALLERY WEB 4.jpg",
    heading: "United",
    text: "Our daily Assembly - Fostering Community and Spirit.",
  },
  {
    src: "/images/GALLERY WEB 3.jpg",
    heading: "Nurturing Growth",
    text: "Celebrating our connection to Nature and Harvest.",
  },
  {
    src: "/images/GALLERY WEB 2.jpg",
    heading: "Joy in Motion",
    text: "Embracing childhood and the freedom of play and fun.",
  },
  {
    src: "/images/GALLERY WEB 5.jpg",
    heading: "Heart of our School",
    text: "A cozy entry sitting area for friends and visitors - Where connection begins.",
  },
  {
    src: "/images/GALLERY WEB 1.jpg",
    heading: "Colorful Visions",
    text: "Celebrating and Showcasing the Creativity of our young learners.",
  },
];

const Glance = () => {
  return (
    <>
      <div className="bg-[#1e2a50] w-full px-4 sm:px-6 lg:px-16 py-12 sm:py-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[500] text-white mb-10 sm:mb-14 text-left">
          A Glance
        </h2>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={item.src}
                alt={item.heading}
                className="w-full h-[240px] sm:h-[260px] md:h-[280px] lg:h-[300px] object-cover rounded-xl shadow-lg"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mt-4 font-[500] text-white">
                {item.heading}
              </h3>
              <p className="text-base sm:text-lg text-white">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* YouTube Video Section without background color */}
      <div className="w-full bg-white py-12 flex justify-center px-4">
        <div className="w-full max-w-3xl aspect-video rounded-xl shadow-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/7Rgi1S6mcug?si=VPhp7ZgeC4DDDEeP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Glance;
