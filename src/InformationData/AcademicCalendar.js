import React, { useState } from "react";
import CalendarLib from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Predefined dates
const holidays = [
  { date: "2025-01-26", name: "Republic Day" },
  { date: "2025-03-17", name: "Holi" },
  { date: "2025-04-14", name: "Ambedkar Jayanti" },
  { date: "2025-08-15", name: "Independence Day" },
  { date: "2025-10-02", name: "Gandhi Jayanti" },
  { date: "2025-11-04", name: "Diwali" },
  { date: "2025-12-25", name: "Christmas" },
];

const exams = [
  { date: "2025-03-01", name: "Mid-Term Exam" },
  { date: "2025-09-01", name: "Final Term Exam" },
];

const monthlyTests = [
  "2025-01-10", "2025-02-10", "2025-03-10", "2025-04-10", "2025-05-10",
  "2025-06-10", "2025-07-10", "2025-08-10", "2025-09-10", "2025-10-10",
  "2025-11-10", "2025-12-10",
];

const AcademicCalendar = () => {
  const [date, setDate] = useState(new Date());

  const getTileContent = ({ date, view }) => {
    if (view !== "month") return null;

    const isoDate = date.toISOString().split("T")[0];
    const holiday = holidays.find((h) => h.date === isoDate);
    const exam = exams.find((e) => e.date === isoDate);
    const isMonthlyTest = monthlyTests.includes(isoDate);

    if (holiday) {
      return <div className="text-red-500 text-xs font-[500]">{holiday.name}</div>;
    }
    if (exam) {
      return <div className="text-blue-500 text-xs font-[500]">{exam.name}</div>;
    }
    if (isMonthlyTest) {
      return <div className="text-green-600 text-xs font-[500]">Monthly Test</div>;
    }

    return null;
  };

  return (
    <section className="relative min-h-screen ml-[34px] bg-white px-6 py-16 sm:px-12 font-[Lato] font-[500]">
      {/* Back Link */}
      <Link
        to="/information"
        className="text-lg text-black font-[700] inline-block mb-8"
      >
        &lt; Back
      </Link>

      {/* Navigation Arrows */}
      <Link
        to="/information/transport"
        className="flex items-center justify-center fixed left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-2 sm:p-3 rounded-full shadow-lg transition z-50"
      >
        <FaArrowLeft className="text-lg sm:text-xl" />
      </Link>
      <Link
        to="/information/campus-info"
        className="flex items-center justify-center fixed right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-2 sm:p-3 rounded-full shadow-lg transition z-50"
      >
        <FaArrowRight className="text-lg sm:text-xl" />
      </Link>

      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1e2a50] mb-6 text-left">
        Academic Calendar 2025
      </h1>

      {/* Grid Layout: Left - Calendar, Right - Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Calendar + Legend */}
        <div>
          {/* Calendar */}
          <div className="flex justify-start">
            <CalendarLib
              onChange={setDate}
              value={date}
              tileContent={getTileContent}
              showNeighboringMonth={false} // Hides other months' dates
            />
          </div>

          {/* Legend */}
          <div className="mt-8 text-left text-sm flex gap-6 flex-wrap">
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>Holiday
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Exam
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 bg-green-600 rounded-full mr-2"></span>Monthly Test
            </div>
          </div>
        </div>

       {/* Right: Timeline */}
<div className="mt-2 lg:mt-0">
  <h2 className="text-2xl font-semibold mb-6 text-[#1e2a50]">Exam Timeline</h2>
  <div className="relative pl-6 border-l-2 border-blue-600 space-y-8">
    {[...exams, { date: "monthly", name: "Monthly Tests", isMonthly: true }].map((exam, index) => (
      <div key={index} className="relative group">
        {/* Timeline dot */}
        <div className="absolute -left-[7px] top-2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md group-hover:scale-110 transition" />

        {/* Timeline Card */}
        <div className="bg-white shadow-md border border-blue-100 rounded-lg p-4 pl-6 transition hover:shadow-lg">
          <h3 className="text-[#1e2a50] font-semibold text-base">
            {exam.name}
          </h3>
          <p className="text-sm text-gray-700 mt-1">
            {exam.isMonthly
              ? "Occurs on the 10th of every month"
              : new Date(exam.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
          </p>
        </div>
      </div>
    ))}
 

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicCalendar;
