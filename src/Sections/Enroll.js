import React from "react";
import { motion } from "framer-motion";

const Enroll = () => {
  return (
    <div className="w-full min-h-screen mt-[80px] flex flex-col lg:flex-row items-start justify-center px-8 py-10 gap-12">
      {/* Left Column - Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="lg:w-1/2 w-full"
      >
        <h1 className="text-5xl font-bold mb-6">How do I apply?</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Galaxy Star, we pride ourselves on our state-of-the-art facilities, including a 
          well-stocked library, a vibrant music room, and modern science and computer labs. 
          These resources enhance our educational programs and provide students with unique 
          opportunities to explore their interests.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          What sets us apart is our commitment to holistic education, where we not only focus 
          on academics but also encourage arts, sports, and community engagement. We believe 
          that education should be a journey filled with discovery and joy, allowing students 
          to thrive in all aspects of life.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Join us as we embark on this exciting journey of learning and growth. Together, we 
          can help every student reach for the stars!
        </p>
      </motion.div>

      {/* Right Column - Form Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="lg:w-1/3 w-full bg-gray-100 p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Want to Become a part of Galaxy Star Public School?
        </h2>
        <form className="flex flex-col space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Full name *</label>
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#1e2a50]"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Email address</label>
            <input
              type="email"
              placeholder="contact@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#1e2a50]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Phone number *</label>
            <input
              type="tel"
              placeholder="Enter your Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#1e2a50]"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full py-3 bg-[#1e2a50] text-white text-lg font-semibold rounded-3xl transition duration-300 hover:bg-[#233f9a]">
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Enroll;
