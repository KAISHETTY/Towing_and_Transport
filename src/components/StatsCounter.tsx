import React from 'react';
import { Award, ShieldCheck, Clock, Users } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const stats = [
    {
      value: '10+',
      label: 'Years in Business',
      desc: 'Trusted automotive service in North Texas',
      icon: Award
    },
    {
      value: '5,000+',
      label: 'Vehicles Rescued',
      desc: 'From highway blowouts to off-road winches',
      icon: Users
    },
    {
      value: '24/7/365',
      label: 'Dispatch Availability',
      desc: 'Always open holidays, rain, or middle of night',
      icon: Clock
    },
    {
      value: '15 MIN',
      label: 'Average Response',
      desc: 'Fastest arrival across Dallas & Collin County',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white relative border-y border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/60 backdrop-blur-sm border border-amber-500/20 p-6 rounded-2xl hover:border-amber-400/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-display font-black text-3xl sm:text-4xl text-amber-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="font-bold text-slate-100 text-sm mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
