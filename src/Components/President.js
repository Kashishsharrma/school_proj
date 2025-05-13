import React from "react";
import { motion } from "framer-motion";

const PresidentMessage = () => {
  return (
    <div className="w-full px-8">
      {/* Animated Section Header */}
      <motion.div
        className="w-full flex flex-col items-center mt-12 mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div
          className="w-full flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="bg-[#8D3C44] px-6 py-2 text-white font-bold text-lg rounded-md">
            President's Message
          </div>
          <div className="flex-grow border-t-2 border-[#8D3C44] ml-4"></div>
        </motion.div>
      </motion.div>

      {/* President Message Section */}
      <motion.div
        className="w-full flex flex-col md:flex-row-reverse items-center my-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Image Section */}
        <motion.div
          className="w-full flex justify-center items-center md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
            src="/images/Director.jpg"
            alt="President"
            className="w-3/4 h-full object-cover rounded-2xl shadow-lg "
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {[  
            "It is with great pride and pleasure that I welcome you to Galaxy Star Public School, Sekhwan. Our institution was founded with a dream to provide a nurturing environment where quality education and holistic development go hand in hand.",
            "Our school’s unique infrastructure reflects our commitment to 21st-century learning. From modern classrooms and sports facilities to vibrant spaces for extracurricular activities, we have designed our campus to cater to the needs of the whole child.",
            "At Galaxy Star Public School, we are not just building successful students; we are shaping responsible citizens who will contribute positively to society. I extend my heartfelt thanks to the entire school community—students, teachers, parents, and staff—for their ongoing dedication and support in making our shared vision a reality."
          ].map((text, index) => (
            <motion.p
              key={index}
              className="text-md leading-relaxed font-poppins font-extralight mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.15, duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PresidentMessage;
