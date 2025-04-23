"use client";
import { motion } from "motion/react";

import { DiMongodb, DiPostgresql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

function Test() {
  return (
    <div className="text-gray-800 flex flex-col items-center justify-center h-screen">
      <div>
        <h1 className="text-6xl font-bold mb-20">My Tech Stack</h1>
      </div>
      <div>
        <ul className="text-gray-800 text-8xl flex items-center justify-center gap-6">
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="text-blue-600"
          >
            <GrReactjs />
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="text-green-800"
          >
            <DiMongodb />
          </motion.li>

          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <RiNextjsFill />
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="text-yellow-500"
          >
            <FaNodeJs />
          </motion.li>

          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <SiExpress />
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="text-cyan-500"
          >
            <RiTailwindCssFill />
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="text-cyan-500"
          >
            <DiPostgresql />
          </motion.li>
        </ul>
      </div>
    </div>
  );
}

export default Test;
