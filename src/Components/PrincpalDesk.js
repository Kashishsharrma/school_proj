import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";


const PrincipalDesk = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 font-[Lato]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-md transition-transform duration-500 ">
            <img
              src="/images/principal desk.jpg"
              alt="Principal"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Right Text in Card Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-800 font-[Lato]"
        >
          <div className="relative bg-gradient-to-tr from-blue-600 to-[#1e2a50] p-1 rounded-xl shadow-lg">
            {/* Floating Icon (Crown icon as sample) */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-tr from-blue-600 to-[#1e2a50] p-4 rounded-full">
               <FaGraduationCap className="text-white w-6 h-6" />

              </div>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md space-y-6 pt-12">
              {/* Title and Name */}
              <div className="text-left">
                <div className="text-2xl  font-[700] text-gray-900">From the Principal’s Desk</div>
                <div className="text-blue-900 mt-1 font-[700]">Mrs. Vandana Prabhakar</div>
              </div>

              {/* Message */}
              <p className="text-md leading-relaxed  text-black">
               I warmly welcome you to Galaxy Star Public School, where every child is encouraged to dream big, think deeply, and grow into confident, compassionate individuals.</p>

              <p className="text-md leading-relaxed text-black">
               Our dedicated team of educators works tirelessly to create an environment that is safe, inclusive, and inspiring. We focus not only on academic excellence but also on nurturing creativity, critical thinking, and strong values.
               </p>

              <p className="text-md leading-relaxed text-black">
                At Galaxy Star, we see each child as a star in our galaxy: bright, unique, and full of promise. Together with our parents and community, we aim to shape young minds into responsible, resilient individuals ready to lead with integrity and kindness in an ever-evolving world.              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrincipalDesk;
