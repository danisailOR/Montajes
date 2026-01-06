
import React from 'react';
import { Shield, Target, Users, Settings, ArrowRight, CheckCircle2, Factory, Ruler, HardHat, Zap, Search } from 'lucide-react';

const About: React.FC = () => {
  const workflowSteps = [
    {
      step: "01",
      title: "Technical Consultation",
      icon: <Search className="w-6 h-6" />,
      desc: "Initial analysis of fluid chemistry, pressure requirements, and environmental constraints."
    },
    {
      step: "02",
      title: "Engineering & Modeling",
      icon: <Ruler className="w-6 h-6" />,
      desc: "Hydraulic calculation and 3D modeling to ensure optimal flow and structural integrity."
    },
    {
      step: "03",
      title: "Precision Fabrication",
      icon: <Factory className="w-6 h-6" />,
      desc: "Manufacturing high-quality PRFV components using filament winding and molding techniques."
    },
    {
      step: "04",
      title: "On-site Installation",
      icon: <HardHat className="w-6 h-6" />,
      desc: "Expert mobilization for assembly, bonding, and structural mounting by certified teams."
    },
    {
      step: "05",
      title: "Hydro-testing & QA",
      icon: <Shield className="w-6 h-6" />,
      desc: "Comprehensive testing and final inspection to guarantee zero-leak performance."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight text-white tracking-tighter">
              Legacy of <br/><span className="text-blue-500">Excellence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed mb-12">
              Established as a technical reference in Morocco, Montajes PRFV Maroc is more than a contractor. We are industrial partners specializing in composite resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="glass-panel p-10 rounded-2xl border-white/5 group hover:border-blue-500/30 transition-all">
              <Target className="w-12 h-12 text-blue-500 mb-8" />
              <h3 className="text-2xl font-bold text-white mb-4">Strategic Mission</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                To replace legacy metallic systems with advanced PRFV solutions that eliminate maintenance cycles and maximize operational uptime for heavy industry.
              </p>
            </div>
            <div className="glass-panel p-10 rounded-2xl border-white/5 group hover:border-blue-500/30 transition-all">
              <Shield className="w-12 h-12 text-blue-500 mb-8" />
              <h3 className="text-2xl font-bold text-white mb-4">Quality Governance</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Every lamination and bond we perform adheres strictly to ISO 14692 and ASME NM.2 standards, ensuring absolute safety in high-pressure environments.
              </p>
            </div>
            <div className="glass-panel p-10 rounded-2xl border-white/5 group hover:border-blue-500/30 transition-all">
              <Users className="w-12 h-12 text-blue-500 mb-8" />
              <h3 className="text-2xl font-bold text-white mb-4">EPC Synergy</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                We integrate seamlessly with major engineering firms and EPC contractors, delivering on-time technical results within complex project schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Workflow */}
      <section className="py-32 bg-slate-950/40 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-600/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-4">Project Execution</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white">The Engineering Workflow</h3>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
              {workflowSteps.map((s, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 glass-panel rounded-2xl border-white/10 flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 relative z-10">
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-[10px] font-mono-technical font-bold text-slate-400">
                      {s.step}
                    </div>
                    {s.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{s.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-[200px]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Insights */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-[3rem] overflow-hidden border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-20 border-b lg:border-b-0 lg:border-r border-white/5">
                <h3 className="text-3xl font-black text-white mb-8">Why Morocco, Why Now?</h3>
                <p className="text-slate-400 leading-relaxed font-light mb-8">
                  As Morocco transforms into a global industrial hub for desalination, green hydrogen, and phosphates, the demand for high-durability infrastructure has never been higher. 
                </p>
                <div className="space-y-4">
                  {[
                    "Strategic location for OCP and mining projects",
                    "Rapid growth in seawater desalination infrastructure",
                    "Industrial decarbonization and lifecycle optimization",
                    "Local expertise with international quality rigor"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mr-4 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-600/5 p-12 md:p-20 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Technological Edge</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-light mb-10">
                  Our fabrication methodology minimizes "Material Waste" and maximizes "Hydraulic Efficiency". We utilize advanced simulation software to predict material behavior under extreme chemical stress before a single pipe is fabricated.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                  <div>
                    <p className="text-3xl font-black text-white">100%</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Traceability</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white">50yr+</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Design Life</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Callout */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-panel p-16 rounded-[2.5rem] border-white/10 max-w-4xl mx-auto relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight relative z-10">Local Roots. Global Rigor.</h2>
            <p className="text-lg text-slate-400 mb-12 font-light max-w-2xl mx-auto relative z-10">
              While our operations are centered in Tanger, our engineering standards and project management protocols are built on decades of international EPC experience.
            </p>
            <div className="flex justify-center relative z-10">
              <button className="px-10 py-4 bg-white text-slate-900 font-black rounded-xl uppercase tracking-widest text-[11px] hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 shadow-2xl flex items-center">
                Download Technical Brochure <ArrowRight className="ml-3 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
