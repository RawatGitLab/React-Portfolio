import React, { useState, useEffect } from 'react';
import { Home, FolderGit, User, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function MobileNav() {
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveItem(sectionId);
            break;
          }
        }
      }

      // Special contact selection
      const contactEl = document.getElementById('contact-section');
      if (contactEl) {
        const contactTop = contactEl.offsetTop;
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) {
          setActiveItem('contact');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'work', label: 'Work', icon: FolderGit, href: '#work' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact-section' },
  ];

  const handleNavClick = (href: string, id: string) => {
    setActiveItem(id);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/95 dark:bg-[#191b23]/95 backdrop-blur-md border-t border-gray-200/80 dark:border-gray-800 py-2.5 shadow-lg">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href, item.id)}
              className="relative py-1 px-3 flex flex-col items-center justify-center transition-transform active:scale-90"
            >
              {isActive && (
                <motion.div
                  layoutId="activeBottomIndicator"
                  className="absolute inset-0 bg-[#0058be]/10 rounded-xl"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
              <Icon
                className={`w-5 h-5 transition-colors ${
                  isActive ? 'text-[#0058be]' : 'text-gray-400'
                }`}
              />
              <span
                className={`text-[9px] font-bold uppercase tracking-wider mt-0.5 transition-colors ${
                  isActive ? 'text-[#0058be]' : 'text-gray-400'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
