import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center group mb-8">
              <div className="flex items-center border-l-2 border-blue-600 pl-4 py-1 leading-none">
                <span className="text-xl font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  MONTAJES <span className="text-blue-500">PRFV</span>
                </span>
              </div>
            </Link>
            <p className="max-w-md text-sm leading-relaxed mb-8">
              Specialized contractors in FRP/PRFV composite systems for high-stakes industrial environments. 
              Delivering engineering excellence, fabrication, and installation across North Africa and international markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white rounded transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:j.martos@montajes.ma" className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white rounded transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-6">Operations</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Industrial Services</Link></li>
              <li><Link to="/expertise" className="hover:text-blue-400 transition-colors">PRFV Expertise</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Technical Inquiries</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-6">Contact Engineering</h4>
            <div className="space-y-5 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 text-blue-500 shrink-0" />
                <span className="leading-tight">Morocco (Regional Operations)</span>
              </div>
              <div className="flex items-start">
                <Phone className="w-4 h-4 mr-3 text-blue-500 shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1.5 leading-tight">
                  <a href="tel:+212714354589" className="hover:text-blue-400 transition-colors">+212 7 14 354 589</a>
                  <a href="tel:+34692926260" className="hover:text-blue-400 transition-colors">+34 692 92 62 60</a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 mr-3 text-blue-500 shrink-0 mt-0.5" />
                <a href="mailto:j.martos@montajes.ma" className="leading-tight hover:text-blue-400 transition-colors">j.martos@montajes.ma</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Montajes PRFV Morocco S.A.R.L. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;