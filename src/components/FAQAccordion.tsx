import React, { useState } from 'react';
import { FAQS, BUSINESS_INFO } from '../data/towingData';
import { HelpCircle, ChevronDown, ChevronUp, Phone, MessageSquare } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            Frequently Asked Questions
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-base text-slate-600 font-medium">
            Everything you need to know about Zacks Towing dispatch, pricing, insurance claims, and vehicle safety.
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-display font-bold text-slate-950 text-base sm:text-lg hover:text-amber-600 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-black text-amber-700 bg-amber-100 px-2.5 py-1 rounded-md shrink-0">
                      Q{idx + 1}
                    </span>
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm font-medium text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-white border border-amber-300 p-6 rounded-3xl text-center space-y-3 shadow-md">
          <h3 className="font-display font-extrabold text-xl text-slate-950">
            Have a question not answered here?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-lg mx-auto">
            Call or message owner Ali directly for immediate help with your roadside situation.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-5 py-3 rounded-xl text-sm shadow transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Ali: {BUSINESS_INFO.phoneDisplay}
            </a>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-5 py-3 rounded-xl text-sm shadow transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Ask on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
