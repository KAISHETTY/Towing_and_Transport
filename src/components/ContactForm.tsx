import React, { useState } from 'react';
import { BUSINESS_INFO, SERVICES } from '../data/towingData';
import { Send, MessageSquare, Phone, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    service: 'Emergency Towing',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) return;
    setSubmitted(true);
  };

  const whatsappMessage = `Hi Ali, my name is ${formData.name || 'a customer'}. I am located at ${formData.location || 'North Texas'}. I need help with ${formData.service}. My phone number is ${formData.phone || 'not provided'}. ${formData.notes ? 'Details: ' + formData.notes : ''}`;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
          
          <div className="text-center space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Direct Dispatch Form
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 tracking-tight">
              Request Immediate Assistance or Price Quote
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto">
              Fill out your breakdown location below for an immediate callback, or use the instant WhatsApp / Call buttons for fastest response.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-300 p-8 rounded-2xl text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-black text-2xl text-slate-950">
                Dispatch Request Received!
              </h3>
              <p className="text-sm font-semibold text-slate-700 max-w-md mx-auto">
                Ali is reviewing your breakdown details and will call you back at <span className="font-bold text-slate-950">{formData.phone}</span> in under 3 minutes.
              </p>
              
              <div className="pt-2 flex justify-center gap-3">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="bg-amber-500 text-slate-950 font-black px-5 py-3 rounded-xl text-sm shadow hover:bg-amber-600"
                >
                  Call Now to Expedite: {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                    Phone Number (Required)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(945) 444-5446"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                    Current Location / Address / Highway
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. US-75 & Spring Creek Pkwy, Plano"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} (From {s.startingPrice})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                  Additional Details / Vehicle Model
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. 2021 Ford F-150 stuck in muddy ditch, keys trapped inside..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>

              {/* Submit + WhatsApp Side-by-side */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-1/2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-4 px-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Request Form
                </button>

                <a
                  href={`https://wa.me/19454445446?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 text-center"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  Or Send Via WhatsApp Directly
                </a>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};
