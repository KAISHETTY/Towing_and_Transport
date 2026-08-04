import React, { useState } from 'react';
import { BUSINESS_INFO, SERVICES, SERVICE_CITIES } from '../data/towingData';
import { Phone, MessageSquare, Send, Clock, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { ShareButton } from './ShareButton';

export const Footer: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-24 sm:pb-12 border-t-4 border-amber-500 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-800 p-0.5 overflow-hidden border border-amber-400/40">
                {!imgError ? (
                  <img
                    src={BUSINESS_INFO.logoUrl}
                    alt="Zacks Towing Logo"
                    className="w-full h-full object-cover rounded-lg"
                    onError={() => setImgError(true)}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-amber-500 text-slate-950 flex items-center justify-center font-black text-lg">
                    ZT&T
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-white">
                  Zacks Towing
                </h3>
                <span className="text-xs font-bold text-amber-400 block">
                  & Transportation • North Texas
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              24/7 Professional Towing & Roadside Assistance across Dallas, Plano, Prosper, Celina, Allen, Richardson, and Van Alstyne. Owned & operated by <span className="text-amber-400 font-bold">Ali</span>.
            </p>

            <div className="pt-2 space-y-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center gap-2 text-sm font-black text-amber-400 hover:underline"
              >
                <Phone className="w-4 h-4" />
                Direct Line: {BUSINESS_INFO.phoneDisplay}
              </a>

              <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
                <Clock className="w-4 h-4" />
                Dispatch Status: 24/7 Active (365 Days)
              </div>
            </div>

            <div className="pt-2">
              <ShareButton />
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-black text-sm uppercase text-amber-400 tracking-wider">
              Roadside Services
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-amber-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-black text-sm uppercase text-amber-400 tracking-wider">
              North Texas Coverage
            </h4>
            <ul className="space-y-1.5 text-xs font-semibold text-slate-300">
              {SERVICE_CITIES.map((c) => (
                <li key={c.name} className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                  <span>{c.name} ({c.counties})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fast Contact CTAs Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-black text-sm uppercase text-amber-400 tracking-wider">
              Direct Contact
            </h4>

            <div className="space-y-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs py-2.5 px-3 rounded-xl shadow transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Ali Now
              </a>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs py-2.5 px-3 rounded-xl shadow transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                WhatsApp
              </a>

              <a
                href={BUSINESS_INFO.smsLink}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-xs py-2.5 px-3 rounded-xl shadow transition-colors flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5 text-amber-400" />
                Text (SMS)
              </a>
            </div>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400">
          <div>
            © {new Date().getFullYear()} Zacks Towing & Transportation. All rights reserved. Owned & Operated by Ali.
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Licensed & Insured in State of Texas</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
