import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Send, X, AlertTriangle, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/towingData';

type PopupType = 'exit' | 'timed' | 'scroll' | null;

export const Popups: React.FC = () => {
  const [activePopup, setActivePopup] = useState<PopupType>(null);
  const [dismissed, setDismissed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Timed Popup after 15 seconds
    const timer = setTimeout(() => {
      if (!dismissed['timed'] && !activePopup) {
        setActivePopup('timed');
      }
    }, 15000);

    // Scroll depth popup at 50%
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0 && scrollPos / docHeight > 0.5) {
        if (!dismissed['scroll'] && !dismissed['timed'] && !activePopup) {
          setActivePopup('scroll');
        }
      }
    };

    // Exit intent (mouse move to top edge)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) {
        if (!dismissed['exit'] && !activePopup) {
          setActivePopup('exit');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [activePopup, dismissed]);

  const closePopup = (type: PopupType) => {
    if (type) {
      setDismissed((prev) => ({ ...prev, [type]: true }));
    }
    setActivePopup(null);
  };

  if (!activePopup) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400 p-6 sm:p-8 text-center space-y-5">
        
        {/* Close Button */}
        <button
          onClick={() => closePopup(activePopup)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Dismiss Popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dynamic Header according to trigger type */}
        {activePopup === 'exit' && (
          <div className="space-y-2">
            <div className="w-14 h-14 bg-amber-500/10 text-amber-600 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div className="inline-block text-[11px] font-black uppercase text-amber-800 bg-amber-100 px-3 py-1 rounded-full tracking-wider">
              Emergency Roadside Dispatch
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-950">
              WAIT! STRANDED RIGHT NOW?
            </h3>
            <p className="text-sm font-medium text-slate-600">
              Don't get stuck waiting hours for insurance phone lines. Zacks Towing is 15 minutes away across North Texas.
            </p>
          </div>
        )}

        {activePopup === 'timed' && (
          <div className="space-y-2">
            <div className="w-14 h-14 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Clock className="w-8 h-8" />
            </div>
            <div className="inline-block text-[11px] font-black uppercase text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full tracking-wider">
              Need Immediate Roadside Help?
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-950">
              WE HAVE TRUCKS ACTIVE NEAR YOU
            </h3>
            <p className="text-sm font-medium text-slate-600">
              Speak directly with owner Ali right now for an instant locked quote and fast 15-minute dispatch.
            </p>
          </div>
        )}

        {activePopup === 'scroll' && (
          <div className="space-y-2">
            <div className="w-14 h-14 bg-sky-500/10 text-sky-600 rounded-full flex items-center justify-center mx-auto">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="inline-block text-[11px] font-black uppercase text-sky-800 bg-sky-100 px-3 py-1 rounded-full tracking-wider">
              Still Looking For Towing?
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-950">
              WE ARE 15 MINUTES AWAY
            </h3>
            <p className="text-sm font-medium text-slate-600">
              Get an instant locked rate over the phone with zero hidden hookup fees.
            </p>
          </div>
        )}

        {/* Triple Action Buttons */}
        <div className="space-y-2.5 pt-2">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-base py-4 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02]"
          >
            <Phone className="w-5 h-5" />
            <span>Call Ali Directly: {BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs py-3 px-4 rounded-xl shadow flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              WhatsApp Us
            </a>

            <a
              href={BUSINESS_INFO.smsLink}
              className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs py-3 px-4 rounded-xl shadow flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-amber-400" />
              Text (SMS)
            </a>
          </div>
        </div>

        <button
          onClick={() => closePopup(activePopup)}
          className="text-xs font-bold text-slate-400 hover:text-slate-600 underline pt-1 block mx-auto"
        >
          No thanks, I am just browsing
        </button>

      </div>
    </div>
  );
};
