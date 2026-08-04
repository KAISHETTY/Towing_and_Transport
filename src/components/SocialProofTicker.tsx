import React from 'react';
import { TICKER_UPDATES } from '../data/towingData';
import { Truck, CheckCircle2, MapPin } from 'lucide-react';

export const SocialProofTicker: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white py-2 overflow-hidden border-y border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-3">
        <div className="shrink-0 flex items-center gap-1.5 bg-amber-500 text-slate-950 text-[11px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider">
          <Truck className="w-3.5 h-3.5" />
          Live Dispatches
        </div>
        
        <div className="overflow-hidden whitespace-nowrap relative w-full no-scrollbar">
          <div className="inline-flex gap-8 animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
            {[...TICKER_UPDATES, ...TICKER_UPDATES].map((update, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 text-xs font-semibold text-amber-100/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{update}</span>
                <span className="text-amber-500/40 ml-4 font-bold">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
