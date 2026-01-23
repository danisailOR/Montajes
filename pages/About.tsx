
import React from 'react';
import { Shield, Target, Users, Settings, ArrowRight, CheckCircle2, Factory, Ruler, HardHat, Zap, Search, Droplets, Coins, Weight, Activity } from 'lucide-react';

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

  const materialAdvantages = [
    {
      title: "Immunity to Corrosion",
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      compare: "Vs. Steel/Carbon Steel",
      desc: "Unlike metallic systems, PRFV is non-electrolytic. It requires no cathodic protection or anti-corrosion coatings, even in high-salinity seawater or aggressive pH environments.",
      points: ["Zero oxidation risk", "No pitting in chemical contact", "Marine-grade performance"]
    },
    {
      title: "Weight & Installation",
      icon: <Weight className="w-8 h-8 text-blue-500" />,
      compare: "Vs. Traditional Metals",
      desc: "At roughly 1/4 the weight of carbon steel, PRFV significantly reduces the cost of support structures, specialized transport, and on-site heavy machinery requirements.",
      points: ["Lower structural loading", "Faster assembly cycles", "Manual handling capabilities"]
    },
    {
      title: "Hydraulic Efficiency",
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      compare: "Vs. PVC & Concrete",
      desc: "With a Hazen-Williams 'C' coefficient of 150, the ultra-smooth internal liner reduces friction loss, allowing for smaller pump sizes and lower lifetime energy consumption.",
      points: ["Lower pumping costs", "Zero scale accumulation", "Reduced pressure drops"]
    },
    {
      title: "Total Cost of Ownership",
      icon: <Coins className="w-8 h-8 text-blue-500" />,
      compare: "Lifecycle Economics",
      desc: "While initial procurement may be higher than PVC, the 50+ year design life and near-zero maintenance spend result in the lowest TCO (Total Cost of Ownership) in industry.",
      points: ["50-year service life", "Zero maintenance downtime", "High residual value"]
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
              Established as a technical reference in Morocco, Montajes PRFV Morocco is more than a contractor. We are industrial partners specializing in composite resilience.
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

      {/* Why PRFV Section */}
      <section className="py-32 relative overflow-hidden bg-slate-900/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-10">
          <div className="absolute inset-0 blueprint-grid"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              <Activity className="w-3.5 h-3.5" />
              <span>Material Science comparison</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">Why <span className="text-blue-500">PRFV?</span></h2>
            <p className="text-slate-400 font-light mt-6 max-w-2xl mx-auto leading-relaxed">
              In heavy industry, the choice of material is a strategic capital expenditure decision. Composite systems are rapidly becoming the engineering standard for longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {materialAdvantages.map((adv, idx) => (
              <div key={idx} className="glass-panel p-10 rounded-[2.5rem] border-white/10 group hover:border-blue-500/40 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {adv.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-technical font-bold text-blue-500/60 uppercase tracking-widest block mb-2">{adv.compare}</span>
                    <h4 className="text-2xl font-bold text-white mb-4">{adv.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-light mb-8">
                      {adv.desc}
                    </p>
                    <ul className="grid grid-cols-1 gap-3">
                      {adv.points.map((pt, pidx) => (
                        <li key={pidx} className="flex items-center text-xs font-semibold text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 mr-3 shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 glass-panel p-8 md:p-12 rounded-[2rem] border-blue-500/20 text-center max-w-4xl mx-auto">
            <h4 className="text-white font-bold text-xl mb-4">Engineering Verdict</h4>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              When analyzing the **Net Present Value (NPV)** of industrial assets, PRFV consistently yields a superior return on investment compared to steel (which requires constant painting/maintenance) or PVC (which lacks the structural strength for high-pressure industrial loads).
            </p>
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
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight relative z-10">Regional Reach. Global Rigor.</h2>
            <p className="text-lg text-slate-400 mb-4 font-light max-w-2xl mx-auto relative z-10">
              Our operations span the strategic industrial regions of Morocco, with a focus on delivering high-performance infrastructure to key sectors including mining, desalination, and chemical processing.
            </p>
            <p className="text-sm text-slate-500 italic relative z-10">
              Our engineering standards and project management protocols are built on decades of international EPC experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
