import React from "react";
import { motion } from "framer-motion";
import { GiPlantSeed } from "react-icons/gi";

const BiologyLab = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="flex flex-col md:flex-row items-start p-6 md:p-10 gap-6 w-full bg-white mt-[100px] md:mt-0"
    >
      {/* Left Side: Content */}
      <div className="flex-1 mt-[80px] text-left">
        <div className="flex items-center mb-4">
          <GiPlantSeed className="w-16 h-16 md:w-20 md:h-20 text-[#8D3C44]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Biology Lab</h2>
        <p className="text-lg font-medium text-gray-700">
          Hands-on experiments and scientific exploration
        </p>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          The Biology Lab at Galaxy Star Public School offers a dynamic environment for students to explore the wonders of living organisms. Equipped with modern tools and specimens, the lab encourages hands-on learning and scientific inquiry.
        </p>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          Students can conduct experiments to understand cellular processes, genetics, and ecological interactions. Guided by experienced instructors, they gain practical knowledge and develop critical thinking skills. The lab is designed to foster curiosity and a deeper appreciation for the life sciences.
        </p>

        {/* Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-6"
        >
          <h3 className="text-2xl font-semibold mb-3 text-[#8D3C44]">Lab Highlights:</h3>
          <ul className="list-disc ml-6 text-lg text-gray-700">
            <li>Modern microscopes for cellular studies</li>
            <li>Preserved specimens for anatomical exploration</li>
            <li>DNA extraction & genetics experiments</li>
            <li>Eco-system models and plant samples</li>
            <li>Guidance from expert biology instructors</li>
          </ul>
        </motion.div>
      </div>

      {/* Right Side: Image + Did You Know Fact (Aligned) */}
      <div className="flex-1 mt-[180px] flex flex-col items-center md:items-end">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
          className="w-full max-w-md md:max-w-lg lg:max-w-xl"
        >
          <img
            src="/images/biology-lab.jpg"
            alt="Biology Lab"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </motion.div>

        {/* Fun Fact Box (Aligned to Image) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-6 w-full max-w-md md:max-w-lg lg:max-w-xl p-4 bg-[#fce8e9] border-l-4 border-[#8D3C44] rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-[#8D3C44]">Did You Know?</h3>
          <p className="text-lg text-gray-700 mt-2">
            The human body contains about <strong>37.2 trillion cells</strong> – and your biology lab experiments help uncover their mysteries!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BiologyLab;
