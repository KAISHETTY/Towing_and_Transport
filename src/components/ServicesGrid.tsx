import React, { useState } from 'react';
import { 
  SERVICES, 
  BUSINESS_INFO 
} from '../data/towingData';
import { ServiceItem } from '../types';
import { 
  Truck, 
  Disc, 
  Zap, 
  KeyRound, 
  Key, 
  Fuel, 
  ShieldAlert, 
  Bike, 
  Navigation, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Truck,
  Disc,
  Zap,
  KeyRound,
  Key,
  Fuel,
  ShieldAlert,
  Bike,
  Navigation
};

export const ServicesGrid: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 text-amber-900 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Full-Spectrum Roadside Solutions
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight">
            Our 24/7 Emergency Roadside Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Equipped with modern flatbed trucks, heavy hydraulic winches, and commercial jump boosters to solve any automotive emergency in North Texas.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Truck;

            return (
              <div
                key={service.id}
                className="bg-slate-50/70 border border-slate-200/80 rounded-3xl overflow-hidden hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Service Image Header */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  {/* Starting Price Tag */}
                  <div className="absolute top-3 right-3 bg-slate-950/90 text-amber-400 font-display font-black text-xs px-3 py-1.5 rounded-full border border-amber-400/30 shadow-md">
                    Starts at {service.startingPrice}
                  </div>

                  {/* Service Icon Badge */}
                  <div className="absolute bottom-3 left-4 bg-amber-500 text-slate-950 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-slate-900 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-200/60">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 grid grid-cols-2 gap-2">
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="inline-flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs py-2.5 px-3 rounded-xl shadow-sm transition-all text-center"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Call Now
                    </a>
                    <a
                      href={`https://wa.me/19454445446?text=Hi%20Ali,%20I%20need%20${encodeURIComponent(service.title)}%20at%20my%20location!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs py-2.5 px-3 rounded-xl shadow-sm transition-all text-center"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      WhatsApp
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Call Banner */}
        <div className="mt-14 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-3xl p-6 sm:p-8 shadow-xl text-slate-950 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-wider text-slate-900 bg-white/40 px-3 py-1 rounded-full inline-block">
              Unsure which service you need?
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-950">
              Speak directly with owner Ali right now
            </h3>
            <p className="text-sm font-semibold text-slate-900 max-w-xl">
              Describe your vehicle location and symptom — we give an immediate response time and fixed upfront estimate over the phone.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="shrink-0 bg-slate-950 text-white hover:bg-slate-900 font-black text-base px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 transition-transform hover:scale-105"
          >
            <div className="bg-amber-400 p-1.5 rounded-lg text-slate-950">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-amber-300 leading-none">
                Direct Line
              </span>
              <span className="font-display font-extrabold text-lg text-white">
                {BUSINESS_INFO.phoneDisplay}
              </span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
