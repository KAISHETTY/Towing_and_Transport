import React from 'react';
import { Phone, MessageSquare, AlertTriangle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/towingData';

export const StickyMobileBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-slate-950/95 backdrop-blur-md border-t border-amber-400/40 px-3 py-2.5 shadow-2xl">
      <div className="flex items-center justify-between gap-2">
        
        {/* Left Status */}
        <div className="flex items-center gap-1.5 text-white shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <div>
            <span className="block text-[10px] font-black uppercase tracking-wider text-amber-400 leading-none">
              Stranded Now?
            </span>
            <span className="text-xs font-black text-white leading-none">
              15 Min ETA
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 text-white p-2.5 rounded-xl font-bold flex items-center justify-center shadow"
            aria-label="WhatsApp Us"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
          </a>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl shadow-lg flex items-center justify-center gap-1.5 animate-pulse-subtle flex-1"
          >
            <Phone className="w-4 h-4" />
            <span>Call (945) 444-5446</span>
          </a>
        </div>

      </div>
    </div>
  );
};
