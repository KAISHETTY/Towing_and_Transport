import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  Award, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Phone,
  Truck
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/towingData';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: '10+ Years Local Experience',
      desc: 'Owner Ali has personally operated towing rigs across North Texas since 2014, knowing every highway cutoff and shortcut.',
      icon: Award,
      color: 'bg-amber-100 text-amber-800'
    },
    {
      title: '15-Minute Rapid Response',
      desc: 'Positioned strategically near US-75, I-35E, I-635, and DNT for ultra-fast dispatch to your exact GPS pin.',
      icon: Clock,
      color: 'bg-emerald-100 text-emerald-800'
    },
    {
      title: '100% Upfront Pricing',
      desc: 'Zero hidden hookup fees or surprise mileage add-ons. The quote you receive on the phone is the exact price you pay.',
      icon: DollarSign,
      color: 'bg-sky-100 text-sky-800'
    },
    {
      title: 'Licensed, Bonded & Insured',
      desc: 'Fully state-licensed in Texas with $1M+ commercial liability insurance to protect your luxury sedan, SUV, or truck.',
      icon: ShieldCheck,
      color: 'bg-orange-100 text-orange-800'
    }
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Copy & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-900 border border-amber-300 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Why Zacks Towing Leads North Texas
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight leading-tight">
                Built On Trust, Speed & Safe Vehicle Handling
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                We know being stranded on a busy shoulder or stuck with a dead battery is frustrating. Zacks Towing is engineered around immediate dispatch, respectful communication, and flawless towing execution.
              </p>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {points.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${p.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-slate-900 text-base">
                        {p.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call Ali Box */}
            <div className="bg-white p-5 rounded-2xl border border-amber-300 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl shrink-0">
                  Ali
                </div>
                <div>
                  <div className="text-xs font-black uppercase text-amber-700 tracking-wider">
                    Direct Owner Operator
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">
                    "I answer every call personally to ensure top service."
                  </div>
                </div>
              </div>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="shrink-0 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-5 py-3 rounded-xl text-sm shadow transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Ali Now
              </a>
            </div>

          </div>

          {/* Right Column - Live Response Counter & Photo Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000"
                alt="Zacks Towing Flatbed Rig"
                className="w-full h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              {/* Animated Live Response Time Counter Badge */}
              <div className="absolute top-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-100 shadow-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    Live Dispatch Metrics
                  </span>
                  <span className="text-xs font-bold text-slate-500">North Texas</span>
                </div>

                <div className="flex items-baseline justify-between pt-1">
                  <div>
                    <div className="font-display font-black text-4xl text-slate-950">
                      15-20 <span className="text-lg text-amber-600">MINS</span>
                    </div>
                    <div className="text-xs font-extrabold text-slate-600">
                      Average Driver Arrival Time
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-display font-black text-2xl text-emerald-600">
                      99.4%
                    </div>
                    <div className="text-[11px] font-bold text-slate-500">
                      On-Time Dispatch
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-700 font-semibold">
                  <span>GPS Highway Dispatch</span>
                  <span className="text-amber-700 font-extrabold">Dallas & Collin Co.</span>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 backdrop-blur-md p-4 rounded-2xl border border-amber-400/30 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-500 text-slate-950 rounded-xl">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-amber-300">
                      Full Fleet Ready
                    </div>
                    <div className="text-xs text-slate-300">
                      Flatbeds, Wheel-Lifts & Heavy Winches
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
