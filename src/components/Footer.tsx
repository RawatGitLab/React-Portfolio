import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 bg-[#ecedf7]/30 dark:bg-[#121318]/50 border-t border-gray-200/40 dark:border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-4xl mx-auto gap-6 text-sm text-[#424754] dark:text-[#bfc8ce]">
        
        {/* Left section: Info & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-display font-extrabold text-lg text-[#0058be] dark:text-[#adc6ff]">
            Varun Rawat
          </span>
          <p className="font-sans text-xs text-gray-400 dark:text-gray-500 text-center md:text-left">
            © {currentYear} Varun Rawat. All rights reserved.
          </p>
        </div>

        {/* Right section: Anchors matching mockups */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold">
          <a
            href="#work"
            className="hover:text-[#0058be] transition-colors hover:underline underline-offset-4"
          >
            Case Studies
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0058be] transition-colors hover:underline underline-offset-4 flex items-center gap-0.5"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href="https://www.linkedin.com/in/vr2507/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0058be] font-bold hover:underline underline-offset-4 flex items-center gap-0.5"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
