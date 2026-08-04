import React from 'react';
import { PhoneCall, Navigation, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/towingData';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      stepNum: '01',
      title: 'Call or WhatsApp Ali',
      desc: 'Dial (945) 444-5446 or send a text with your location pin. We provide an instant price quote right away.',
      icon: PhoneCall,
      highlight: 'Instant Quote'
    },
    {
      stepNum: '02',
      title: 'Truck Dispatched',
      desc: 'Our nearest flatbed tow truck or roadside service unit locks on your GPS pin and heads over immediately.',
      icon: Navigation,
      highlight: 'Live GPS Tracking'
    },
    {
      stepNum: '03',
      title: 'Rapid On-Site Arrival',
      desc: 'We arrive in an average of 15 to 20 minutes with high-vis safety gear, heavy equipment, and commercial tools.',
      icon: Truck,
      highlight: '15 Min Avg Arrival'
    },
    {
      stepNum: '04',
      title: 'Back On The Road',
      desc: 'Whether it is a tire change, jump start, lockout, or tow to your repair shop, your emergency is resolved cleanly.',
      icon: CheckCircle2,
      highlight: '100% Satisfaction'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-3.5 py-1 rounded-full">
            Simple 4-Step Process
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 tracking-tight">
            How Zacks Towing Rescues You
          </h2>
          <p className="text-slate-600 font-medium text-base">
            No complicated apps or long phone queues. Just 4 simple steps from stranded to safe.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 relative hover:shadow-lg hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-black text-2xl text-amber-500/80 group-hover:text-amber-600">
                      {step.stepNum}
                    </span>
                    <div className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-900 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="inline-block text-[10px] font-black uppercase text-amber-800 bg-amber-200/60 px-2.5 py-0.5 rounded-md mb-2">
                    {step.highlight}
                  </span>

                  <h3 className="font-display font-extrabold text-lg text-slate-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-amber-400">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call CTA Bar */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="inline-flex items-center gap-3 bg-slate-950 hover:bg-slate-900 text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl transition-all transform hover:scale-105"
          >
            <PhoneCall className="w-5 h-5 text-amber-400" />
            <span>Need Help Right Now? Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
