
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-3' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-panel rounded-xl px-6 flex items-center justify-between h-16 transition-all ${
          scrolled ? 'bg-slate-950/60' : 'bg-slate-950/30'
        }`}>
          <Link to="/" className="flex flex-col group">
            <span className="text-xl font-bold tracking-tight leading-tight text-white group-hover:text-blue-400 transition-colors">
              MONTAJES <span className="text-blue-500">PRFV</span>
            </span>
            <span className="text-[10px] font-mono-technical tracking-[0.2em] text-slate-400">MAROC ENGINEERING</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.href}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center text-xs font-bold uppercase tracking-widest transition-all hover:text-blue-400 ${
                    location.pathname === item.href ? 'text-blue-500' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                  {item.subItems && <ChevronDown className={`ml-1 w-3 h-3 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                </Link>

                {item.subItems && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="glass-panel bg-slate-900/90 rounded-lg overflow-hidden border border-white/10">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className="block px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:bg-blue-600 hover:text-white border-b border-white/5 last:border-0 transition-colors"
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
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-2 px-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="glass-panel bg-slate-900/95 rounded-xl p-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-blue-400 rounded transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
