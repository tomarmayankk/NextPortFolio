"use client";
import {motion } from "motion/react";

function Main() {
  return (
    <div className="pb-4 flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-4xl">
        {/* Name with hover effect */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="flex items-center justify-center mb-4"
        >
          <h1 className="text-4xl md:text-6xl text-gray-800 font-bold text-center">
            MAYANK TOMAR
          </h1>
        </motion.div>

        {/* Title */}
        <div className="flex items-center justify-center mb-4">
          <label className="font-semibold text-xl md:text-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text neon-gradient text-center">
            Full Stack Developer
          </label>
        </div>

        {/* Description */}
        <div className="flex items-center justify-center mt-6">
          <p className="text-gray-600 text-center selection:bg-cyan-900 text-base md:text-lg leading-relaxed">
            "A passionate web developer thrives on crafting dynamic, user-friendly websites that bring ideas to life. With an eye for design and a knack for problem-solving, they blend creativity with technical skills to create seamless digital experiences. Driven by curiosity and a commitment to excellence, they continuously learn and adapt to the latest industry trends and technologies. For them, every project is an opportunity to innovate, pushing the boundaries of what’s possible on the web."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
