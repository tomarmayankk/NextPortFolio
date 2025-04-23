function Navbar() {
  return (
    <div className="fixed top-0 bg-white/40 backdrop-blur-md w-full h-20 shadow-sm p-3 flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-2xl font-extrabold text-gray-800"><a href="#main">MT</a></span>
      </div>

      <div className="flex items-center justify-center">
        <ul className="flex items-center justify-between p-5 gap-4">
          {/* Projects - hide on small screens */}
          <li className="hidden md:block text-gray-900 border border-amber-400 rounded-3xl p-2 shadow-[0_0_5px_rgba(251,191,36,0.8)] transition duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,1)]">
            <a href="#projects">Projects</a>
          </li>

          {/* Resume - always visible */}
          <li className="text-gray-900 border border-amber-400 rounded-3xl p-2 shadow-[0_0_5px_rgba(251,191,36,0.8)] transition duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,1)]">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </li>

          {/* Contact - hide on small screens */}
          <li className="hidden md:block text-gray-900 border border-amber-400 rounded-3xl p-2 shadow-[0_0_5px_rgba(251,191,36,0.8)] transition duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,1)]">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
