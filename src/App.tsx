import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import AboutContact from './components/AboutContact.tsx';
import Footer from './components/Footer.tsx';
import MobileNav from './components/MobileNav.tsx';
import { Moon, Sun, Monitor, ShieldCheck, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('varun_portfolio_theme');
    if (saved) {
      return saved === 'dark';
    }
    return document.documentElement.classList.contains('dark');
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor element scroll to show scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync dark theme with document class list
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('varun_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('varun_portfolio_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${darkMode ? 'dark bg-[#121318] text-[#eff0fa]' : 'bg-[#f9f9ff] text-[#191b23]'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="flex-1 pb-16 md:pb-0">
        {/* Entrance motion container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <Skills />
          <Projects />
          <AboutContact />
        </motion.div>
      </main>

      <Footer />
      <MobileNav />

      {/* Elegant scroll back to top indicator */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-20 md:bottom-8 right-6 z-40 p-3 bg-[#0058be] text-white hover:bg-[#2170e4] active:scale-90 rounded-full shadow-lg transition-transform focus:outline-none"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
