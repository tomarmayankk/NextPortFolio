import React from 'react';
import Link from 'next/link';
import { Email, Github, Linkedin } from '@deemlol/next-icons';
import { SiHashnode } from 'react-icons/si';

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white px-6 md:px-24 py-8 flex flex-col md:flex-row items-center justify-between shadow-[0_-2px_4px_rgba(0,0,0,0.1)]">
      
      <div className="mb-4 md:mb-0">
        <ul className="space-y-2">
          <li className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <Github />
            <Link href="https://github.com/" target="_blank">GitHub</Link>
          </li>
          <li className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <SiHashnode />
            <Link href="https://hashnode.com/" target="_blank">Hashnode</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <Email />
            <Link href="mailto:youremail@example.com">Email</Link>
          </li>
          <li className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <Linkedin />
            <Link href="https://linkedin.com/" target="_blank">LinkedIn</Link>
          </li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;
