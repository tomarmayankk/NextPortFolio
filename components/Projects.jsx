"use client"
import React from "react";
import { PROJECTS } from "../data/General.js";
import {motion } from "motion/react"

const Test = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center min-h-screen px-4 py-10">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">My Projects</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 cursor-pointer transition-colors duration-200"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm mb-4">{project.description}</p>
            
            <div className="flex flex-wrap mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-purple-600 text-white mr-2 mb-2 px-2 py-1 text-sm font-medium rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex space-x-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 text-sm rounded-md transition"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 text-sm rounded-md transition"
                >
                  Live Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
