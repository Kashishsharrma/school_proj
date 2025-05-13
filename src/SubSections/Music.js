import React from "react";
import { motion } from "framer-motion";
import { IoMusicalNotesSharp } from "react-icons/io5";

const MusicRoom = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="flex flex-col md:flex-row items-center justify-between border-2 p-6 md:p-10 gap-6 w-full bg-white"
    >
      {/* Left Side: Content */}
      <div className="flex-1 text-center mt-[100px] md:text-left">
        <div className="flex items-center justify-center md:justify-start mb-4">
          <IoMusicalNotesSharp className="w-16 h-16 md:w-20 md:h-20 text-[#8D3C44]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Harmony in Learning: The Music Room
        </h2>
        <p className="text-lg font-medium text-gray-700">
        Where creativity and melodies come alive.

</p>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
        The music room is a vibrant space dedicated to fostering creativity and musical expression. Equipped with a variety of instruments, including keyboards, guitars, and percussion, it provides students the opportunity to explore different genres and styles. Here, learners can engage in individual practice or collaborate in group activities, enhancing their teamwork and communication skills.
        </p>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
        Regular classes and workshops are held, led by experienced instructors, to nurture talent and develop musical skills. The room also hosts performances, allowing students to showcase their progress and build confidence. Overall, the music room is a dynamic environment that inspires a lifelong love for music.
        </p>
      </div>

      {/* Right Side: Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }}
        className="flex-1"
      >
        <img
          src="/images/chemistry-lab.jpg"
          alt="Chemistry Lab"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default MusicRoom;
