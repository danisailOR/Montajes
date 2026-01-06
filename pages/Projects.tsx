
import React, { useState } from 'react';
import { MOCK_PROJECTS } from '../constants';
import { IndustrySector } from '../types';
import { Filter, Search, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<IndustrySector | 'All'>('All');

  const filteredProjects = filter === 'All' 
    ? MOCK_PROJECTS 
    : MOCK_PROJECTS.filter(p => p.industry === filter);

  return (
    <div className="pt-20">
      <section className="bg-slate-950/80 border-b border-white/5 py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">Project <span className="text-blue-500">Portfolio.</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl font-light">
            A technical record of our achievements in high-pressure installations and specialized composite fabrication.
          </p>
        </div>
      </section>

      <section className="py-12 border-b border-white/5 bg-slate-950/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setFilter('All')}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all border ${
                filter === 'All' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white/5 text-slate-400 border-white/10 hover:border-blue-500/50'
              }`}
            >
              All Projects
            </button>
            {Object.values(IndustrySector).map((sector) => (
              <button 
                key={sector}
                onClick={() => setFilter(sector)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all border ${
                  filter === sector ? 'bg-blue-600 text-white border-blue-600' : 'bg-white/5 text-slate-400 border-white/10 hover:border-blue-500/50'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search reference..." 
              className="w-full pl-12 pr-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all"
            />
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-40">
            {filteredProjects.map((project) => (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                <div className="relative group">
                  <div className="aspect-[16/10] overflow-hidden rounded-[2.5rem] glass-panel border-white/10 shadow-3xl">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100" 
                    />
                  </div>
                  <div className="absolute top-8 left-8 glass-panel text-white px-6 py-3 text-[10px] font-mono-technical font-bold uppercase tracking-[0.2em] rounded-full backdrop-blur-xl border-white/20">
                    Ref: MAR-{project.id}
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-3 text-blue-500 font-bold uppercase text-[10px] tracking-[0.3em] mb-6">
                    <span>{project.industry}</span>
                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full"></span>
                    <span>{project.category}</span>
                  </div>
                  <h2 className="text-4xl font-black text-white mb-8 tracking-tight leading-tight">{project.title}</h2>
                  <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                    {project.description}
                  </p>
                  
                  <div className="glass-panel p-10 rounded-3xl border-white/10">
                    <h3 className="text-[10px] font-mono-technical uppercase tracking-[0.3em] text-slate-500 mb-8 flex items-center">
                      <ArrowUpRight className="w-4 h-4 mr-3 text-blue-500" />
                      Technical Compliance Record
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">
                      {project.technicalDetails.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm font-semibold text-slate-300 group">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-4 shrink-0 transition-transform group-hover:scale-150"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-8 tracking-tight">Need technical dossier?</h2>
          <p className="text-slate-400 text-lg font-light mb-12">We provide detailed EPC compliance documentation and structural references upon qualified engineering request.</p>
          <button className="px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl uppercase tracking-[0.2em] text-[11px] shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all transform hover:scale-105">
            Download Case Study Library
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
