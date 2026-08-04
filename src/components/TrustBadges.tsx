import React from 'react';
import { ShieldCheck, Award, Users, Clock, CheckCircle2 } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    { title: 'Licensed & Insured', sub: '$1,000,000+ Liability', icon: ShieldCheck },
    { title: 'Locally Owned', sub: 'Operated by Ali', icon: Users },
    { title: '5-Star Rated', sub: '500+ Verified Reviews', icon: Award },
    { title: '24/7 Dispatch', sub: '365 Days a Year', icon: Clock },
    { title: 'Flatbed Safe', sub: 'Zero Damage Guarantee', icon: CheckCircle2 }
  ];

  return (
    <section className="py-10 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl flex items-center gap-3 shadow-2xs hover:border-amber-300 transition-all"
              >
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-700 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-black text-slate-950 text-xs sm:text-sm">
                    {b.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-bold mt-0.5">
                    {b.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
