import React, { useRef } from "react";
import { BookOpenText, School, ScrollText, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// Section data with individual icon and background colors
const sections = [
  {
    title: "Affiliation",
    iconColor: "text-pink-800",
    bgColor: "bg-pink-200",
    icon: School,
    content:
      "This school is affiliated to the Council for the Indian School Certificate Examinations, New Delhi (vide no. PU-158) (CISCE). The University of Cambridge Local Examination Syndicate, with the assistance of the Inter-State Board for Anglo-Indian Education, established the Council for the Indian School Certificate Examinations in 1958. The school prepares students for the ICSE, from nursery up to class 10.",
  },
  {
    title: "Aim of the School",
    iconColor: "text-green-800",
    bgColor: "bg-green-200",
    icon: ScrollText,
    content:
      "The aim of the school is to impart quality education designed for the all-round development of the child. The students will be prepared for their duties by a careful cultivation of their minds and hearts. Children will be enlightened intellectually, morally, socially, professionally, and spiritually. Special emphasis is given to practicing natural virtues like truthfulness, politeness, simplicity, self-discipline, and orderliness.",
  },
  {
    title: "Course of Study",
    iconColor: "text-blue-900",
    bgColor: "bg-blue-200",
    icon: BookOpenText,
    content:
      "Every student is required to take the following subjects: English, Mathematics, Science (Physics, Chemistry & Biology), History, Civics, Geography, Physical Education, Computer Science, Socially Useful Productive Work and Community Service, and Environmental Education.",
  },
  {
    title: "Medium of Instruction",
    iconColor: "text-red-800",
    bgColor: "bg-red-200",
    icon: Languages,
    content:
      "The medium of instruction is English, and the method of study follows the scheme laid by the Council for the Primary, Secondary, and Higher Secondary stages. Special importance is given to English, including spoken English, for which a high standard is maintained. Hindi, as the National Language, and Punjabi, as the Regional Language, are taught from the Pre-Primary level with priority.",
  },
];

export default function KeyInformation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full px-4 sm:px-8 md:px-16 py-12 sm:py-16 bg-white"
    >
      {/* Header and Button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 sm:mb-12 gap-4">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-[900] text-[#1e2a50]"
          style={{ fontFamily: "Poppins" }}
        >
          Key Information
        </h2>
        <Link
          to="/information"
          className="text-[#1e2a50] border-[3px] border-[#1e2a50] rounded-full px-4 py-2 text-sm font-[700] sm:text-base font-medium transition duration-[20ms] hover:bg-[#1e2a50] hover:text-white"
        >
          Learn More →
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <div
              key={index}
              className="group p-5 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 border border-transparent "
            >
              <div className="flex items-start gap-4 mb-3 sm:mb-4">
                <div className={`p-2 rounded-full shadow-sm ${section.bgColor}`}>
                  <Icon
                    className={`${section.iconColor} group-hover:scale-110 transition-transform duration-[20ms]`}
                    size={28}
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-black font-[500] group-hover:text-[#1e2a50] transition-colors duration-[20ms]">
                  {section.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-black leading-relaxed">{section.content}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
