import React from 'react';
import { Phone, MessageSquare, Send, Clock, ShieldCheck, Award, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/towingData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-500/10 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative gradient glow blobs */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-orange-400/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column - Copy & Triple CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Urgent Status Pill */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300/80 px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-black tracking-wide text-amber-950 uppercase">
                Fastest Roadside Dispatch in North Texas
              </span>
              <span className="text-amber-500 font-bold">•</span>
              <span className="text-xs font-extrabold text-slate-700">Avg 15 Min Arrival</span>
            </div>

            {/* Bold Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-[1.08]">
              STRANDED? <br />
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                WE'RE 15 MINUTES AWAY.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 leading-relaxed max-w-2xl">
              24/7 Professional Towing & Emergency Roadside Rescue across Dallas, Plano, Prosper, Celina, Allen, Richardson & Van Alstyne. Owned & operated by <span className="font-bold text-slate-900 underline decoration-amber-400 decoration-2">Ali</span> with over 10 years of trusted experience.
            </p>

            {/* Triple CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              
              {/* Call CTA */}
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-base px-6 py-4 rounded-2xl shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 group"
              >
                <div className="bg-slate-950 text-amber-400 p-2 rounded-xl group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-xs uppercase font-extrabold text-slate-900 tracking-wider">
                    CALL ALI DIRECTLY
                  </span>
                  <span className="font-display font-black text-lg text-slate-950">
                    {BUSINESS_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* WhatsApp CTA */}
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm px-5 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>WhatsApp Us</span>
              </a>

              {/* Text SMS CTA */}
              <a
                href={BUSINESS_INFO.smsLink}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm px-5 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>Text (SMS)</span>
              </a>

            </div>

            {/* Quick Feature Badges Strip */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-200/80">
              <div className="flex items-center gap-2.5">
                <div className="bg-amber-100 p-2 rounded-xl text-amber-700">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-black text-slate-900">24/7 Dispatch</span>
                  <span className="text-[11px] text-slate-500 font-medium">Day or Night</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="bg-emerald-100 p-2 rounded-xl text-emerald-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-black text-slate-900">Licensed & Insured</span>
                  <span className="text-[11px] text-slate-500 font-medium">Full Coverage</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="bg-sky-100 p-2 rounded-xl text-sky-700">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-black text-slate-900">10+ Years</span>
                  <span className="text-[11px] text-slate-500 font-medium">Local Experience</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="bg-orange-100 p-2 rounded-xl text-orange-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-black text-slate-900">All North Texas</span>
                  <span className="text-[11px] text-slate-500 font-medium">Dallas to Grayson</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Hero Visual Card & Truck Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              
              {/* Truck Picture */}
              <img
                src={BUSINESS_INFO.heroTruckImage}
                alt="Zacks Towing Flatbed Truck"
                className="w-full h-[380px] sm:h-[440px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

              {/* Floating Live Dispatch Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2.5">
                <div className="bg-emerald-500 text-white p-1.5 rounded-xl">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                    Truck Status
                  </div>
                  <div className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Trucks Active on I-75 & I-35
                  </div>
                </div>
              </div>

              {/* Bottom Card Detail Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-amber-600 uppercase tracking-wider">
                    Need Emergency Help?
                  </span>
                  <span className="text-xs font-bold text-slate-500">Owner: Ali</span>
                </div>
                <div className="text-sm font-extrabold text-slate-900">
                  Flatbed Towing, Jump Starts, Lockouts & Winch-Outs
                </div>
                <div className="pt-1 flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Upfront Transparent Rates
                  </span>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="font-extrabold text-slate-950 underline hover:text-amber-600"
                  >
                    {BUSINESS_INFO.phoneDisplay}
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
