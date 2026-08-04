import React, { useState } from 'react';
import { SERVICE_CITIES, BUSINESS_INFO } from '../data/towingData';
import { MapPin, ChevronDown, ChevronUp, Phone, CheckCircle2, Navigation, ExternalLink } from 'lucide-react';

export const ServiceAreaMap: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="service-area" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            North Texas Coverage Zone
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight">
            Serving All of Dallas & Collin County
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Strategic highway positioning ensures 15 to 25 minute arrival anywhere in Dallas, Plano, Prosper, Celina, Allen, Richardson, Van Alstyne, and surrounding North Texas communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - City Cards Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {SERVICE_CITIES.map((city, idx) => {
              const isExpanded = expandedIndex === idx;

              return (
                <div
                  key={city.name}
                  className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-700 shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-extrabold text-slate-950 text-base sm:text-lg">
                          {city.name}
                        </h3>
                        <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block mt-0.5">
                          {city.counties}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-extrabold text-amber-700">
                      <span>{isExpanded ? 'Hide Info' : 'Read More'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 bg-slate-50/50 space-y-3">
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        {city.blurb}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="text-[11px] font-bold text-slate-500 uppercase">Popular:</span>
                        {city.popularServices.map((srv, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-extrabold text-slate-800 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs"
                          >
                            {srv}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2 flex items-center gap-3">
                        <a
                          href={BUSINESS_INFO.phoneTel}
                          className="inline-flex items-center gap-1.5 bg-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl hover:bg-amber-600 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          Call {city.name} Towing
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Closing Line */}
            <div className="bg-amber-500/10 border border-amber-300 p-4 rounded-2xl text-center space-y-1">
              <span className="text-xs font-black uppercase text-amber-900 tracking-wider">
                Location Not Listed Above?
              </span>
              <p className="text-sm font-bold text-slate-800">
                ...and more North Texas areas — call <a href={BUSINESS_INFO.phoneTel} className="underline text-amber-800">{BUSINESS_INFO.phoneDisplay}</a> to confirm your location instantly!
              </p>
            </div>
          </div>

          {/* Right Column - Map Embed Container */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border-4 border-white rounded-3xl overflow-hidden shadow-xl space-y-3 p-2 bg-slate-900">
              
              {/* Map Title Header */}
              <div className="bg-slate-900 text-white p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-amber-400" />
                  <div>
                    <span className="text-xs font-black uppercase text-amber-400 block tracking-wider">
                      Interactive Area Map
                    </span>
                    <span className="text-sm font-bold text-slate-100">
                      North Texas Service Corridor
                    </span>
                  </div>
                </div>
                <span className="text-xs font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2.5 py-1 rounded-full">
                  GPS Active
                </span>
              </div>

              {/* Google Maps iFrame Embed centered over North Texas (Dallas - Collin County) */}
              <div className="relative h-[360px] rounded-2xl overflow-hidden border border-slate-700">
                <iframe
                  title="Zacks Towing Service Area Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428980.2081525032!2d-96.98811804999998!3d33.02381220000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1e05a183533b%3A0x673295c52c2dfc8c!2sDallas-Fort%20Worth%20Metropolitan%20Area%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[0.2]"
                ></iframe>

                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-white flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">
                    Dispatch Base: Dallas & Van Alstyne
                  </span>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 font-extrabold hover:underline flex items-center gap-1"
                  >
                    Open Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-sm py-3.5 rounded-2xl shadow-md text-center block"
              >
                Call Ali to Confirm Your Highway Location
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
