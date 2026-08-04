import React, { useState } from 'react';
import { PRICING_PLANS, BUSINESS_INFO } from '../data/towingData';
import { DollarSign, CheckCircle2, Phone, MessageSquare, ShieldCheck, Sparkles, X } from 'lucide-react';

export const PricingEstimate: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState('Flatbed Towing');

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5 text-amber-600" />
            Transparent Upfront Pricing
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight">
            No Hidden Fees. Fixed Phone Quotes.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            We believe in honest, straightforward pricing. What we quote you over the phone or WhatsApp before dispatch is the exact amount you pay.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-extrabold text-xl text-slate-950 group-hover:text-amber-600 transition-colors">
                    {plan.service}
                  </h3>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full">
                    Estimated Range
                  </span>
                </div>

                <div className="mt-3 font-display font-black text-3xl text-amber-600">
                  {plan.priceRange}
                </div>
                <div className="text-xs text-slate-500 font-semibold mt-1">
                  For: {plan.recommendedFor}
                </div>

                {/* Features checklist */}
                <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                  {plan.includes.map((inc, iIdx) => (
                    <div key={iIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 grid grid-cols-2 gap-2">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs py-2.5 px-3 rounded-xl text-center shadow transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Quote
                </a>
                <a
                  href={`https://wa.me/19454445446?text=Hi%20Ali,%20I%20would%20like%20a%20price%20quote%20for%20${encodeURIComponent(plan.service)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs py-2.5 px-3 rounded-xl text-center shadow transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 bg-white border border-slate-200 p-6 rounded-3xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-100 text-emerald-800 rounded-2xl shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-display font-extrabold text-slate-950 text-lg">
                100% Price Lock Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                No surprise night fees, no fuel surcharges, no gate fees. All quotes provided by phone or text are locked.
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="shrink-0 bg-slate-950 text-white hover:bg-slate-900 font-extrabold text-sm px-6 py-3.5 rounded-2xl shadow transition-transform hover:scale-105"
          >
            Get Locked Price: {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>

      </div>
    </section>
  );
};
