import React from 'react';
import { Ruler, Factory, HardHat, CheckCircle, ShieldCheck, Activity, Beaker, Layers, Globe, Zap } from 'lucide-react';

/** 
 * Conceptual Visual for Engineering & Design
 * Metaphor: The Logic Grid. Structural emergence from a 2D plane to 3D space.
 */
const EngineeringVisual = () => (
  <div className="w-full h-full bg-slate-900/40 relative overflow-hidden flex items-center justify-center">
    <style>{`
      @keyframes drawLine {
        from { stroke-dashoffset: 400; }
        to { stroke-dashoffset: 0; }
      }
      @keyframes pulseNode {
        0%, 100% { r: 3; opacity: 0.4; }
        50% { r: 5; opacity: 1; }
      }
      .line-draw {
        stroke-dasharray: 400;
        animation: drawLine 3s ease-out forwards;
      }
      .node-pulse {
        animation: pulseNode 2s infinite ease-in-out;
      }
    `}</style>
    <svg viewBox="0 0 400 400" className="w-4/5 h-4/5 opacity-70">
      <defs>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      
      {/* Background Grid */}
      <path d="M0 200 L400 200 M200 0 L200 400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      
      {/* Structural Wireframe */}
      <path 
        d="M200 120 L280 160 L280 240 L200 280 L120 240 L120 160 Z" 
        fill="url(#blueGrad)" 
        stroke="#3b82f6" 
        strokeWidth="2" 
        className="line-draw"
      />
      <path d="M120 160 L200 200 L280 160 M200 200 L200 280" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.5" />
      
      {/* Dimension Indicators */}
      <g stroke="#64748b" strokeWidth="1" strokeDasharray="4 4">
        <line x1="100" y1="160" x2="100" y2="240" />
        <line x1="90" y1="160" x2="110" y2="160" />
        <line x1="90" y1="240" x2="110" y2="240" />
      </g>
      
      {/* Stress Nodes */}
      <circle cx="200" cy="200" r="4" fill="#3b82f6" className="node-pulse" />
      <circle cx="120" cy="160" r="2" fill="#64748b" />
      <circle cx="280" cy="160" r="2" fill="#64748b" />
      
      <text x="75" y="200" fill="#64748b" fontSize="9" transform="rotate(-90 75 200)" className="font-mono-technical uppercase tracking-tighter">Analysis_v4.2</text>
    </svg>
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
  </div>
);

/** 
 * Conceptual Visual for Fabrication
 * Metaphor: The Kinetic Coil. Automated filament winding layers.
 */
const FabricationVisual = () => (
  <div className="w-full h-full bg-slate-900/40 relative overflow-hidden flex items-center justify-center">
    <style>{`
      @keyframes rotateFast {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes rotateSlow {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }
      @keyframes sweepHead {
        0% { stroke-dashoffset: 1000; }
        100% { stroke-dashoffset: 0; }
      }
      .rotate-ccw { animation: rotateSlow 25s linear infinite; transform-origin: center; }
      .rotate-cw { animation: rotateFast 15s linear infinite; transform-origin: center; }
      .sweep { stroke-dasharray: 100 900; animation: sweepHead 4s linear infinite; }
    `}</style>
    <svg viewBox="0 0 400 400" className="w-4/5 h-4/5 opacity-70">
      {/* Outer structural rings */}
      <circle cx="200" cy="200" r="140" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
      <circle cx="200" cy="200" r="120" fill="none" stroke="#1e293b" strokeWidth="12" />
      
      {/* Winding Layers */}
      <g className="rotate-cw">
        <circle cx="200" cy="200" r="120" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="1 15" />
      </g>
      
      <g className="rotate-ccw">
        <circle cx="200" cy="200" r="100" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="20 10" strokeOpacity="0.4" />
      </g>
      
      {/* The Winding Head (Active Process) */}
      <circle cx="200" cy="200" r="120" fill="none" stroke="#3b82f6" strokeWidth="3" className="sweep" strokeLinecap="round" />
      
      {/* Core Material Info */}
      <circle cx="200" cy="200" r="60" fill="rgba(59, 130, 246, 0.05)" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="2 2" />
      <text x="200" y="205" textAnchor="middle" fill="#64748b" fontSize="10" className="font-mono-technical uppercase tracking-widest">DN_SPEC</text>
    </svg>
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
  </div>
);

