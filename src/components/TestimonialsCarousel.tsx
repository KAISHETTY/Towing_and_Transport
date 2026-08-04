import React, { useState } from 'react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/towingData';
import { Star, ShieldCheck, ChevronLeft, ChevronRight, MessageSquare, Quote } from 'lucide-react';

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            5-Star Verified Reviews
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight">
            Loved By North Texas Drivers
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Over 500+ five-star customer experiences across Dallas, Plano, Prosper, Celina, Allen, Richardson, and Van Alstyne.
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden space-y-6">
            
            <div className="absolute top-6 right-6 text-amber-100">
              <Quote className="w-20 h-20 opacity-50" />
            </div>

            {/* Current Testimonial */}
            <div className="relative z-10 space-y-4">
              
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-800 font-medium text-lg sm:text-xl leading-relaxed italic">
                "{TESTIMONIALS[currentIndex].comment}"
              </p>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={TESTIMONIALS[currentIndex].avatar}
                    alt={TESTIMONIALS[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-400 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-display font-extrabold text-slate-950 text-base">
                      {TESTIMONIALS[currentIndex].name}
                    </h3>
                    <div className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                      <span>{TESTIMONIALS[currentIndex].location}</span>
                      <span>•</span>
                      <span className="text-amber-700 font-bold">{TESTIMONIALS[currentIndex].service}</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Verified Driver
                </div>
              </div>

            </div>

            {/* Navigation Controls */}
            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      currentIndex === idx ? 'w-8 bg-amber-500' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-amber-500 hover:text-slate-950 text-slate-700 transition-colors"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-amber-500 hover:text-slate-950 text-slate-700 transition-colors"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
