import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Shaping = () => {
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const newBalls = [...Array(30)].map(() => ({
      id: Math.random(),
      size: Math.random() * 15 + 20, // Between 20px and 35px
      opacity: Math.random() * 0.5 + 0.5, // Between 0.5 and 1
      x: Math.random() * window.innerWidth, // Random X position
      y: Math.random() * 600, // Random Y position
      duration: Math.random() * 4 + 2, // Random duration for animation
    }));
    setBalls(newBalls);
  }, []);

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Motion values for pupils
  const pupilX = useMotionValue(0);
  const pupilY = useMotionValue(0);

  // Limit pupil movement
  const xRange = useTransform(pupilX, [-100, 100], [-10, 10]);
  const yRange = useTransform(pupilY, [-100, 100], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    pupilX.set(mouseX - centerX);
    pupilY.set(mouseY - centerY);
  }, [mouseX, mouseY, pupilX, pupilY]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-white mt-16">
      {/* Floating Balls with Glow & Depth Effect */}
      {balls.map((ball) => (
        <motion.div
          key={ball.id}
          className="absolute bg-[#A33354] rounded-full shadow-xl"
          style={{
            width: `${ball.size}px`,
            height: `${ball.size}px`,
            opacity: ball.opacity,
            filter: "blur(2px)",
            left: ball.x,
            top: ball.y,
          }}
          animate={{ y: "-50px" }}
          transition={{
            duration: ball.duration,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      {/* Text Section */}
      <div className="relative w-full h-96 flex items-center justify-center z-10">
        <h2 className="text-5xl font-bold text-black text-center absolute" style={{ fontFamily: "Poppins" }}>
          Shaping Bright Minds for a Brighter Future
        </h2>
      </div>

      {/* Moving Eyes */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-12 z-10">
        {[1, 2].map((eye) => (
          <div key={eye} className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center border border-gray-300">
            <motion.div
              className="w-12 h-12 bg-black rounded-full"
              style={{ x: xRange, y: yRange }}
            />
          </div>
        ))}
      </div>

      {/* Curved Background */}
      <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 230">
        <path fill="#8D3C44" d="M0,400 C320,100 1120,100 1440,400 V400 H0 Z" />
      </svg>
    </div>
  );
};

export default Shaping;
