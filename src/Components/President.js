import React from "react";
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";

const DirectorDesk = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 font-[Lato]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-md transition-transform duration-500">
            <img
              src="/images/Director.jpg"
              alt="Director"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Text in Card Box */}
        <div className="text-gray-800 font-[Lato]">
          <div className="relative bg-gradient-to-tr from-blue-600 to-[#1e2a50] p-1 rounded-xl shadow-lg">
            {/* Floating Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-tr from-blue-600 to-[#1e2a50] p-4 rounded-full">
                <FaUniversity className="text-white w-6 h-6" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md space-y-6 pt-12">
              {/* Title and Name */}
              <div className="text-left">
                <div className="text-2xl font-extrabold font-[700] text-black">
                  President’s Message
                </div>
                <div className="text-blue-900 mt-1 font-[700] font-bold">
                  Mr. GK Prabhakar
                </div>
              </div>

              {/* Message */}
              <p className="text-md leading-relaxed text-gray-900">
                It is with great pride that I welcome you to Galaxy Star Public
                School, Sekhwan. Our school was founded to create a nurturing
                space where academic excellence and overall development are
                prioritized.
              </p>

              <p className="text-md leading-relaxed text-gray-900">
                Our modern infrastructure reflects our focus on 21st-century
                education. From well-equipped classrooms to vibrant areas for
                extracurricular activities, our campus supports the holistic
                growth of every student.
              </p>

              <p className="text-md leading-relaxed text-gray-900">
                At Galaxy Star Public School, we strive to shape not just
                successful learners but responsible citizens. I extend my
                sincere thanks to our students, teachers, parents, and staff
                for their continued support in realizing our collective vision.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DirectorDesk;
