
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="relative py-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-8">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <span>Secure Engineering Channel</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                Direct Engineering <span className="text-blue-500">Support.</span>
              </h1>
              <p className="text-xl text-slate-400 font-light mb-16 leading-relaxed max-w-lg">
                Technical dialogue is the foundation of structural success. Our EPC team is ready to analyze your fluid transport requirements.
              </p>
              
              <div className="space-y-12">
                {[
                  { icon: <MapPin/>, title: "Operational Hub", val: "Zone Industrielle Gzenaya, Lot 234\nTanger, Morocco" },
                  { icon: <Phone/>, title: "Technical Desk", val: "+212 539 33 44 55" },
                  { icon: <Clock/>, title: "Service Hours", val: "Mon - Fri, 08:00 - 18:00 GMT+1" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="bg-white/5 p-4 rounded-xl mr-6 border border-white/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {/* Fix: use ReactElement<any> to avoid type mismatch when cloning with className */}
                      {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <h4 className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-2">{item.title}</h4>
                      <p className="text-white text-lg font-medium whitespace-pre-line">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-10 md:p-12 rounded-[2.5rem] border-white/10 relative">
              <div className="flex items-center space-x-4 mb-10">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">Technical Request Form</h3>
              </div>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Principal Engineer / Contact</label>
                    <input 
                      type="text" 
                      placeholder="Name"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Corporate Identity</label>
                    <input 
                      type="text" 
                      placeholder="Company"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Work Email</label>
                    <input 
                      type="email" 
                      placeholder="email@company.com"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Project Sector</label>
                    <select className="w-full px-6 py-4 bg-slate-900 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-all appearance-none">
                      <option>Chemical Industry</option>
                      <option>Desalination & Water</option>
                      <option>Mining Operations</option>
                      <option>Infrastructure EPC</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Technical Scope Description</label>
                  <textarea 
                    rows={5} 
                    placeholder="Provide pressure ratings, diameter, and chemical environment..."
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl uppercase tracking-[0.2em] text-[11px] flex items-center justify-center transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] transform hover:-translate-y-1">
                  Transmit Engineering Data <Send className="ml-3 w-4 h-4" />
                </button>
                <p className="text-[9px] text-slate-500 text-center uppercase tracking-[0.3em] font-medium">
                  End-to-End Encryption • Technical Confidentiality Guaranteed
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
