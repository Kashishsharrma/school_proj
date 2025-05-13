import React from "react";
import { motion } from "framer-motion";
import { PiHandsPrayingFill} from "react-icons/pi";

const PrayerRoom = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-6 w-full bg-white"
    >
      {/* Left Side: Content */}
      <div className="flex-1 text-center mt-[100px] md:text-left">
        <div className="flex items-center justify-center md:justify-start mb-4">
          <PiHandsPrayingFill className="w-16 h-16 md:w-20 md:h-20 text-[#8D3C44]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Prayer Room: Sanctuary of Peace and Reflection
        </h2>
        <p className="text-lg font-medium text-gray-700">
        A peaceful space for meditation and prayer.

</p>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
        The prayer room offers a tranquil space dedicated to meditation and spiritual practices, providing a peaceful environment for students and staff. It is designed to promote inner peace, reflection, and mindfulness, away from the hustle of daily activities.
        </p>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
        With its calming ambiance and comfortable seating, the room invites individuals to take a moment for themselves. Whether used for quiet prayer, meditation, or contemplation, it serves as a sanctuary for personal growth and well-being. The space is open to everyone, fostering a culture of respect and spiritual harmony.
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

export default PrayerRoom;
