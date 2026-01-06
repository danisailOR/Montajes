
import React from 'react';
import { Ruler, Factory, Truck, HardHat, CheckCircle, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  const serviceImages = [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80"
  ];

  const services = [
    {
      title: "Engineering & Design",
      icon: <Ruler className="w-10 h-10" />,
      description: "Complete technical calculation for PRFV systems, including hydraulic analysis, structural FEM modeling, and detailed 3D design.",
      bullets: ["Hydraulic calculation (Head loss, Flow rate)", "Structural stress analysis (ISO 14692)", "Isometric generation & 3D layout", "Selection of resin/reinforcement chemistry"]
    },
    {
      title: "Fabrication of PRFV Systems",
      icon: <Factory className="w-10 h-10" />,
      description: "State-of-the-art production of pipes, fittings, and tanks using filament winding and hand lay-up techniques.",
      bullets: ["Filament Winding up to DN 3000", "Custom fitting fabrication", "GRP/GRE/GRV manufacturing", "Liners for specific chemical resistance"]
    },
    {
      title: "Supply & Logistics",
      icon: <Truck className="w-10 h-10" />,
      description: "Global procurement and specialized transport logistics for oversized composite components.",
      bullets: ["Global sourcing of premium raw materials", "Just-in-time delivery for EPC schedules", "Protective packaging for maritime/land transit", "Documentation & traceability"]
    },
    {
      title: "Installation & On-Site Assembly",
      icon: <HardHat className="w-10 h-10" />,
      description: "Expert mobilization for specialized joining, lamination, and structural mounting of PRFV systems.",
      bullets: ["Certified lamination technicians", "Adhesive bonding & Butt-and-Strap joints", "Installation on pipe racks & underground", "Pressure testing (Hydrostatic)"]
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-950/80 border-b border-white/5 py-32 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -ml-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">Industrial <span className="text-blue-500">Services.</span></h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed font-light">
            From preliminary engineering to commissioning, we provide a verticalized service model 
            specifically tailored for the unique challenges of composite piping systems.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-40">
            {services.map((service, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="text-blue-500 mb-8">{service.icon}</div>
                  <h2 className="text-4xl font-black text-white mb-8 tracking-tight">{service.title}</h2>
                  <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex items-start text-sm font-medium text-slate-300">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-4 shrink-0 mt-0.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full glass-panel h-[500px] rounded-[2rem] overflow-hidden relative border-white/10 shadow-3xl">
                  <img 
                    src={serviceImages[idx]} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000" 
                  />
                  <div className="absolute top-6 right-6 glass-panel px-6 py-3 border-white/20 text-[10px] font-mono-technical uppercase tracking-[0.2em] text-blue-400 backdrop-blur-xl rounded-full">
                    S-0{idx+1} Reference Scope
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Box */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-6 glass-panel rounded-3xl mb-10 border-blue-500/20">
            <ShieldCheck className="w-12 h-12 text-blue-500" />
          </div>
          <h2 className="text-4xl font-black text-white mb-8 tracking-tight">Total Compliance Governance</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-12 font-light">
            Our installation teams are trained according to DVS and ISO standards. Every joint made on-site is logged, 
            traced, and visually/hydrostatically inspected to ensure zero-leak performance in pressurized systems.
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
