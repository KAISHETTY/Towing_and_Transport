import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/towingData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Zacks', href: '#why-us' },
    { name: 'Service Area', href: '#service-area' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Recent Rescues', href: '#rescues' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-2.5' : 'bg-white py-3.5 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl bg-slate-900 p-0.5 overflow-hidden shadow-md group-hover:scale-105 transition-transform">
              {!imgError ? (
                <img 
                  src={BUSINESS_INFO.logoUrl} 
                  alt="Zacks Towing Logo" 
                  className="w-full h-full object-cover rounded-lg"
                  onError={() => setImgError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center text-white font-black text-lg tracking-tighter">
                  ZT&T
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-xl text-slate-900 tracking-tight leading-none group-hover:text-amber-600 transition-colors">
                  Zacks Towing
                </span>
                <span className="bg-amber-400/20 text-amber-700 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                  24/7
                </span>
              </div>
              <span className="text-xs font-medium text-slate-500 block tracking-wide">
                & Transportation • North Texas
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-[13px] xl:text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors py-1 whitespace-nowrap relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-200"></span>
              </a>
            ))}
          </nav>

          {/* Live Open Status & Call CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Pulsing Open Badge */}
            <div className="hidden lg:flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-full text-xs font-bold">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>OPEN NOW 24/7</span>
            </div>

            {/* WhatsApp quick button */}
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white p-2.5 rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
            </a>

            {/* Main Phone Call CTA Button */}
            <a
              href={BUSINESS_INFO.phoneTel}
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black px-4 py-2.5 rounded-xl shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 animate-pulse-subtle"
            >
              <div className="bg-slate-950/10 p-1 rounded-lg">
                <Phone className="w-4 h-4 text-slate-950" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-bold text-slate-900 tracking-wider leading-none">
                  Call Ali Now
                </span>
                <span className="font-display font-extrabold text-sm text-slate-950 tracking-tight">
                  {BUSINESS_INFO.phoneDisplay}
                </span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="bg-amber-500 text-slate-950 p-2.5 rounded-xl font-bold flex items-center justify-center shadow-md"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
            <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Dispatches Active • 24/7 Available</span>
            </div>
            <span className="text-xs font-semibold text-slate-600">Avg ETA: 15-20 min</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-800 font-semibold text-sm p-3 rounded-lg bg-slate-50 border border-slate-100 text-center hover:bg-brand-orange/10 hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex items-center justify-center gap-2 bg-amber-500 text-slate-950 font-bold py-3 px-3 rounded-xl text-sm shadow"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-500 text-white font-bold py-3 px-3 rounded-xl text-sm shadow"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
