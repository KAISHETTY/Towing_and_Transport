import React from 'react';
import { Phone, MessageSquare, Send, Clock, ShieldCheck, Award, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/towingData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          <div className="lg:col-span-7 space-y-6">

            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold tracking-wide text-slate-700 uppercase">
                Fastest Roadside Dispatch in North Texas
              </span>
              <span className="text-slate-300 font-bold">•</span>
              <span className="text-xs font-bold text-slate-500">Avg 15 Min Arrival</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-[1.08]">
              STRANDED? <br />
              <span className="text-brand-navy">
                WE'RE 15 MINUTES AWAY.
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-600 leading-relaxed max-w-2xl">
              24/7 Professional Towing & Emergency Roadside Rescue across Dallas, Plano, Prosper, Celina, Allen, Richardson & Van Alstyne. Owned & operated by <span className="font-bold text-slate-900">Ali</span> with over 10 years of trusted experience.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

              <a href={BUSINESS_INFO.phoneTel} className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 bg-brand-navy hover:bg-brand-navy/90 text-white font-black text-base px-6 py-4 rounded-2xl shadow-lg shadow-brand-navy/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5 group">
                <div className="bg-white/15 p-2 rounded-xl group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-display font-black text-base">
                  Call Now
                </span>
              </a>

              <a href={BUSINESS_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all">
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>WhatsApp Us</span>
              </a>

              <a href={BUSINESS_INFO.smsLink} className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm px-5 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all">
                <Send className="w-4 h-4" />
                <span>Text (SMS)</span>
              </a>

            </div>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-200 mt-2">
              <div className="flex items-center gap-2.5">
                <div className="bg-slate-100 p-2 rounded-xl text-brand-navy">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">24/7 Dispatch</span>
                  <span className="text-[11px] text-slate-500 font-medium">Day or Night</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="bg-slate-100 p-2 rounded-xl text-brand-navy">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">Licensed & Insured</span>
                  <span className="text-[11px] text-slate-500 font-medium">Full Coverage</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="bg-slate-100 p-2 rounded-xl text-brand-navy">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">10+ Years</span>
                  <span className="text-[11px] text-slate-500 font-medium">Local Experience</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="bg-slate-100 p-2 rounded-xl text-brand-navy">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">All North Texas</span>
                  <span className="text-[11px] text-slate-500 font-medium">Dallas to Grayson</span>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">

              <img
                src={BUSINESS_INFO.heroTruckImage}
                alt="Zacks Towing Flatbed Truck"
                className="w-full h-[380px] sm:h-[440px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2.5">
                <div className="bg-brand-navy text-white p-1.5 rounded-xl">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                    Truck Status
                  </div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Trucks Active on I-75 & I-35
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                    Need Emergency Help?
                  </span>
                  <span className="text-xs font-bold text-slate-500">Owner: Ali</span>
                </div>
                <div className="text-sm font-bold text-slate-900">
                  Flatbed Towing, Jump Starts, Lockouts & Winch-Outs
                </div>
                <div className="pt-1 flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Upfront Transparent Rates
                  </span>
                  <a href={BUSINESS_INFO.phoneTel} className="font-bold text-brand-navy underline">
                    Call Now
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
