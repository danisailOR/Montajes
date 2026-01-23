import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'py-2' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-panel rounded-xl px-6 flex items-center justify-between h-16 transition-all duration-500 ${
          scrolled ? 'bg-slate-950/80 border-white/10' : 'bg-slate-950/30 border-white/5'
        }`}>
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center border-l-2 border-blue-600 pl-3 py-1 leading-none">
              <span className="text-lg font-black tracking-tighter text-white group-hover:text-blue-400 transition-colors">
                MONTAJES <span className="text-blue-500">PRFV</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.href}
                className="relative group py-2"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-blue-400 relative ${
                    location.pathname === item.href ? 'text-blue-500' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full"></span>
                  )}
                  {item.subItems && <ChevronDown className={`ml-1 w-3 h-3 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                </Link>

                {item.subItems && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="glass-panel bg-slate-900/95 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className="block px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-300 hover:bg-blue-600 hover:text-white border-b border-white/5 last:border-0 transition-all"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-95"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 z-[-1] bg-slate-950 transition-all duration-500 md:hidden ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col h-full pt-32 px-8 pb-12">
          <div className="space-y-6">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block text-3xl font-black tracking-tighter transition-all hover:text-blue-500 transform ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center justify-between group">
                  <span className={location.pathname === item.href ? 'text-blue-500' : 'text-white'}>
                    {item.label}
                  </span>
                  <ArrowRight className="w-6 h-6 text-blue-600 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                </div>
              </Link>
            ))}
          </div>

          <div className={`mt-auto space-y-8 transform transition-all duration-700 delay-300 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="pt-8 border-t border-white/10">
              <Link
                to="/contact"
                className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white py-5 text-sm font-bold uppercase tracking-[0.2em] rounded-2xl transition-all shadow-[0_20px_40px_rgba(37,99,235,0.2)]"
              >
                Secure Engineering Quote
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Global Operations</p>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-400">
                <span>Morocco</span>
                <span>•</span>
                <span>North Africa</span>
                <span>•</span>
                <span>EPC Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;