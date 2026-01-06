
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-2xl font-bold text-white tracking-tight">MONTAJES <span className="text-blue-500">PRFV</span></span>
              <span className="text-xs font-mono-technical tracking-[0.2em]">MAROC ENGINEERING</span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed mb-8">
              Specialized contractors in FRP/PRFV composite systems for high-stakes industrial environments. 
              Delivering engineering excellence, fabrication, and installation across North Africa and international markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white rounded transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@montajesprfvmaroc.com" className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white rounded transition-colors">
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
            <div className="space-y-4 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-blue-500 shrink-0" />
                <span>Zone Industrielle, Tanger, Morocco</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-blue-500 shrink-0" />
                <span>+212 5XX XX XX XX</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blue-500 shrink-0" />
                <span>engineering@prfvmaroc.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Montajes PRFV Maroc S.A.R.L. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
