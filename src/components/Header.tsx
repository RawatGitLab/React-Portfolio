import React, { useState, useEffect } from 'react';
import { Network, Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'work', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#191b23]/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800'
          : 'bg-white/40 dark:bg-[#191b23]/40 backdrop-blur-md'
      }`}
    >
      <nav className="flex justify-between items-center px-6 py-4 max-w-4xl mx-auto">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group hover:scale-[1.02] duration-150 transition-transform">
          <div className="p-1 rounded-lg bg-[#0058be]/10 text-[#0058be]">
            <Network className="w-5.5 h-5.5 animate-pulse" />
          </div>
          <span className="font-display font-black text-lg md:text-xl text-[#0058be] dark:text-[#adc6ff] tracking-tight">
            Varun Rawat
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-sans font-semibold text-xs uppercase tracking-wider transition-colors duration-200 relative py-1 ${
                activeSection === item.id
                  ? 'text-[#0058be] dark:text-[#adc6ff]'
                  : 'text-gray-550 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0058be] dark:bg-[#adc6ff]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}

          {/* Theme Switcher Button */}
          <button
            onClick={toggleDarkMode}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 text-gray-500 hover:text-[#0058be] dark:text-gray-400 dark:hover:text-[#adc6ff] transition-all duration-150 focus:outline-none"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-500" />
            ) : (
              <Moon className="w-4 h-4 text-[#0058be]" />
            )}
          </button>
        </div>

        {/* Mobile controls container */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Theme Switcher Button */}
          <button
            onClick={toggleDarkMode}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 text-gray-500 hover:text-[#0058be] dark:text-gray-400 dark:hover:text-[#adc6ff] transition-all duration-150 focus:outline-none"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-500" />
            ) : (
              <Moon className="w-4 h-4 text-[#0058be]" />
            )}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1.5 text-gray-500 hover:text-[#0058be] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>
        </div>
      </nav>

      {/* Mobile nav dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 dark:bg-[#191b23]/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-sans font-semibold text-base py-2 border-b border-gray-50 dark:border-gray-850 last:border-0 ${
                    activeSection === item.id
                      ? 'text-[#0058be] dark:text-[#adc6ff]'
                      : 'text-gray-500 hover:text-[#0058be] dark:text-gray-400'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
