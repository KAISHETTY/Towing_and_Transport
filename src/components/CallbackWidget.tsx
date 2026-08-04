import React, { useState } from 'react';
import { PhoneCall, Clock, CheckCircle2, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/towingData';

export const CallbackWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [requested, setRequested] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setRequested(true);
  };

  return (
    <>
      {/* Trigger button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-5 z-30 bg-slate-900 text-amber-400 hover:bg-slate-800 font-extrabold text-xs py-2.5 px-4 rounded-full shadow-2xl border border-amber-400/40 flex items-center gap-2 hover:scale-105 transition-all"
        >
          <PhoneCall className="w-4 h-4 text-amber-400" />
          <span>Request 5-Min Callback</span>
        </button>
      )}

      {/* Callback Drawer/Card */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 z-40 max-w-sm w-full bg-white border border-slate-200 rounded-3xl p-5 shadow-2xl space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-600 font-black text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              Callback Guarantee
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {requested ? (
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="font-display font-black text-slate-950 text-base">
                Callback Requested!
              </h4>
              <p className="text-xs text-slate-600 font-medium">
                Ali will call <span className="font-bold text-slate-900">{phone}</span> in under 5 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <h4 className="font-display font-black text-slate-950 text-base">
                  Prefer a callback?
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  Enter your number and Ali will call you back immediately.
                </p>
              </div>

              <input
                type="text"
                placeholder="Your Name (Optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <input
                type="tel"
                required
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs py-2.5 rounded-xl shadow transition-colors"
              >
                Call Me Back in 5 Minutes
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
};
