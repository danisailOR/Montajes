
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ShieldCheck, ChevronDown, User, Briefcase, FileText, AlertCircle, CheckCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  company: string;
  sector: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    sector: 'Chemical Industry',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (data: FormState): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.name.trim()) newErrors.name = 'Full name is required';
    if (!data.company.trim()) newErrors.company = 'Company identity is required';
    if (!data.message.trim()) newErrors.message = 'Technical scope details are required';
    if (data.message.length > 0 && data.message.length < 20) {
      newErrors.message = 'Please provide more technical detail (min 20 chars)';
    }
    if (!data.email) {
      newErrors.email = 'Work email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
      newErrors.email = 'Invalid professional email format';
    }
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<any>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const validationErrors = validate(formData);
    setErrors(validationErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      company: true,
      message: true
    });

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        // Reset after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  const renderError = (field: keyof FormErrors) => {
    if (touched[field] && errors[field]) {
      return (
        <div className="flex items-center space-x-1.5 mt-2 animate-in fade-in slide-in-from-top-1 duration-200">
          <AlertCircle className="w-3 h-3 text-rose-500" />
          <span className="text-[9px] font-bold text-rose-500 uppercase tracking-wider">{errors[field]}</span>
        </div>
      );
    }
    return null;
  };

  const getInputClass = (field: keyof FormErrors) => {
    const baseClass = "w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder-slate-700 focus:bg-white/10 focus:outline-none transition-all";
    if (touched[field] && errors[field]) {
      return `${baseClass} border-rose-500/50 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10`;
    }
    return `${baseClass} border-white/10 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10`;
  };

  return (
    <div className="pt-20">
      <section className="relative py-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -ml-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Contact Information Column */}
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
                <div className="flex items-start group">
                  <div className="bg-white/5 p-4 rounded-xl mr-6 border border-white/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-2">Operational Hub</h4>
                    <p className="text-white text-lg font-medium leading-tight">Laayoune, Morocco</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-white/5 p-4 rounded-xl mr-6 border border-white/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-2">Technical Desk</h4>
                    <div className="flex flex-col space-y-1.5 leading-tight">
                      <a href="tel:+212714354589" className="text-white text-lg font-medium hover:text-blue-400 transition-colors">+212 7 14 354 589</a>
                      <a href="tel:+34692926260" className="text-white text-lg font-medium hover:text-blue-400 transition-colors">+34 692 92 62 60</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-white/5 p-4 rounded-xl mr-6 border border-white/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-2">Service Hours</h4>
                    <p className="text-white text-lg font-medium leading-tight">Mon - Fri, 08:00 - 18:00 GMT+1</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="glass-panel p-6 sm:p-10 md:p-12 rounded-[2.5rem] border-white/10 relative">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-20 animate-in fade-in zoom-in duration-500 text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white mb-8 shadow-[0_0_40px_rgba(37,99,235,0.4)]">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">Transmission Successful</h3>
                  <p className="text-slate-400 font-light max-w-xs mx-auto">
                    Your technical request has been encrypted and sent to our engineering lead. Expect a response within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-10 px-8 py-3 glass-panel border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-all"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center space-x-4 mb-10">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white tracking-tight">Technical Request</h3>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Standardized EPC Inquiry Form</p>
                    </div>
                  </div>
                  
                  <form 
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-10"
                  >
                    {/* Section 1: Identity */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2 text-blue-400">
                        <User className="w-3.5 h-3.5" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Project Lead Information</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Full Name</label>
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="John Doe"
                            className={getInputClass('name')} 
                          />
                          {renderError('name')}
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Professional Email</label>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="j.doe@company.com"
                            className={getInputClass('email')} 
                          />
                          {renderError('email')}
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Project Context */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2 text-blue-400 border-t border-white/5 pt-8">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Corporate Context</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Company / Organization</label>
                          <input 
                            type="text" 
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Industrial Engineering S.A."
                            className={getInputClass('company')} 
                          />
                          {renderError('company')}
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Project Sector</label>
                          <div className="relative">
                            <select 
                              name="sector"
                              value={formData.sector}
                              onChange={handleChange}
                              className="w-full px-5 py-4 bg-slate-900 border border-white/10 rounded-xl text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all appearance-none cursor-pointer pr-12"
                            >
                              <option>Chemical Industry</option>
                              <option>Desalination & Water</option>
                              <option>Mining Operations</option>
                              <option>Infrastructure EPC</option>
                              <option>Maintenance & Retrofit</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Technical Details */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2 text-blue-400 border-t border-white/5 pt-8">
                        <FileText className="w-3.5 h-3.5" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Technical Scope</span>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Inquiry Specifications</label>
                        <textarea 
                          rows={4} 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Specify pressure ratings, diameter (DN), chemical composition, and installation environment..."
                          className={getInputClass('message')}
                        ></textarea>
                        {renderError('message')}
                        <p className="text-[8px] text-slate-600 uppercase tracking-widest ml-1 font-bold">Include standards if known (ISO 14692, ASTM, etc.)</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-5 text-white font-black rounded-xl uppercase tracking-[0.2em] text-[11px] flex items-center justify-center transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] transform hover:-translate-y-1 active:scale-95 ${
                          isSubmitting ? 'bg-blue-600/50 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'
                        }`}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                            Encrypting Data...
                          </div>
                        ) : (
                          <>Transmit Engineering Data <Send className="ml-3 w-4 h-4" /></>
                        )}
                      </button>
                      <div className="mt-8 flex flex-col items-center justify-center space-y-4">
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">System Online</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <ShieldCheck className="w-3 h-3 text-blue-500" />
                            <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">SSL Encrypted</span>
                          </div>
                        </div>
                        <p className="text-[9px] text-slate-600 text-center uppercase tracking-[0.3em] font-medium max-w-xs leading-relaxed">
                          Technical confidentiality guaranteed per industrial EPC protocols.
                        </p>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
