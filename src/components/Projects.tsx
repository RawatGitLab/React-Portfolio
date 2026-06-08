import React, { useState } from 'react';
import { projectsData } from '../data.ts';
import { Project } from '../types.ts';
import { ArrowRight, CheckCircle2, Sliders, ChevronDown, Monitor, Cpu, Search, Sparkles, X, Play, RefreshCw, Send, Github, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeDemo, setActiveDemo] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedProjectTags, setExpandedProjectTags] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);
  
  // Simulation states
  const [expenses, setExpenses] = useState([
    { id: '1', title: 'Coffee meeting', amount: 120, category: 'Food', date: '2026-06-05' },
    { id: '2', title: 'AWS Cloud Hosting', amount: 4800, category: 'Hosting', date: '2026-06-01' },
    { id: '3', title: 'Figma Pro subscription', amount: 1500, category: 'Design', date: '2026-05-28' },
  ]);
  const [newExpTitle, setNewExpTitle] = useState('');
  const [newExpAmount, setNewExpAmount] = useState('');
  const [newExpCat, setNewExpCat] = useState('Food');

  const [isPlayingQtify, setIsPlayingQtify] = useState(false);
  const [currentTrack, setCurrentTrack] = useState('Lost in Echoes - Sunset Beats');
  const [customSearchId, setCustomSearchId] = useState('/api/v1/products?q=nike');
  const [apiResponse, setApiResponse] = useState<any>({
    status: 200,
    success: true,
    data: [
      { id: 'prod_9012', name: 'Nike Zoom running trainers', price: 8999, category: 'Sports', inStock: true },
      { id: 'prod_4421', name: 'Nike Sport active caps', price: 1299, category: 'Accessories', inStock: true }
    ],
    metadata: { query: 'nike', matches: 2, timestamp: '2026-06-07T13:48:11Z' }
  });

  const [isLoadingApi, setIsLoadingApi] = useState(false);

  // New Geospatial & GIS simulator states
  const [roofArea, setRoofArea] = useState(150);
  const [rainfall, setRainfall] = useState(1200);
  const [michiganLayers, setMichiganLayers] = useState<string[]>(['hydro']);
  const [singaporeSearch, setSingaporeSearch] = useState('SLA_6018');
  const [singaporeResult, setSingaporeResult] = useState({
    parcelId: 'SLA_6018',
    heritageBungalow: true,
    area: '1,420 sqm',
    coords: '1.29027° N, 103.85195° E',
    zone: 'Historical Preservation Core v2',
    cadastralStatus: 'VERIFIED CADASTRAL'
  });
  const [c4iPitch, setC4iPitch] = useState(24);
  const [sriLankaDomain, setSriLankaDomain] = useState('Agri');

  const triggerMockApiRequest = () => {
    setIsLoadingApi(true);
    setTimeout(() => {
      setIsLoadingApi(false);
      if (customSearchId.includes('nike') || customSearchId.includes('product')) {
        setApiResponse({
          status: 200,
          success: true,
          data: [
            { id: 'prod_9012', name: 'Nike Zoom running trainers', price: 8999, category: 'Sports', inStock: true },
            { id: 'prod_4421', name: 'Nike Sport active caps', price: 1299, category: 'Accessories', inStock: true }
          ],
          metadata: { query: customSearchId, timestamp: new Date().toISOString() }
        });
      } else {
        setApiResponse({
          status: 404,
          success: false,
          error: 'No matching records in mock QKart schema catalogs.',
          metadata: { query: customSearchId, timestamp: new Date().toISOString() }
        });
      }
    }, 850);
  };

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExpTitle || !newExpAmount) return;
    setExpenses([
      {
        id: Date.now().toString(),
        title: newExpTitle,
        amount: parseFloat(newExpAmount),
        category: newExpCat,
        date: new Date().toISOString().split('T')[0]
      },
      ...expenses
    ]);
    setNewExpTitle('');
    setNewExpAmount('');
  };

  const filteredProjects = projectsData.filter((project) => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="work" className="py-20 px-6 bg-white dark:bg-[#191b23]">
      <div id="projects-section" className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-2">
              My Projects
            </h2>
            <div className="h-1.5 w-12 bg-[#0058be] rounded-full"></div>
          </div>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              setShowAll((prev) => !prev);
            }}
            className="text-[#0058be] hover:text-[#2170e4] font-bold text-sm flex items-center gap-1 group transition-colors"
          >
            <span>{showAll ? 'Show Less' : 'View All'}</span>
            <ArrowRight className={`w-4 h-4 duration-200 transition-transform ${showAll ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
          </a>
        </div>

        {/* Search Input Bar */}
        <div className="relative mb-10 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
          <input
            type="text"
            placeholder="Search projects by tech stack (React, Node, Swiper...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0058be]/20 focus:border-[#0058be] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white text-xs"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Grid of Dynamic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <article
              key={project.id}
              className="project-card bg-white dark:bg-[#121318] border border-gray-200/80 dark:border-gray-800/80 hover:border-[#0058be]/60 hover:shadow-xl rounded-2xl p-6 flex flex-col transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="px-2.5 py-1 bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 fill-green-600/10" />
                  <span className="font-sans font-bold text-[10px] tracking-wider uppercase">Verified</span>
                </div>
                <span className="font-mono text-[11px] text-gray-400 dark:text-gray-500 font-medium">
                  {project.period}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2 tracking-tight group-hover:text-[#0058be] transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                {(expandedProjectTags.includes(project.id) ? project.tags : project.tags.slice(0, 3)).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded text-[11px] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
                {!expandedProjectTags.includes(project.id) && project.tags.length > 3 && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedProjectTags((prev) => [...prev, project.id]);
                    }}
                    className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/10 text-[#0058be] dark:text-[#adc6ff] rounded text-[11px] font-bold cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    +{project.tags.length - 3} more
                  </span>
                )}
                {expandedProjectTags.includes(project.id) && project.tags.length > 3 && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedProjectTags((prev) => prev.filter((id) => id !== project.id));
                    }}
                    className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-[#0058be] dark:text-[#adc6ff] rounded text-[11px] font-bold cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    show less
                  </span>
                )}
              </div>

              {/* Action Trigger Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2 text-center rounded-lg font-bold border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-[0.98] duration-150 transition-all text-xs cursor-pointer"
                >
                  Details
                </button>
                {project.demoUrl && (
                  project.demoUrl.startsWith('http') ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 text-center rounded-lg font-bold bg-[#0058be] text-white hover:bg-[#2170e4] active:scale-[0.98] duration-150 transition-all shadow-sm text-xs cursor-pointer flex items-center justify-center whitespace-nowrap"
                    >
                      View
                    </a>
                  ) : (
                    <button
                      onClick={() => setActiveDemo(project)}
                      className="flex-1 py-2 text-center rounded-lg font-bold bg-[#0058be] text-white hover:bg-[#2170e4] active:scale-[0.98] duration-150 transition-all shadow-sm text-xs cursor-pointer whitespace-nowrap"
                    >
                      View
                    </button>
                  )
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-center rounded-lg font-bold border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-[0.98] duration-150 transition-all text-xs cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </article>
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-12 bg-gray-50 dark:bg-[#121318] rounded-xl border border-dashed border-gray-200 dark:border-gray-800">
              <p className="text-gray-500 text-sm">No Projects matching "{searchQuery}" found.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-3 px-4 py-2 bg-[#0058be] text-white text-xs font-bold rounded-lg hover:bg-opacity-95"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                className="bg-white dark:bg-[#191b23] w-full max-w-2xl rounded-2xl p-6 md:p-8 max-h-[85vh] overflow-y-auto shadow-2xl relative border border-gray-100 dark:border-[#2e3038]"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-6">
                  <span className="font-mono text-xs text-gray-400 font-semibold">{selectedProject.period}</span>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-[#0058be] dark:text-[#adc6ff] font-sans font-bold mt-1">
                    {selectedProject.category}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Overview */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Overview</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {selectedProject.details.overview}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Key Accomplishments</h4>
                    <ul className="space-y-2">
                      {selectedProject.details.keyFeatures.map((feat, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          <span className="text-[#0058be] font-bold select-none">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Block */}
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Technical Architecture</h4>
                    <ul className="space-y-2">
                      {selectedProject.details.technicalArchitecture.map((tech, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-[#0058be] shrink-0 mt-0.5" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Role impact */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Role & Engineering Impact</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic bg-blue-50/20 dark:bg-blue-900/5 p-4 rounded-xl border-l-[3px] border-[#0058be]">
                      "{selectedProject.details.roleAndImpact}"
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Complete Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end gap-3 border-t border-gray-100 dark:border-gray-800 pt-6">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-750 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl text-xs font-bold transition-all text-center cursor-pointer flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    selectedProject.demoUrl.startsWith('http') ? (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setSelectedProject(null)}
                        className="px-5 py-2.5 bg-[#0058be] text-white hover:bg-[#2170e4] rounded-xl text-xs font-bold transition-all shadow-sm text-center cursor-pointer"
                      >
                        View
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          setSelectedProject(null);
                          setActiveDemo(selectedProject);
                        }}
                        className="px-5 py-2.5 bg-[#0058be] text-white hover:bg-[#2170e4] rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
                      >
                        View
                      </button>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Live Interactive Demos Simulation Modal */}
        <AnimatePresence>
          {activeDemo && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-[#191b23] w-full max-w-lg rounded-2xl p-6 shadow-2xl relative border border-gray-100 dark:border-[#2e3038] overflow-hidden"
              >
                <button
                  onClick={() => setActiveDemo(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5 opacity-90" />
                </button>

                <div className="mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#0058be] dark:text-[#adc6ff] font-bold flex items-center gap-1">
                    <Monitor className="w-3 h-3 animate-ping" />
                    Live Sandbox Simulation
                  </span>
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mt-1">
                    {activeDemo.title} Playground
                  </h3>
                </div>

                {/* SIMULATION 1: QKART BACKEND SIMULATOR */}
                {activeDemo.id === 'qkart' && (
                  <div className="space-y-4">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Interact with the simulated QKart REST JSON Endpoint! Change queries or routes to see database records or validation errors:
                    </p>
                    <div className="bg-gray-950 text-emerald-400 font-mono text-[11px] p-3 rounded-lg border border-gray-800 space-y-2">
                      <div className="flex items-center justify-between text-gray-500 border-b border-gray-900 pb-1.5">
                        <span>HTTP CLIENT SHELL v1.02</span>
                        <span className="text-green-500">ONLINE</span>
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <span className="text-yellow-500">GET</span>
                        <input
                          type="text"
                          value={customSearchId}
                          onChange={(e) => setCustomSearchId(e.target.value)}
                          className="bg-transparent border-0 outline-none text-[#adc6ff] w-full focus:ring-0"
                        />
                        <button
                          onClick={triggerMockApiRequest}
                          disabled={isLoadingApi}
                          className="px-2 py-0.5 bg-[#0058be] text-white hover:bg-opacity-90 rounded text-[10px] shrink-0 font-bold flex items-center gap-1"
                        >
                          {isLoadingApi ? <RefreshCw className="w-2.5 h-2.5 animate-spin" /> : <Send className="w-2.5 h-2.5" />}
                          SEND
                        </button>
                      </div>
                    </div>

                    <div className="max-h-48 overflow-y-auto bg-gray-900 rounded-lg p-3 border border-gray-800 font-mono text-[11px] text-gray-300">
                      <div className="text-gray-500 mb-1">=== API SERVER RESPONSE ===</div>
                      {isLoadingApi ? (
                        <div className="flex items-center justify-center py-4 text-gray-500">
                          <RefreshCw className="w-5 h-5 animate-spin mr-2" />
                          Processing aggregate catalog index...
                        </div>
                      ) : (
                        <pre className="whitespace-pre-wrap">{JSON.stringify(apiResponse, null, 2)}</pre>
                      )}
                    </div>
                  </div>
                )}

                {/* SIMULATION 2: EXPENSE TRACKER PLAYGROUND */}
                {activeDemo.id === 'expense' && (
                  <div className="space-y-4">
                    <p className="text-xs text-gray-500">
                      Add a mock expenditure below to view reactive recalculations of totals, simulating real React state managers!
                    </p>

                    <form onSubmit={handleAddExpense} className="grid grid-cols-3 gap-2 bg-gray-50 dark:bg-gray-900 p-3 rounded-xl border border-gray-100 dark:border-gray-800">
                      <input
                        type="text"
                        placeholder="Detail (e.g. Uber)"
                        value={newExpTitle}
                        onChange={(e) => setNewExpTitle(e.target.value)}
                        className="bg-white dark:bg-[#121318] border border-gray-200 dark:border-gray-800 rounded-lg p-1.5 text-xs text-gray-700 dark:text-white"
                        required
                      />
                      <input
                        type="number"
                        placeholder="Amount (₹)"
                        value={newExpAmount}
                        onChange={(e) => setNewExpAmount(e.target.value)}
                        className="bg-white dark:bg-[#121318] border border-gray-200 dark:border-gray-800 rounded-lg p-1.5 text-xs text-gray-700 dark:text-white"
                        required
                      />
                      <button
                        type="submit"
                        className="bg-[#0058be] text-white rounded-lg hover:bg-[#2170e4] font-bold text-xs"
                      >
                        Add Spend
                      </button>
                    </form>

                    <div className="max-h-36 overflow-y-auto space-y-2">
                      {expenses.map((exp) => (
                        <div key={exp.id} className="flex justify-between items-center text-xs p-2.5 bg-white dark:bg-[#121318] border border-gray-100 dark:border-gray-800 rounded-lg shadow-sm">
                          <div>
                            <span className="font-bold text-gray-900 dark:text-white">{exp.title}</span>
                            <span className="ml-2 text-[10px] text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded-full">{exp.category}</span>
                          </div>
                          <span className="font-mono font-bold text-[#0058be]">₹{exp.amount}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 bg-blue-50/50 dark:bg-blue-950/20 text-[#0058be] rounded-lg border border-blue-100 dark:border-blue-900/60 flex justify-between items-center text-xs font-bold">
                      <span>Reactive Net Sum</span>
                      <span className="text-sm font-mono tracking-tight">₹{expenses.reduce((sum, item) => sum + item.amount, 0)}</span>
                    </div>
                  </div>
                )}

                {/* SIMULATION 3: QTIFY MUSIC CAROUSEL RUNNER */}
                {activeDemo.id === 'qtify' && (
                  <div className="space-y-4">
                    <p className="text-xs text-gray-500">
                      Test Varun's custom dynamic audio stream state loops. Hit play to toggle streaming buffer states:
                    </p>

                    <div className="bg-gray-900 text-white rounded-xl p-4 border border-gray-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-tr from-[#0058be] to-teal-400 flex items-center justify-center ${isPlayingQtify ? 'animate-spin duration-3000' : ''}`}>
                          <Play className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-bold truncate max-w-[200px]">{currentTrack}</p>
                          <span className="text-[10px] text-green-400 flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-ping"></span>
                            {isPlayingQtify ? 'Streaming 320kbps MP3 Buffer' : 'Paused'}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setIsPlayingQtify(!isPlayingQtify)}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                          isPlayingQtify ? 'bg-[#ba1a1a] text-white' : 'bg-[#0058be] text-white hover:bg-opacity-95'
                        }`}
                      >
                        {isPlayingQtify ? 'PAUSE' : 'PLAY STREAM'}
                    </button>
                  </div>

                  <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-gray-400 block uppercase">Playlist Tracks</span>
                      {[
                        'Lost in Echoes - Sunset Beats',
                        'Mongoose Haze - NoSQL Melodies',
                        'React 19 Hooks Loop - Synthwave',
                        'Deep Tech Stack - Ambient Focus'
                      ].map((item) => (
                        <div
                          key={item}
                          onClick={() => {
                            setCurrentTrack(item);
                            setIsPlayingQtify(true);
                          }}
                          className={`p-2.5 rounded-lg border text-xs cursor-pointer text-left transition-all ${
                            currentTrack === item
                              ? 'border-[#0058be] bg-[#0058be]/5 dark:bg-[#0058be]/10 text-[#0058be]'
                              : 'border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SIMULATION 4: SPRINGSHED ASSESSMENT */}
                {activeDemo.id === 'springshed' && (
                  <div className="space-y-4 animate-fade-in">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Interact with the springshed discharge monitor. Select traditional sources to query elevation, seasonal flow rate, and metadata.
                    </p>
                    
                    {/* Simulated Map Canvas */}
                    <div className="aspect-video w-full rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden flex items-center justify-center font-mono text-xs text-slate-400">
                      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]"></div>
                      
                      {/* Compass/Grid overlay */}
                      <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-black/40 px-2 py-0.5 rounded text-[9px] uppercase tracking-wider text-teal-400 border border-teal-500/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                        GPS: 29.5829° N, 79.6455° E
                      </div>

                      {/* Map Points Pin */}
                      <div className="absolute top-1/3 left-1/4 group text-center">
                        <div className="w-3.5 h-3.5 rounded-full bg-blue-500/30 border-2 border-blue-400 flex items-center justify-center animate-bounce">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-[8px] text-white bg-slate-950/80 px-1 rounded block mt-0.5 whitespace-nowrap">Naula Dunagiri</span>
                      </div>

                      <div className="absolute bottom-1/3 right-1/3 group text-center">
                        <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/30 border-2 border-emerald-400 flex items-center justify-center animate-bounce [animation-delay:0.3s]">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        </div>
                        <span className="text-[8px] text-white bg-slate-950/80 px-1 rounded block mt-0.5 whitespace-nowrap">Spring Dwarahat</span>
                      </div>

                      <div className="text-center p-4">
                        <span className="text-[10px] text-teal-450 uppercase tracking-widest font-bold">ArcGIS REST Base Map Server</span>
                        <div className="text-[11px] text-slate-500 mt-1">Rendered Layers: Survey_Points_WASH_v1</div>
                      </div>
                    </div>

                    {/* Interactive Selector or table */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-gray-400 block uppercase">Water Reservoirs Survey Log</span>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/60 rounded-xl text-xs">
                          <p className="font-bold text-gray-800 dark:text-gray-255 font-sans">Naula Dunagiri (Spring-01)</p>
                          <div className="flex justify-between text-gray-500 mt-1">
                            <span>Discharge:</span>
                            <span className="font-mono font-bold text-blue-600 dark:text-blue-450">0.455 L/s</span>
                          </div>
                          <div className="flex justify-between text-gray-500">
                            <span>Elevation:</span>
                            <span className="font-mono">1,620m</span>
                          </div>
                        </div>
                        <div className="p-3 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 rounded-xl text-xs">
                          <p className="font-bold text-gray-800 dark:text-gray-255 font-sans">Spring Dwarahat (Spring-02)</p>
                          <div className="flex justify-between text-gray-500 mt-1">
                            <span>Discharge:</span>
                            <span className="font-mono font-bold text-emerald-600 dark:text-emerald-450">0.016 L/s</span>
                          </div>
                          <div className="flex justify-between text-gray-500">
                            <span>Elevation:</span>
                            <span className="font-mono">1,710m</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SIMULATION 5: WATER RESOURCE PORTAL */}
                {activeDemo.id === 'water-mgmt' && (
                  <div className="space-y-4 animate-fade-in">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      "Blue Schools" Micro-calculator. Simulate rainwater harvest volumes matching schools curricula based on area & rainfall intensity parameters:
                    </p>
                    
                    {/* Interactive Slider Inputs for school calc */}
                    <div className="space-y-3 bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-150 dark:border-gray-800">
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1.5 text-gray-700 dark:text-gray-300">
                          <span>School Roof Area</span>
                          <span className="font-mono text-[#0058be]">{roofArea} sq. meters</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="500"
                          step="10"
                          value={roofArea}
                          onChange={(e) => setRoofArea(Number(e.target.value))}
                          className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0058be]"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1.5 text-gray-700 dark:text-gray-300">
                          <span>Annual Rainfall (Uttarakhand Average)</span>
                          <span className="font-mono text-[#0058be]">{rainfall} mm/year</span>
                        </div>
                        <input
                          type="range"
                          min="500"
                          max="2000"
                          step="50"
                          value={rainfall}
                          onChange={(e) => setRainfall(Number(e.target.value))}
                          className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0058be]"
                        />
                      </div>
                    </div>

                    <div className="p-3 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 rounded-xl flex justify-between items-center">
                      <div>
                        <p className="text-xs font-bold text-[#0058be] dark:text-[#adc6ff]">Est. Yearly Rainwater Harvest</p>
                        <p className="text-[10px] text-gray-400">Assuming 85% runoff conservation coefficient</p>
                      </div>
                      <span className="text-lg font-mono font-bold text-[#0058be] dark:text-[#adc6ff]">
                        {Math.round(roofArea * rainfall * 0.85).toLocaleString()} Litres
                      </span>
                    </div>

                    <div className="text-[11px] font-mono p-3 bg-gray-95 w-full bg-slate-950 text-emerald-400 rounded-lg border border-gray-800 flex justify-between items-center leading-none">
                      <span>WASH Impact metrics:</span>
                      <span className="text-white text-right">55,240+ Citizens Fed</span>
                    </div>
                  </div>
                )}

                {/* SIMULATION 6: MICHIGAN LAND GIS PORTAL */}
                {activeDemo.id === 'michigan-spatial' && (
                  <div className="space-y-4 animate-fade-in">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Query the Michigan EGLE Government Catalog. Toggle dataset categories to simulate spatial dataset retrieval schemas:
                    </p>

                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'hydro', label: 'Hydrography Layers', count: 184 },
                        { id: 'roads', label: 'Civil Structures', count: 421 },
                        { id: 'env', label: 'Water Quality (EGLE)', count: 215 },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            if (michiganLayers.includes(item.id)) {
                              setMichiganLayers(michiganLayers.filter((id) => id !== item.id));
                            } else {
                              setMichiganLayers([...michiganLayers, item.id]);
                            }
                          }}
                          className={`p-2.5 rounded-lg border text-left transition-all ${
                            michiganLayers.includes(item.id)
                              ? 'border-[#0058be] bg-[#0058be]/5 dark:bg-[#0058be]/10 text-[#0058be]'
                              : 'border-gray-150 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-850'
                          }`}
                        >
                          <p className="text-[11px] font-bold leading-tight truncate">{item.label}</p>
                          <span className="text-[9px] text-gray-400 mt-1 block font-mono">{item.count} assets</span>
                        </button>
                      ))}
                    </div>

                    <div className="bg-gray-950 text-emerald-400 font-mono text-[11px] p-3 rounded-lg border border-gray-800 max-h-36 overflow-y-auto w-full">
                      <div className="text-gray-500 mb-1">OGC WMS/WFS ENDPOINT REQUEST STATUS:</div>
                      {michiganLayers.length === 0 ? (
                        <span className="text-gray-550">[Select layers above to fetch secure geographic JSON schemas]</span>
                      ) : (
                        <div className="space-y-1 text-[10px]">
                          <span className="text-blue-400">GET /api/v2/gis/catalog?types={michiganLayers.join(',')}</span>
                          <p className="text-yellow-400">HTTP/1.1 200 OK (32ms Response)</p>
                          <p className="text-gray-300">"spatialLayersLoaded": {michiganLayers.length},</p>
                          <p className="text-gray-300">"boundingBox": [-86.64, 41.76, -82.41, 48.30]</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* SIMULATION 7: SINGAPORE GEOPORTAL */}
                {activeDemo.id === 'singapore-gis' && (
                  <div className="space-y-4 animate-fade-in">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Search SLA’s heritage land parcel catalog. Type a parcel coordinate or ID (e.g. "SLA_6018" or "SLA_1102") to fetch boundary properties:
                    </p>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={singaporeSearch}
                        onChange={(e) => setSingaporeSearch(e.target.value)}
                        placeholder="e.g. SLA_6018"
                        className="flex-1 bg-white dark:bg-[#121318] border border-gray-200 dark:border-gray-800 rounded-lg p-2 text-xs text-gray-700 dark:text-white"
                      />
                      <button
                        onClick={() => {
                          if (singaporeSearch.toLowerCase() === 'sla_6018' || singaporeSearch.toLowerCase() === '6018') {
                            setSingaporeResult({
                              parcelId: 'SLA_6018',
                              heritageBungalow: true,
                              area: '1,420 sqm',
                              coords: '1.29027° N, 103.85195° E',
                              zone: 'Historical Preservation Core v2',
                              cadastralStatus: 'VERIFIED CADASTRAL'
                            });
                          } else {
                            setSingaporeResult({
                              parcelId: singaporeSearch.toUpperCase() || 'SLA_GENERIC',
                              heritageBungalow: false,
                              area: '2,600 sqm',
                              coords: '1.3521° N, 103.8198° E',
                              zone: 'Commercial General / SLA Boundary',
                              cadastralStatus: 'STABLE GEOMETRY'
                            });
                          }
                        }}
                        className="bg-[#0058be] text-white hover:bg-[#2170e4] text-xs font-bold px-3 py-2 rounded-lg"
                      >
                        Lookup
                      </button>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-850 rounded-xl p-4 space-y-2 text-xs">
                      <div className="flex justify-between border-b border-gray-200/40 dark:border-gray-800 pb-1.5 font-bold">
                        <span>Parcel Record:</span>
                        <span className="text-[#0058be] font-mono">{singaporeResult.parcelId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Class:</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{singaporeResult.heritageBungalow ? '🏠 Heritage Bungalow Registry' : '🏢 SLA Public Boundary Record'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Mapped Area:</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{singaporeResult.area}</span>
                      </div>
                      <div className="flex justify-between font-mono text-[11px]">
                        <span className="text-gray-400 font-sans">Cadastral Boundary Map:</span>
                        <span className="text-[#0058be]">{singaporeResult.coords}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Status:</span>
                        <span className="text-green-500 font-bold uppercase tracking-wider text-[9px]">{singaporeResult.cadastralStatus}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* SIMULATION 8: C4I DEFENSE TACTICAL RADAR SCREEN */}
                {activeDemo.id === 'c4i-system' && (
                  <div className="space-y-4 animate-fade-in">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Akash Missile Air Defense Telemetry Scanner. Click below to simulate target elevation acquisition loops over TATRA 8x8 shelter nodes:
                    </p>

                    {/* Animated Circular Radar Screen */}
                    <div className="relative aspect-square max-w-[180px] mx-auto rounded-full border-4 border-[#0058be]/40 bg-black overflow-hidden flex items-center justify-center">
                      {/* Radar sweep lines */}
                      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_50%,rgba(0,88,190,0.45)_100%)] rounded-full animate-spin duration-4000 pointer-events-none"></div>
                      
                      {/* Grid rings */}
                      <div className="absolute w-[80%] h-[80%] rounded-full border border-blue-500/10 pointer-events-none"></div>
                      <div className="absolute w-[50%] h-[50%] rounded-full border border-blue-500/10 pointer-events-none"></div>
                      <div className="absolute w-[20%] h-[20%] rounded-full border border-blue-500/10 pointer-events-none"></div>
                      
                      {/* Simulated Missile launcher coordinate targets */}
                      <div className="absolute top-1/4 right-1/3 text-center">
                        <span className="inline-block w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></span>
                        <div className="text-[7px] text-red-400 font-mono scale-95 uppercase tracking-tighter">TG_64_AKASH</div>
                      </div>

                      <div className="absolute bottom-1/3 left-1/4 text-center">
                        <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                        <div className="text-[7px] text-yellow-400 font-mono scale-95 uppercase tracking-tighter">TATRA_NODE_04</div>
                      </div>

                      <div className="text-center font-mono text-[9px] text-[#adc6ff] z-10 bg-black/60 px-2 py-0.5 rounded border border-blue-500/30">
                        <p className="animate-pulse">AZIMUTH: 184.22°</p>
                        <p className="text-gray-400 mt-0.5">ELEV_PITCH: {c4iPitch}°</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setC4iPitch(Math.floor(Math.random() * 45) + 5);
                        }}
                        className="w-full py-2 bg-[#0058be] text-white hover:bg-[#2170e4] active:scale-95 text-xs font-bold rounded-lg transition-transform flex items-center justify-center gap-2"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        Reposition Antenna Azimuth
                      </button>
                    </div>

                    <div className="bg-slate-950 p-2.5 rounded-lg font-mono text-[10px] text-gray-500 border border-slate-900 flex justify-between uppercase">
                      <span>RADAR SCAN STATUS:</span>
                      <span className="text-green-500 font-bold">ONLINE (₹980 Cr AKASH)</span>
                    </div>
                  </div>
                )}

                {/* SIMULATION 9: SRI LANKA SDI */}
                {activeDemo.id === 'sri-lanka-sdi' && (
                  <div className="space-y-4 animate-fade-in">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Select a thematic OGC-compliant map module to fetch layered records from 27 Sri Lankan government departments:
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'Agri', label: '🌾 Agriculture Crop Map', layers: 42 },
                        { id: 'Disaster', label: '🌋 Disaster Flood Zones', layers: 18 },
                        { id: 'Urban', label: '🏢 Urban Zoning Plan', layers: 35 },
                        { id: 'Tourism', label: '🏖️ Coastal Tourism Hubs', layers: 26 },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSriLankaDomain(item.id)}
                          className={`p-2.5 rounded-xl border text-left transition-all ${
                            sriLankaDomain === item.id
                              ? 'border-[#0058be] bg-[#0058be]/5 dark:bg-[#0058be]/10 text-[#0058be]'
                              : 'border-gray-150 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          <p className="font-bold text-xs leading-tight">{item.label}</p>
                          <span className="text-[9px] text-gray-400 mt-1 block font-medium">{item.layers} mapping vectors</span>
                        </button>
                      ))}
                    </div>

                    <div className="bg-gray-950 p-3 rounded-xl font-mono text-[10px] text-emerald-400 border border-gray-800 space-y-1">
                      <div className="text-gray-500">NSDI CONNECTIVITY AGGREGATOR STATUS:</div>
                      <div className="text-gray-300">"thematicDomain": "{sriLankaDomain}"</div>
                      <div className="text-gray-300">"queryStatus": "200 SUCCESS - Multi-Agency Map Rendered"</div>
                      <div className="text-gray-300">"loadedNationalLayers": 130 shapefile layers</div>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex justify-end gap-3 border-t border-gray-150 dark:border-gray-800 pt-4">
                  <button
                    onClick={() => setActiveDemo(null)}
                    className="px-4 py-2 bg-[#0058be] text-white hover:bg-[#2170e4] rounded-xl text-xs font-bold transition-all"
                  >
                    Exit Simulator
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