/** 
 * Conceptual Visual for Assembly & Field Services
 * Metaphor: The Integrity Node. Flange connections and directional flow.
 */
const AssemblyVisual = () => (
  <div className="w-full h-full bg-slate-900/40 relative overflow-hidden flex items-center justify-center">
    <style>{`
      @keyframes fluidFlow {
        0% { stroke-dashoffset: 60; }
        100% { stroke-dashoffset: 0; }
      }
      @keyframes clampPulse {
        0%, 100% { stroke-opacity: 0.3; stroke-width: 1; }
        50% { stroke-opacity: 1; stroke-width: 2; }
      }
      .flow {
        stroke-dasharray: 10 50;
        animation: fluidFlow 2s linear infinite;
      }
      .clamp {
        animation: clampPulse 3s infinite ease-in-out;
      }
    `}</style>
    <svg viewBox="0 0 400 400" className="w-4/5 h-4/5 opacity-70">
      {/* Pipe Paths */}
      <path 
        d="M50 250 L180 250 L180 100 L350 100" 
        fill="none" 
        stroke="#1e293b" 
        strokeWidth="30" 
        strokeLinecap="round" 
      />
      
      {/* Flow Indicator */}
      <path 
        d="M50 250 L180 250 L180 100 L350 100" 
        fill="none" 
        stroke="#3b82f6" 
        strokeWidth="2" 
        className="flow" 
      />
      
      {/* Connection Joint (Flange Metaphor) */}
      <g transform="translate(180, 250)">
        <rect x="-25" y="-30" width="50" height="60" fill="#0f172a" stroke="#3b82f6" strokeWidth="1" rx="4" />
        <line x1="-15" y1="-30" x2="-15" y2="30" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.5" />
        <line x1="15" y1="-30" x2="15" y2="30" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.5" />
        
        {/* Bolt Points */}
        <circle cx="-15" cy="-20" r="2" fill="#3b82f6" />
        <circle cx="-15" cy="20" r="2" fill="#3b82f6" />
        <circle cx="15" cy="-20" r="2" fill="#3b82f6" />
        <circle cx="15" cy="20" r="2" fill="#3b82f6" />
        
        {/* Integrity Field */}
        <circle cx="0" cy="0" r="45" fill="none" stroke="#3b82f6" className="clamp" />
      </g>
      
      <text x="210" y="270" fill="#64748b" fontSize="8" className="font-mono-technical uppercase tracking-widest">Site_Verification_OK</text>
    </svg>
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "Engineering & Technical Design",
      icon: <Ruler className="w-10 h-10" />,
      visual: <EngineeringVisual />,
      kpi: "Accuracy: ±0.1mm",
      description: "We bridge the gap between material science and structural reality. Our engineering department utilizes advanced FEA (Finite Element Analysis) to simulate real-world stress on composite structures before production begins.",
      bullets: [
        "Advanced FEM Modeling for structural stress",
        "Hydraulic calculation (Head loss & Water hammer)",
        "3D Isometric generation & Plant integration",
        "ISO 14692 & ASME NM.2 Compliance checks",
        "Selection of resin chemistry (Vinyl Ester, Epoxy, Phenolic)"
      ],
      compliance: "ISO 14692 / DIN 16965",
      idCode: "ENG-X10"
    },
    {
      title: "Advanced PRFV Fabrication",
      icon: <Factory className="w-10 h-10" />,
      visual: <FabricationVisual />,
      kpi: "Capacity: up to DN 4000",
      description: "Our fabrication facility is optimized for high-performance composite production. Utilizing both automated Filament Winding and precision Hand Lay-up, we produce systems that withstand extreme chemical and mechanical loads.",
      bullets: [
        "Continuous & Discontinuous Filament Winding",
        "Custom Molding for complex geometry fittings",
        "Dual-Laminate construction (PP/GRP, PVC/GRP, PVDF/GRP)",
        "Abrasion-resistant inner liners with C-glass veil",
        "Structural reinforcement for vacuum applications"
      ],
      compliance: "ASTM D2996 / BS 4994",
      idCode: "FAB-M22"
    },
    {
      title: "Piping Assembly & Field Services",
      icon: <HardHat className="w-10 h-10" />,
      visual: <AssemblyVisual />,
      kpi: "Integrity: Zero-Leak Certified",
      description: "Expert mobilization for specialized joining, lamination, and structural mounting of PRFV systems. Our field teams ensure that the engineering design is perfectly translated into a high-performance functional industrial network.",
      bullets: [
        "Certified lamination for Butt-and-Strap joints",
        "Adhesive bonding for high-pressure GRE systems",
        "Structural support and pipe rack mounting",
        "Hydrostatic pressure testing & commissioning",
        "Site-specific repairs and composite retrofitting"
      ],
      compliance: "DVS 2205 / ISO 14692",
      idCode: "ASM-Y77"
    }
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Dynamic Hero Section */}
      <section className="bg-slate-950/80 border-b border-white/5 py-32 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -ml-48 -mt-48 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass-panel border-blue-500/20 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
            <Activity className="w-4 h-4" />
            <span>Vertical Project Integration</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
            Industrial <br/><span className="text-blue-500">Service Stack.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-light">
            We provide a comprehensive engineering lifecycle for composite assets, 
            eliminating technical friction between design, fabrication, and site assembly.
          </p>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-48">
            {services.map((service, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-500">
                      {service.icon}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono-technical font-bold text-blue-500/60 uppercase tracking-widest">{service.kpi}</span>
                        <span className="w-1 h-1 bg-blue-500/40 rounded-full"></span>
                        <span className="text-[10px] font-mono-technical font-bold text-slate-600 uppercase tracking-widest">{service.idCode}</span>
                      </div>
                      <h2 className="text-4xl font-black text-white tracking-tight">{service.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {service.bullets.map((bullet, bidx) => (
                      <div key={bidx} className="flex items-start text-sm text-slate-300 font-medium group">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        {bullet}
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/5 inline-flex items-center space-x-3">
                    <ShieldCheck className="w-5 h-5 text-slate-500" />
                    <span className="text-[10px] font-mono-technical text-slate-500 uppercase tracking-widest">Compliant with {service.compliance}</span>
                  </div>
                </div>

                <div className="flex-1 w-full relative group">
                  <div className="absolute -inset-4 bg-blue-500/10 rounded-[2.5rem] blur-2xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
                  
                  {/* Technical Overlay Elements */}
                  <div className="absolute -top-6 -left-6 z-20 hidden lg:block opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="text-[8px] font-mono-technical text-blue-400/60 leading-tight">
                      COORD_X: 34.234<br/>
                      COORD_Y: 12.098<br/>
                      REF: {service.idCode}
                    </div>
                  </div>

                  <div className="glass-panel h-[550px] rounded-[2rem] overflow-hidden relative border-white/10 shadow-3xl">
                    {/* JSX Illustration instead of img */}
                    {service.visual}
                    
                    {/* Floating Info Badge */}
                    <div className="absolute top-8 right-8 glass-panel px-6 py-3 border-white/20 text-[10px] font-mono-technical uppercase tracking-[0.2em] text-blue-400 backdrop-blur-3xl rounded-full z-20">
                      Phase-0{idx+1} Protocol
                    </div>

                    {/* Bottom Info Sheet */}
                    <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent translate-y-[80%] group-hover:translate-y-0 transition-transform duration-700 ease-out backdrop-blur-md">
                      <div className="flex items-center space-x-3 mb-4">
                        <Zap className="w-4 h-4 text-blue-500" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Engineering Insight</span>
                      </div>
                      <p className="text-sm text-slate-300 font-light italic leading-relaxed">
                        "Deploying high-performance PRFV requires strict adherence to {service.compliance} protocols. Our {service.title.toLowerCase()} methodology ensures structural reliability across the asset lifecycle."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Compatibility Matrix - Enjoyable Technical Data */}
      <section className="py-32 bg-slate-950/40 relative overflow-hidden border-y border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute inset-0 blueprint-grid"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <Beaker className="w-12 h-12 text-blue-500 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-white mb-4">Material Compatibility Matrix</h2>
            <p className="text-slate-400 font-light max-w-2xl mx-auto">Verified resistance benchmarks for PRFV systems in extreme chemical environments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { media: "Seawater / Brine", rating: "Excellent", life: "50+ Years", color: "text-blue-400", bg: "bg-blue-500/5" },
              { media: "Sulfuric Acid (70%)", rating: "Superior", life: "30+ Years", color: "text-purple-400", bg: "bg-purple-500/5" },
              { media: "Sodium Hydroxide", rating: "Very Good", life: "25+ Years", color: "text-emerald-400", bg: "bg-emerald-500/5" },
              { media: "Phosphoric Acid", rating: "Excellent", life: "40+ Years", color: "text-orange-400", bg: "bg-orange-500/5" }
            ].map((item, i) => (
              <div key={i} className={`glass-panel p-8 rounded-3xl border-white/5 hover:border-blue-500/30 transition-all group ${item.bg}`}>
                <p className="text-[10px] font-mono-technical text-slate-500 uppercase tracking-widest mb-4">Chemical Media</p>
                <h4 className="text-xl font-bold text-white mb-2">{item.media}</h4>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-6 mb-8">
                  <div className={`h-full ${item.color.replace('text-', 'bg-')} w-0 group-hover:w-full transition-all duration-1000 delay-200`}></div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[8px] uppercase text-slate-500 font-bold tracking-widest">Rating</p>
                    <p className={`text-xs font-black ${item.color}`}>{item.rating}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] uppercase text-slate-500 font-bold tracking-widest">Lifecycle</p>
                    <p className="text-xs font-black text-white">{item.life}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Overview Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6 group">
              <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500 mx-auto group-hover:scale-110 transition-transform">
                <Layers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Advanced Laminates</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs mx-auto">Multilayer resin systems optimized for specific chemical, thermal, and mechanical loads.</p>
            </div>
            <div className="space-y-6 group">
              <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500 mx-auto group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Cross-Border Delivery</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs mx-auto">Integrated supply chains spanning North Africa, Europe, and the Middle East.</p>
            </div>
            <div className="space-y-6 group">
              <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500 mx-auto group-hover:scale-110 transition-transform">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Full Traceability</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs mx-auto">Every component is tagged with digital fabrication records for long-term asset management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Box */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-6 glass-panel rounded-3xl mb-10 border-blue-500/20">
            <ShieldCheck className="w-12 h-12 text-blue-500" />
          </div>
          <h2 className="text-4xl font-black text-white mb-8 tracking-tight">Technical Governance</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-12 font-light">
            Our workflows are strictly audited against international composite standards. From initial FEA modeling to final factory acceptance tests, we ensure zero-leak performance.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <span className="font-mono-technical font-black text-xl tracking-tighter">ISO 14692</span>
            <span className="font-mono-technical font-black text-xl tracking-tighter">ASTM D2996</span>
            <span className="font-mono-technical font-black text-xl tracking-tighter">DIN 16965</span>
            <span className="font-mono-technical font-black text-xl tracking-tighter">ASME NM.2</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
