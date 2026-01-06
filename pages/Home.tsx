
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Shield, Ruler, HardHat, ChevronRight, X, CheckCircle2 } from 'lucide-react';
import { MOCK_PROJECTS } from '../constants';

interface ServiceDetail {
  title: string;
  icon: React.ReactNode;
  desc: string;
  scope: string[];
  useCases: string[];
}

const Home: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const services: ServiceDetail[] = [
    { 
      title: "Technical Engineering", 
      icon: <Ruler className="w-8 h-8"/>, 
      desc: "FEM modeling, hydraulic calculations, and ISO compliant 3D design.",
      scope: [
        "Finite Element Method (FEM) analysis for structural stress",
        "Hydraulic surge and head loss calculations",
        "Piping Isometric (Isos) and 3D plant layout integration",
        "Seismic and wind load structural calculations",
        "Resin chemistry selection based on pH and temperature"
      ],
      useCases: [
        "New chemical plant infrastructure",
        "Expansion of desalination intake systems",
        "Conversion of metallic systems to composites"
      ]
    },
    { 
      title: "Precision Fabrication", 
      icon: <Factory className="w-8 h-8"/>, 
      desc: "Filament winding and custom molding under strict QC environments.",
      scope: [
        "Computer-controlled filament winding (up to DN 3000)",
        "Hand lay-up for complex geometry fittings",
        "Specialized chemical barriers (Vinyl Ester/Epoxy liners)",
        "Precision abrasive-resistant inner liners for mining",
        "Integrated structural flanges and mounting points"
      ],
      useCases: [
        "High-pressure chemical transport",
        "Large diameter water distribution",
        "Custom-shaped exhaust manifolds"
      ]
    },
    { 
      title: "Specialized Assembly", 
      icon: <HardHat className="w-8 h-8"/>, 
      desc: "On-site installation and lamination by certified master technicians.",
      scope: [
        "Adhesive bonding and Butt-and-Strap joining",
        "Certified secondary lamination for field joints",
        "Hydrostatic pressure testing and leakage certification",
        "Installation on structural pipe racks or underground",
        "Supervision and commissioning of full systems"
      ],
      useCases: [
        "Turnkey plant installations",
        "Rapid repair and composite wrapping",
        "On-site retrofitting of existing infrastructure"
      ]
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
            alt="FRP Industrial Piping Network" 
            className="w-full h-full object-cover opacity-20 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-panel max-w-4xl mx-auto p-12 md:p-16 rounded-3xl border-white/5 shadow-2xl">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <Shield className="w-3.5 h-3.5" />
              <span>Certified Industrial Standards</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Durability</span> in Composites.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Precision PRFV/FRP piping systems designed for the most aggressive industrial environments. Compliance, authority, and safety integrated by design.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg flex items-center justify-center transition-all group shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                Engineering Inquiry
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/expertise" className="w-full sm:w-auto px-10 py-4 glass-panel hover:bg-white/10 text-white font-bold rounded-lg border-white/20 transition-all flex items-center justify-center">
                Material Specs
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-12 px-4">
        <div className="max-w-6xl mx-auto glass-panel rounded-2xl py-10 px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-white/5">
          {[
            { label: "Engineering Excellence", val: "15+ Years" },
            { label: "Successful Deliveries", val: "350+" },
            { label: "Safety Record", val: "100%" },
            { label: "Material Lifecycle", val: "50+ Yrs" }
          ].map((stat, i) => (
            <div key={i} className={i !== 3 ? 'md:border-r border-white/10' : ''}>
              <p className="text-2xl md:text-3xl font-black text-white mb-1">{stat.val}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-4">Industrial Solutions</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white">Full-Spectrum EPC Expertise</h3>
            </div>
            <p className="text-slate-400 text-sm max-w-md font-light">
              We operate at the intersection of material science and site engineering, providing vertical integration for complex fluid handling projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((val, idx) => (
              <div key={idx} className="glass-panel glass-panel-hover p-10 rounded-2xl transition-all group flex flex-col h-full border-white/5">
                <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{val.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm font-light mb-8 flex-grow">{val.desc}</p>
                <button 
                  onClick={() => setSelectedService(val)}
                  className="text-blue-500 text-xs font-bold uppercase tracking-widest flex items-center hover:translate-x-2 transition-transform w-fit"
                >
                  Explore Scope <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Trust CTA */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="glass-panel rounded-[2rem] p-12 md:p-20 text-center relative border-white/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Ready for Engineering Audit?</h2>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto font-light">
              Our engineering team is available for technical feasibility reviews and material specification comparisons for your upcoming project.
            </p>
            <Link to="/contact" className="inline-flex items-center px-12 py-5 bg-white text-slate-950 font-black rounded-xl uppercase tracking-widest text-xs hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105">
              Secure Direct Consultation
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Modal Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:p-0">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          ></div>
          <div className="glass-panel w-full max-w-2xl rounded-3xl overflow-hidden relative border-white/10 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-8 md:p-12">
              <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500 mb-8">
                {selectedService.icon}
              </div>
              
              <h3 className="text-3xl font-black text-white mb-4">{selectedService.title}</h3>
              <p className="text-slate-400 font-light mb-10 leading-relaxed">
                {selectedService.desc}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-6">Technical Scope</h4>
                  <ul className="space-y-4">
                    {selectedService.scope.map((item, i) => (
                      <li key={i} className="flex items-start text-xs text-slate-300 font-medium group">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 mr-3 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-6">Applications</h4>
                  <ul className="space-y-4">
                    {selectedService.useCases.map((item, i) => (
                      <li key={i} className="flex items-start text-xs text-slate-300 font-medium">
                        <div className="w-1.5 h-1.5 bg-blue-500/50 rounded-full mr-3 shrink-0 mt-1.5"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-[10px] font-mono-technical text-slate-500 uppercase tracking-widest">Engineering Reference: EPC-{selectedService.title.split(' ')[0].toUpperCase()}</p>
                <Link 
                  to="/services" 
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-lg transition-all flex items-center justify-center"
                >
                  Full Service Overview
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
