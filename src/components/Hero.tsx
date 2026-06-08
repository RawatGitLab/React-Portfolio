import React from 'react';
import { Phone, Mail, Award, FolderGit, Binary } from 'lucide-react';
import { motion } from 'motion/react';
import { statsData } from '../data';
import profileImage from '../assets/images/profile_picture_1780842224697.png';

export default function Hero() {

  const getStatIcon = (id: string) => {
    switch (id) {
      case 'skills':
        return <Award className="w-5 h-5 text-indigo-200" />;
      case 'projects':
        return <FolderGit className="w-5 h-5 text-indigo-200" />;
      case 'dsa':
        return <Binary className="w-5 h-5 text-indigo-200" />;
      default:
        return <Award className="w-5 h-5 text-indigo-200" />;
    }
  };

  const handleStatClick = (id: string) => {
    let targetId = '';
    if (id === 'skills') targetId = 'skills-section';
    else if (id === 'projects') targetId = 'projects-section';
    else if (id === 'dsa') targetId = 'about-section';

    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 px-6 max-w-4xl mx-auto flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mb-8 group cursor-pointer"
      >
        <div className="absolute inset-0 bg-[#0058be]/10 rounded-full scale-110 blur-2xl group-hover:bg-[#0058be]/20 duration-500 transition-all"></div>
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#0058be] to-teal-400 opacity-40 blur-sm group-hover:opacity-75 transition-opacity duration-300"></div>
        <img
          src={profileImage}
          alt="Er. Varun Rawat"
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white dark:border-[#191b23] shadow-xl hover:scale-[1.02] transition-transform duration-300"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-sans font-bold text-xs uppercase tracking-widest text-[#545f73] dark:text-[#bfc8ce] mb-2"
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="font-display font-extrabold text-3xl md:text-5xl text-[#0f172a] dark:text-white tracking-tight text-center mb-6"
      >
        Er. Varun Rawat <span className="text-[#0058be] dark:text-[#adc6ff] text-2xl md:text-3xl block md:inline md:ml-2 font-semibold font-display">[MERN + AI]</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="font-sans text-center text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed mb-8 font-medium"
      >
        JavaScript &amp; React Specialist | Wireframe &amp; UI/UX Designer | Product Engineering Design (PED) Practitioner | DSA | AI-Driven Solution
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 mb-12 w-full max-w-md justify-center"
      >
        <a
          href="tel:+918273753398"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0058be] text-white hover:bg-[#2170e4] active:scale-[0.98] transition-all rounded-xl font-bold shadow-md hover:shadow-lg text-sm md:text-base border border-transparent"
        >
          <Phone className="w-5 h-5" />
          <span>+91-8273753398</span>
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-[#191b23] text-[#0058be] dark:text-[#adc6ff] hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 active:scale-[0.98] transition-all rounded-xl font-bold shadow-sm hover:shadow-md text-sm md:text-base"
        >
          <Mail className="w-5 h-5" />
          <span>Email Me</span>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="w-full bg-[#0058be] text-white rounded-[2rem] p-8 md:p-10 shadow-2xl flex flex-col md:flex-row justify-around items-stretch gap-8 text-center"
      >
        {statsData.map((stat, idx) => (
          <React.Fragment key={stat.id}>
            <div 
              onClick={() => handleStatClick(stat.id)}
              className="flex-1 flex flex-col items-center justify-center group cursor-pointer hover:opacity-95 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-2 p-1.5 rounded-full bg-white/10 group-hover:scale-110 duration-200 transition-transform">
                {getStatIcon(stat.id)}
              </div>
              <span className="font-display font-extrabold text-4xl md:text-5xl mb-2 block tracking-tight">
                {stat.value}
              </span>
              <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#d8e3fb] block">
                {stat.label}
              </span>
            </div>
            {idx < statsData.length - 1 && (
              <div key={`divider-${stat.id}`} className="hidden md:block w-px bg-white/15 self-stretch my-2"></div>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
}