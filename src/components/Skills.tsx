import React, { useState } from 'react';
import { skillsData } from '../data.ts';
import { Skill } from '../types.ts';
import SkillIcon from './SkillIcon.tsx';
import { Sparkles, Star, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'tooling' | 'database'>('all');

  // Filter skills based on chosen category
  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tooling', label: 'Tools & DevOps' }
  ] as const;

  return (
    <section id="skills-section" className="bg-[#f8fafc] dark:bg-[#121318] py-20 px-6 border-t border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-2">
            Skills Acquired
          </h2>
          <div className="h-1.5 w-12 bg-[#0058be] rounded-full"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === category.id
                  ? 'bg-[#0058be] text-white shadow-sm'
                  : 'bg-white dark:bg-[#191b23] text-gray-500 hover:text-gray-900 dark:hover:text-white border border-gray-100 dark:border-gray-800'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedSkill(skill)}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-20 h-20 bg-blue-50/50 dark:bg-blue-950/10 hover:bg-blue-100/40 dark:hover:bg-blue-900/20 flex items-center justify-center rounded-2xl mb-3 transition-colors duration-300 border border-gray-100/50 dark:border-gray-800/40 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 h-4 w-4 bg-[#0058be] text-white flex items-center justify-center text-[8px] rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-2 h-2" />
                  </div>
                  <SkillIcon name={skill.iconName} className="text-[#0058be] dark:text-[#adc6ff] transition-transform duration-300 group-hover:scale-110" size={32} />
                </div>
                <span className="font-sans font-bold text-[11px] md:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider group-hover:text-[#0058be] transition-colors text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Skill Detail Interactive Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-[#191b23] w-full max-w-md rounded-2xl p-6 shadow-2xl relative border border-gray-100 dark:border-gray-800"
              >
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-100/40 dark:bg-blue-900/20 flex items-center justify-center rounded-xl">
                    <SkillIcon name={selectedSkill.iconName} className="text-[#0058be] dark:text-[#adc6ff]" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">
                      {selectedSkill.name}
                    </h3>
                    <div className="flex gap-2 mt-1">
                      <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-950/40 text-[#0058be] dark:text-[#adc6ff] rounded text-[10px] uppercase font-bold tracking-wider">
                        {selectedSkill.category}
                      </span>
                      <span className="px-2 py-0.5 bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400 rounded text-[10px] uppercase font-bold tracking-wider flex items-center gap-0.5">
                        <Star className="w-2.5 h-2.5 fill-current" />
                        {selectedSkill.level}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">Expertise Overviews</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {selectedSkill.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-50 dark:border-gray-800">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Verified Attributes</h4>
                    <ul className="space-y-1.5">
                      <li className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                        <span>Acquired & Verified by Varun Rawat</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                        <span>Applied in core Production Projects</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Confirm call to action */}
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="px-4 py-2 bg-[#0058be] text-white hover:bg-[#2170e4] rounded-lg text-xs font-bold transition-all shadow-sm"
                  >
                    Close Verification details
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
