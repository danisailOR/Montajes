
import React from 'react';
import { Info, ShieldAlert, BarChart3, Recycle, ChevronRight } from 'lucide-react';

const Expertise: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight text-white tracking-tighter">
            Composite <br/><span className="text-blue-500">Intelligence.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed">
            Standardizing Fiber Reinforced Plastic (PRFV) as the primary material for high-corrosion industrial environments.
          </p>
        </div>
      </section>

      {/* Glass Definition Block */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto glass-panel rounded-3xl overflow-hidden border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 md:p-20">
              <div className="flex items-center space-x-3 text-blue-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-8">
                <Info className="w-4 h-4" />
                <span>Material Architecture</span>
              </div>
              <h2 className="text-4xl font-black text-white mb-8 leading-tight">The PRFV Synergy</h2>
              <p className="text-lg text-slate-400 mb-12 font-light leading-relaxed">
                We engineer structural integrity at a molecular level. By combining chemically resistant thermosetting resins with high-tensile glass fibers, we create a material that outperforms steel in weight-to-strength ratios and chemical longevity.
              </p>
              
              <div className="space-y-6">
                <div className="glass-panel p-6 rounded-xl border-white/10 hover:bg-white/5 transition-colors">
                  <h4 className="text-white font-bold text-sm mb-2">Thermosetting Matrix</h4>
                  <p className="text-slate-400 text-xs">Selection of Vinyl Ester, Epoxy, or Specialty Polyesters based on chemical pH levels.</p>
                </div>
                <div className="glass-panel p-6 rounded-xl border-white/10 hover:bg-white/5 transition-colors">
                  <h4 className="text-white font-bold text-sm mb-2">Fiber Reinforcement</h4>
                  <p className="text-slate-400 text-xs">Directional E-Glass or C-Glass alignment to handle specific pressure and mechanical loads.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover grayscale brightness-50" 
                alt="Precision Engineering Composite" 
              />
              <div className="absolute inset-0 bg-gradient-to-l from-slate-950/80 to-transparent"></div>
              <div className="absolute bottom-12 right-12 glass-panel p-8 rounded-2xl border-white/20 max-w-sm backdrop-blur-xl">
                <p className="text-[10px] font-mono-technical text-blue-400 mb-3 tracking-widest uppercase">Micro-Structural Logic</p>
                <p className="text-sm font-light text-slate-200 leading-relaxed">Cross-laminar distribution optimized for axial and hoop stress in pressurized piping.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table with Glass Styling */}
      <section className="py-32 bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-3xl font-black text-white mb-4">Technical Benchmarking</h3>
            <p className="text-slate-400 font-light">Direct engineering comparison against legacy materials.</p>
          </div>
          <div className="glass-panel rounded-3xl overflow-hidden border-white/10 shadow-3xl">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white/5 text-white text-[10px] uppercase tracking-[0.3em] font-bold">
                    <th className="p-8 text-left border-b border-white/10">Property</th>
                    <th className="p-8 text-center border-b border-white/10 text-blue-400">PRFV / FRP</th>
                    <th className="p-8 text-center border-b border-white/10">Carbon Steel</th>
                    <th className="p-8 text-center border-b border-white/10">Stainless Steel</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-300">
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-8 font-bold text-white">Corrosion Rate</td>
                    <td className="p-8 text-center text-blue-400 font-black">Near Zero</td>
                    <td className="p-8 text-center">High (Vulnerable)</td>
                    <td className="p-8 text-center">Moderate (Pitting)</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-8 font-bold text-white">Spec. Gravity</td>
                    <td className="p-8 text-center font-mono-technical text-blue-400">1.8</td>
                    <td className="p-8 text-center font-mono-technical">7.8</td>
                    <td className="p-8 text-center font-mono-technical">8.0</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-8 font-bold text-white">Roughness (ε)</td>
                    <td className="p-8 text-center text-blue-400">0.005mm</td>
                    <td className="p-8 text-center">0.045mm</td>
                    <td className="p-8 text-center">0.015mm</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-8 font-bold text-white">Life Cycle Cost</td>
                    <td className="p-8 text-center text-blue-400 font-black">Minimal</td>
                    <td className="p-8 text-center">Extremely High</td>
                    <td className="p-8 text-center">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldAlert/>, title: "Immunity to Oxidation", desc: "Permanent resistance to electrochemical attack without expensive coating maintenance." },
              { icon: <BarChart3/>, title: "Hydraulic Efficiency", desc: "Ultra-smooth inner liners reduce friction loss, lowering lifetime pumping energy costs." },
              { icon: <Recycle/>, title: "Sustainability Profile", desc: "Longer operational lifecycles translate to reduced replacement frequency and lower carbon impact." }
            ].map((pillar, i) => (
              <div key={i} className="glass-panel p-10 rounded-2xl border-white/5 flex flex-col items-center text-center group transition-all">
                <div className="text-blue-500 mb-8 transform transition-transform group-hover:scale-110 duration-500">
                  {/* Fix: use ReactElement<any> to avoid type mismatch when cloning with className */}
                  {React.cloneElement(pillar.icon as React.ReactElement<any>, { className: "w-12 h-12" })}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{pillar.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
