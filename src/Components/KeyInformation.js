import React, { useEffect, useRef, useState } from "react";
import { MdOutlineSchool } from "react-icons/md";
import { RiSchoolLine } from "react-icons/ri";
import { LiaSchoolSolid } from "react-icons/lia";
import { PiBookOpenText } from "react-icons/pi";
import { Link } from "react-router-dom";

const KeyInformation = () => {
  const scrollableRef = useRef(null);

  useEffect(() => {
    const syncScroll = (event) => {
      if (scrollableRef.current) {
        scrollableRef.current.scrollBy({
          top: event.deltaY,
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("wheel", syncScroll, { passive: false });

    return () => {
      document.removeEventListener("wheel", syncScroll);
    };
  }, []);

  return (
    <>
      {/* Spacer to prevent overlap with the previous section */}
      <div className="bg-[#8D3C44] h-16 w-full"></div>

      <div className="relative flex bg-[#8D3C44] w-full min-h-screen px-16 py-24">
        {/* Left Side - Sticky Heading */}
        <div className="w-[40%] flex flex-col justify-center h-fit sticky top-1/2 transform -translate-y-1/2">
          <h2 className="text-4xl font-bold text-white mb-6 mt-[180px] leading-tight">
            Key Information About <br /> Galaxy Star Public School
          </h2>
          <Link to="/information">
          <button className="border border-white bg-[#8D3C44] text-white px-6 py-2 rounded-full text-lg font-medium self-start mt-12 hover:bg-[#a05260]">
            Learn More
          </button>
         </ Link>
        </div>

        {/* Right Side - Scrollable Content */}
        <div
          ref={scrollableRef}
          className="w-[60%] max-h-[600px] overflow-y-scroll pr-6 space-y-16 scroll-smooth hide-scrollbar pb-16"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Affiliation */}
          <div className="flex flex-col items-start space-y-4">
            <MdOutlineSchool className="text-white text-3xl" />
            <h3 className="text-3xl text-white font-bold">Affiliation</h3>
            <p className="text-xl text-white leading-relaxed">
              This school is affiliated to the Council for the Indian School Certificate Examinations, New Delhi
              (vide no. PU-158) (CISCE). The University of Cambridge Local Examination Syndicate, with the assistance
              of the Inter-State Board for Anglo-Indian Education, established the Council for the Indian School Certificate
              Examinations in 1958. The school prepares students for the ICSE, from nursery up to class 10.
            </p>
          </div>

          {/* Course of Study */}
          <div className="flex flex-col items-start space-y-4">
            <RiSchoolLine className="text-white text-3xl" />
            <h3 className="text-3xl text-white font-bold">Course of Study</h3>
            <p className="text-xl text-white leading-relaxed">
              Every student is required to take the following subjects: English, Mathematics, Science (Physics, Chemistry &amp;
              Biology), History, Civics, Geography, Physical Education, Computer Science, Socially Useful Productive Work
              and Community Service, and Environmental Education.
            </p>
          </div>

          {/* Aim of the School */}
          <div className="flex flex-col items-start space-y-4">
            <LiaSchoolSolid  className="text-white text-3xl" />
            <h3 className="text-3xl text-white font-bold">Aim of the School</h3>
            <p className="text-xl text-white leading-relaxed">
              The aim of the school is to impart quality education designed for the all-round development of the child. The
              students will be prepared for their duties by a careful cultivation of their minds and hearts. Children will be
              enlightened intellectually, morally, socially, professionally, and spiritually. Special emphasis is given to
              practicing natural virtues like truthfulness, politeness, simplicity, self-discipline, and orderliness.
            </p>
          </div>

          {/* Medium of Instruction */}
          <div className="flex flex-col items-start space-y-4">
            <PiBookOpenText  lBell  className="text-white text-3xl" />
            <h3 className="text-3xl text-white font-bold">Medium of Instruction</h3>
            <p className="text-xl text-white leading-relaxed">
              The medium of instruction is English, and the method of study follows the scheme laid by the Council for the
              Primary, Secondary, and Higher Secondary stages. Special importance is given to English, including spoken
              English, for which a high standard is maintained. Hindi, as the National Language, and Punjabi, as the
              Regional Language, are taught from the Pre-Primary level with priority.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyInformation;
