import React from "react";
import { motion } from "framer-motion";

const PrincipalDesk = () => {
  return (
    <div className="w-full px-8">
      {/* Animated Section Header */}
<motion.div
  className="w-full flex flex-col items-center mt-12 mb-8"
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }} 
>
  <motion.div
    className="flex items-center w-full max-w-4xl" 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }} 
  >
    {/* Left Line */}
    <div className="flex-grow border-t-2 border-[#8D3C44]"></div>

    {/* Box with Heading */}
    <div className="  text-[#8D3C44] font-sans text-3xl text-center mx-6">
      Meet the Institution's Leaders
    </div>

    {/* Right Line */}
    <div className="flex-grow border-t-2 border-[#8D3C44]"></div>
  </motion.div>
</motion.div>


      {/* Principal Desk Section */}
      <motion.div
        className="w-full flex flex-col md:flex-row items-center my-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Image Section */}
        <motion.div
          className="w-full flex justify-center items-center md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }} 
        >
          <img
            src="/images/principal desk.jpg"
            alt="Principal"
            className="w-3/4 h-full object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Animated Subheading */}
          <motion.div
            className="w-full flex items-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} 
          >
            <div className="bg-[#8D3C44] px-6 py-2 text-white font-bold text-lg rounded-md">
              From the Desk of Principal
            </div>
            <div className="w-full border-t-2 border-[#8D3C44] ml-4"></div>
          </motion.div>

          {/* Animated Paragraphs */}
          {[
            "Galaxy Star Public School was established with a vision to provide quality education to the community. At GSPS, we are dedicated to creating a system that makes learning engaging and enjoyable, alleviating the stress commonly associated with education.",
            "Our school is designed with the future in mind, offering infrastructure that supports 21st-century learning pedagogies. This ensures that students are not only absorbing knowledge but also developing the ability to apply it in meaningful ways.",
            "At Galaxy Star, our focus is on learning that empowers children to act independently and progressively by equipping them with a curriculum that prepares students for the challenges of the modern world.",
            "To support this mission, Galaxy Star Public School offers a unique infrastructure that integrates academics, sports, and extracurricular activities, providing students with a holistic learning experience that nurtures both their minds and bodies.",
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

export default PrincipalDesk;
