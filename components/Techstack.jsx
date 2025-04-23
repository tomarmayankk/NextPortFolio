"use client";
import { motion } from "motion/react";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

function Test() {
  const icons = [
    { icon: <GrReactjs />, className: "text-blue-600" },
    { icon: <DiMongodb />, className: "text-green-800" },
    { icon: <RiNextjsFill />, className: "" },
    { icon: <FaNodeJs />, className: "text-yellow-500" },
    { icon: <SiExpress />, className: "" },
    { icon: <RiTailwindCssFill />, className: "text-cyan-500" },
    { icon: <DiPostgresql />, className: "text-cyan-500" },
  ];

  return (
    <div className="text-gray-800 flex flex-col items-center justify-center min-h-screen px-4">
      <div className="mb-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center">My Tech Stack</h1>
      </div>

      <ul className="text-6xl sm:text-7xl md:text-8xl flex flex-wrap items-center justify-center gap-6">
        {icons.map(({ icon, className }, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={className}
          >
            {icon}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
