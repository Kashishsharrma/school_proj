import React from "react";
import { BookOpenText, School, ScrollText, Languages } from "lucide-react";

const sections = [
  {
    title: "Affiliation",
    icon: <School className="text-[#1e2a50] group-hover:scale-110 transition-transform duration-300" size={28} />,
    content: `This school is affiliated to the Council for the Indian School Certificate Examinations, New Delhi (vide no. PU-158) (CISCE). The University of Cambridge Local Examination Syndicate, with the assistance of the Inter-State Board for Anglo-Indian Education, established the Council for the Indian School Certificate Examinations in 1958. The school prepares students for the ICSE, from nursery up to class 10.`,
  },
  {
    title: "Course of Study",
    icon: <BookOpenText className="text-[#1e2a50] group-hover:scale-110 transition-transform duration-300" size={28} />,
    content: `Every student is required to take the following subjects: English, Mathematics, Science (Physics, Chemistry & Biology), History, Civics, Geography, Physical Education, Computer Science, Socially Useful Productive Work and Community Service, and Environmental Education.`,
  },
  {
    title: "Aim of the School",
    icon: <ScrollText className="text-[#1e2a50] group-hover:scale-110 transition-transform duration-300" size={28} />,
    content: `The aim of the school is to impart quality education designed for the all-round development of the child. The students will be prepared for their duties by a careful cultivation of their minds and hearts. Children will be enlightened intellectually, morally, socially, professionally, and spiritually. Special emphasis is given to practicing natural virtues like truthfulness, politeness, simplicity, self-discipline, and orderliness.`,
  },
  {
    title: "Medium of Instruction",
    icon: <Languages className="text-[#1e2a50] group-hover:scale-110 transition-transform duration-300" size={28} />,
    content: `The medium of instruction is English, and the method of study follows the scheme laid by the Council for the Primary, Secondary, and Higher Secondary stages. Special importance is given to English, including spoken English, for which a high standard is maintained. Hindi, as the National Language, and Punjabi, as the Regional Language, are taught from the Pre-Primary level with priority.`,
  },
];

export default function KeyInformation() {
  return (
    <div className="w-full px-4 py-16 bg-white">
      <h2 className="text-4xl font-bold text-center text-[#1e2a50] mb-12" style={{ fontFamily: "Poppins" }}>
        Key Information
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <div
            key={index}
            className="group p-6 bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 hover:border-[#A33354]/40 backdrop-blur-md"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2 bg-[#9aa1ee] rounded-full shadow-sm">
                {section.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#1e2a50] transition-colors duration-300">
                {section.title}
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
