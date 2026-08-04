import React from 'react';
import { RECENT_RESCUES, BUSINESS_INFO } from '../data/towingData';
import { Clock, MapPin, Truck, Phone, Sparkles, CheckCircle2 } from 'lucide-react';

export const RecentRescues: React.FC = () => {
  return (
    <section id="rescues" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 border border-emerald-300 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Real Roadside Cases
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight">
            Recent Roadside Rescues in North Texas
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            From sudden highway blowouts to muddy off-road winch-outs — here is how Zacks Towing solves roadside crises every single day.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RECENT_RESCUES.map((rescue) => (
            <div
              key={rescue.id}
              className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group"
            >
              {/* Image Column */}
              <div className="sm:w-2/5 h-56 sm:h-auto relative bg-slate-900 shrink-0">
                <img
                  src={rescue.image}
                  alt={rescue.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent sm:hidden"></div>

                <div className="absolute top-3 left-3 bg-emerald-500 text-white font-black text-[11px] px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{rescue.responseTime}</span>
                </div>
              </div>

              {/* Content Column */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{rescue.location}</span>
                    <span>•</span>
                    <span className="text-slate-600">{rescue.service}</span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-slate-950 group-hover:text-amber-600 transition-colors">
                    {rescue.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {rescue.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-200">
                  <span className="text-[11px] font-black text-slate-500 uppercase flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Resolved Cleanly
                  </span>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-xs font-extrabold text-amber-800 hover:underline flex items-center gap-1"
                  >
                    Call for Similar Service
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
