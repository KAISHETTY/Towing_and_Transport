import React from 'react';
import { CreditCard, DollarSign, Smartphone, CheckCircle2 } from 'lucide-react';

export const PaymentMethods: React.FC = () => {
  const methods = [
    { name: 'Cash', desc: 'Driver accepts cash on scene', icon: DollarSign },
    { name: 'Credit & Debit', desc: 'Visa, MasterCard, Amex, Discover', icon: CreditCard },
    { name: 'Apple Pay & Google Pay', desc: 'Tap to pay at truck', icon: Smartphone },
    { name: 'Zelle & Venmo', desc: 'Instant bank transfer', icon: CheckCircle2 }
  ];

  return (
    <section className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
          <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
            Flexible Payment Options
          </span>
          <h3 className="font-display font-black text-2xl text-slate-950">
            Accepted Payment Methods
          </h3>
          <p className="text-xs font-medium text-slate-500">
            Pay safely right at the truck after service is completed to your satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {methods.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl flex flex-col items-center text-center space-y-2 hover:border-amber-400 transition-colors"
              >
                <div className="p-3 bg-amber-500/10 text-amber-700 rounded-2xl">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-display font-black text-slate-950 text-base">
                  {m.name}
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
