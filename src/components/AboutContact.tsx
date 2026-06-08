import React, { useState, useEffect } from 'react';
import { Mail, Send, Calendar, Star, MessageSquareCode, Trash, Sparkles, Briefcase, GraduationCap, Building2, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactMessage } from '../types.ts';
import { experienceData, educationData } from '../data.ts';

export default function AboutContact() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messageText, setMessageText] = useState('');
  const [successNotice, setSuccessNotice] = useState(false);
  const [activeTab, setActiveTab ] = useState<'experience' | 'education'>('experience');

  // Load guestbook messages on boot
  useEffect(() => {
    const saved = localStorage.getItem('varun_guestbook_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        // Fallback default messages
        setMessages(getDefaultMessages());
      }
    } else {
      setMessages(getDefaultMessages());
    }
  }, []);

  const getDefaultMessages = (): ContactMessage[] => [
    {
      id: 'g1',
      name: 'Aditya Sen',
      email: 'aditya@bloomberg.com',
      message: 'Excellent backend optimization skills visible on QKart! Let us schedule a chat soon.',
      timestamp: '2026-06-06T14:22:00Z'
    },
    {
      id: 'g2',
      name: 'Sarah Jenkins',
      email: 'sarah.j@google.com',
      message: 'Great attention to design consistency. Love the interactive sandbox demos!',
      timestamp: '2026-06-05T09:12:00Z'
    }
  ];

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !messageText) return;

    const newMsg: ContactMessage = {
      id: Date.now().toString(),
      name,
      email,
      message: messageText,
      timestamp: new Date().toISOString()
    };

    const updated = [newMsg, ...messages];
    setMessages(updated);
    localStorage.setItem('varun_guestbook_messages', JSON.stringify(updated));

    // Clear fields
    setName('');
    setEmail('');
    setMessageText('');
    setSuccessNotice(true);

    setTimeout(() => {
      setSuccessNotice(false);
    }, 4000);
  };

  const handleDeleteMessage = (id: string) => {
    const updated = messages.filter(msg => msg.id !== id);
    setMessages(updated);
    localStorage.setItem('varun_guestbook_messages', JSON.stringify(updated));
  };

  return (
    <>
      {/* SECTION 1: ABOUT */}
      <section id="about" className="py-20 px-6 bg-[#f8fafc] dark:bg-[#121318] border-t border-gray-100 dark:border-gray-800">
        <div id="about-section" className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            
            {/* LEFT COLUMN: ABOUT & PROFESSIONAL PATH */}
            <div className="md:col-span-5 space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-2">
                About Varun
              </h2>
              <div className="h-1.5 w-12 bg-[#0058be] rounded-full mb-6"></div>
              
              <p className="text-gray-650 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                I am a specialized JavaScript and React software engineer dedicated to building high-performance backend pipelines, responsive user interfaces, and structured product workflows.
              </p>
              <p className="text-gray-650 dark:text-gray-300 text-sm leading-relaxed">
                Applying my credentials in Product Engineering Design (PED) and verified expertise in Data Structures &amp; Algorithms (DSA), I optimize application logic to minimize latency and deliver clean, scalable solutions.
              </p>
            </div>

            {/* RIGHT COLUMN: Timeline Milestones */}
            <div className="md:col-span-7 pl-0 md:pl-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#0058be]" />
                Engineering Milestones (2026)
              </h3>
              
              <div className="relative border-l-2 border-gray-200 dark:border-gray-800 pl-4 space-y-5">
                <div className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#0058be] border border-white"></div>
                  <div className="text-[10px] font-mono text-[#0058be] dark:text-[#adc6ff] font-bold">MAY 2026</div>
                  <h4 className="font-sans font-bold text-xs text-gray-800 dark:text-white">QKart Backend Release</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Implemented robust Node, Express middlewares validating with JOI, resolving complex aggregates.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#0058be] border border-white"></div>
                  <div className="text-[10px] font-mono text-[#0058be] dark:text-[#adc6ff] font-bold">APRIL 2026</div>
                  <h4 className="font-sans font-bold text-xs text-gray-800 dark:text-white">Expense Tracker Integration</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Built fully responsive dashboards tracking budgets dynamically via local React hooks.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#0058be] border border-white"></div>
                  <div className="text-[10px] font-mono text-[#0058be] dark:text-[#adc6ff] font-bold">MARCH 2026</div>
                  <h4 className="font-sans font-bold text-xs text-gray-800 dark:text-white">QTIFY Streaming Engine</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Tuned high-density horizontal sliders carousels and HTML5 music buffer stream state engines.</p>
                </div>

                <div className="relative bg-blue-50/50 dark:bg-blue-950/20 p-2.5 border border-l-0 border-blue-100 dark:border-blue-900 rounded-r-lg">
                  <div className="absolute -left-[21px] top-3 w-2.5 h-2.5 rounded-full bg-green-500 border border-white"></div>
                  <div className="text-[10px] font-mono text-green-600 dark:text-green-400 font-bold uppercase flex items-center gap-0.5">
                    <Star className="w-2.5 h-2.5 fill-current" />
                    Performance Benchmark
                  </div>
                  <h4 className="font-sans font-bold text-xs text-gray-800 dark:text-white mt-0.5">100+ DSA Solutions Solved</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Continuous verification of tree-traversals, array sorting, and dynamic memory layouts optimization.</p>
                </div>
              </div>
            </div>
          </div>

          {/* LOWER ROW: DETAILED EXPERIENCE & EDUCATION EXPANSIVE SECTIONS */}
          <div className="mt-16 border-t border-gray-200/60 dark:border-gray-800/60 pt-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-gray-900 dark:text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#0058be]" />
                  Career &amp; Credentials
                </h3>
                <p className="text-gray-405 dark:text-gray-450 text-[11px] mt-1">Verified work history and qualifications from official resume summary</p>
              </div>
              
              {/* Animated Switcher Tabs Buttons */}
              <div className="flex bg-gray-100 dark:bg-[#191b23] p-1 rounded-xl border border-gray-200/50 dark:border-gray-800/50 self-start md:self-auto shadow-inner">
                <button 
                  onClick={() => setActiveTab('experience')}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                    activeTab === 'experience' 
                      ? 'bg-white dark:bg-[#121318] text-[#0058be] dark:text-[#adc6ff] shadow-sm' 
                      : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  Professional Experience
                </button>
                <button 
                  onClick={() => setActiveTab('education')}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                    activeTab === 'education' 
                      ? 'bg-white dark:bg-[#121318] text-[#0058be] dark:text-[#adc6ff] shadow-sm' 
                      : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  Education History
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'experience' ? (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-8"
                >
                  {experienceData.map((exp) => (
                    <div key={exp.id} className="relative pl-6 md:pl-8 border-l border-gray-200 dark:border-gray-800 last:border-transparent pb-3 group">
                      {/* Interactive Timeline Circle */}
                      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#121318] border-2 border-[#0058be] flex items-center justify-center transition-transform group-hover:scale-110">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0058be]"></div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <h4 className="font-sans font-bold text-base text-gray-900 dark:text-white group-hover:text-[#0058be] transition-colors leading-tight">
                            {exp.role}
                          </h4>
                          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#0058be] dark:text-[#adc6ff] mt-1">
                            <span className="flex items-center gap-1">
                              <Building2 className="w-3.5 h-3.5" />
                              {exp.company}
                            </span>
                            <span className="text-gray-300 dark:text-gray-750 font-normal">|</span>
                            <span className="flex items-center gap-1 text-gray-550 dark:text-gray-400">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 mt-1 md:mt-0 text-[10px] font-mono font-bold shrink-0">
                          <span className="px-2.5 py-1 bg-blue-50 dark:bg-blue-950/40 text-[#0058be] dark:text-[#adc6ff] rounded-full border border-blue-100/50 dark:border-blue-900/40 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                          {exp.duration && (
                            <span className="px-2.5 py-1 bg-gray-150/60 dark:bg-[#191b23] text-gray-500 dark:text-gray-400 rounded-full flex items-center gap-1 border border-gray-200/40 dark:border-gray-800/40">
                              <Clock className="w-3 h-3" />
                              {exp.duration}
                            </span>
                          )}
                        </div>
                      </div>

                      <ul className="space-y-2 mt-4 pl-4 list-disc text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                        {exp.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="hover:text-gray-900 dark:hover:text-white transition-colors pl-0.5">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {educationData.map((edu) => (
                    <div key={edu.id} className="p-6 rounded-2xl bg-white dark:bg-[#191b23] border border-gray-250/70 dark:border-gray-800 shadow-sm hover:border-[#0058be]/40 hover:shadow-md transition-all group flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-4">
                          <div className="p-2.5 rounded-xl bg-blue-55/10 dark:bg-blue-950/40 text-[#0058be] dark:text-[#adc6ff] group-hover:scale-110 duration-200 transition-transform border border-blue-100/30 dark:border-blue-900/20">
                            <GraduationCap className="w-5 h-5" />
                          </div>
                          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-950 text-gray-550 dark:text-gray-400 text-[10px] font-mono font-bold rounded-full border border-gray-200/50 dark:border-gray-800/50">
                            {edu.period}
                          </span>
                        </div>

                        <h4 className="font-sans font-extrabold text-sm text-gray-900 dark:text-white group-hover:text-[#0058be] transition-colors mb-1.5 leading-tight">
                          {edu.degree}
                        </h4>
                        <p className="font-sans font-bold text-xs text-gray-500 dark:text-gray-400 mb-2.5">
                          {edu.school}
                        </p>
                        {edu.specialization && (
                          <p className="text-[10px] uppercase font-mono font-extrabold tracking-widest text-[#0058be] dark:text-[#adc6ff] mb-4 bg-blue-50/50 dark:bg-blue-950/20 px-2 py-0.5 rounded border border-blue-100/30 dark:border-blue-900/20 w-fit">
                            Focus: {edu.specialization}
                          </p>
                        )}
                        {edu.details && (
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed italic bg-gray-50 dark:bg-gray-950 p-3 rounded-xl border border-gray-150/80 dark:border-gray-850/60">
                            "{edu.details}"
                          </p>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 dark:text-gray-400 mt-5 border-t border-gray-100 dark:border-gray-850 pt-3 uppercase tracking-wider">
                        <MapPin className="w-3.5 h-3.5 text-[#0058be] shrink-0" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTACT & GUESTBOOK */}
      <section id="contact" className="py-20 px-6 bg-white dark:bg-[#121318] border-t border-b border-gray-100 dark:border-gray-800">
        <div id="contact-section" className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            
            {/* LEFT COLUMN: CONTACT COPY & CHANNELS */}
            <div className="md:col-span-12 lg:col-span-5 space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-2">
                Contact &amp; Guestbook
              </h2>
              <div className="h-1.5 w-12 bg-[#0058be] rounded-full mb-6"></div>
              
              <p className="text-gray-650 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                Have a proposal, an engineering requirement, or constructive feedback? Feel free to drop a message in the local guestbook stream below.
              </p>
              
              <div className="pt-6 border-t border-gray-100 dark:border-gray-800 space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">Direct channels</span>
                <div className="flex items-center gap-2.5 text-xs text-gray-650 dark:text-gray-300">
                  <Mail className="w-4 h-4 text-[#0058be]" />
                  <span>varunrawatmailbox2507@gmail.com</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: GUESTBOOK FORM & STREAM */}
            <div className="md:col-span-12 lg:col-span-7 space-y-6">
              <form onSubmit={handleSubmitMessage} className="bg-gray-50/50 dark:bg-[#191b23] p-6 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm space-y-4">
                <h4 className="font-sans font-bold text-sm text-gray-800 dark:text-white flex items-center gap-1.5">
                  <MessageSquareCode className="w-4.5 h-4.5 text-[#0058be]" />
                  Leave a Message
                </h4>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Rachel Adams"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs p-2.5 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0058be] focus:border-[#0058be]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Your Email</label>
                    <input
                      type="email"
                      placeholder="e.g. rachel@google.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs p-2.5 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0058be] focus:border-[#0058be]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Message Text</label>
                    <textarea
                      rows={3}
                      placeholder="Leave details of engineering offers, feedback or test greetings..."
                      required
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="w-full text-xs p-2.5 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-802 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0058be] focus:border-[#0058be] resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2 bg-[#0058be] text-white hover:bg-[#2170e4] rounded-lg font-bold text-xs transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit to Guestbook</span>
                </button>

                <AnimatePresence>
                  {successNotice && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 rounded-lg text-xs leading-relaxed border border-green-200 tracking-wide flex items-center gap-1.5"
                    >
                      <Sparkles className="w-4 h-4 shrink-0 animate-bounce" />
                      <span>Your validation ping has been successfully stored to the local Guestbook! View your message below:</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

              {/* Guestbook Entries Stream */}
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-gray-400 block uppercase tracking-wider">Guestbook Stream ({messages.length})</span>
                
                <div className="max-h-56 overflow-y-auto space-y-2.5 pr-1 text-xs">
                  {messages.map((item) => (
                    <div key={item.id} className="p-3.5 bg-white dark:bg-[#191b23] border border-gray-100 dark:border-gray-850 rounded-xl relative hover:border-gray-300 dark:hover:border-gray-750 transition-colors">
                      <div className="flex justify-between items-start mb-1.5">
                        <div>
                          <span className="font-bold text-gray-800 dark:text-white block">{item.name}</span>
                          <span className="text-[10px] text-gray-400 block">{item.email}</span>
                        </div>
                        <button
                          onClick={() => handleDeleteMessage(item.id)}
                          className="p-1 rounded-md text-gray-300 hover:text-[#ba1a1a] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          aria-label="Remove greeting"
                        >
                          <Trash className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-gray-650 dark:text-gray-400 leading-relaxed italic bg-gray-50 dark:bg-gray-905 p-2 rounded-lg text-[11px]">
                        "{item.message}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
