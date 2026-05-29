/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Icon } from './Icon';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-[#0e7490] text-xs font-extrabold tracking-widest uppercase bg-cyan-50 py-1.5 px-3.5 rounded-full inline-block">
            Real Patients. Real Smiles.
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
            Smile <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-600">Stories</span>
          </h2>
          <p className="font-sans text-slate-600 text-[15px] sm:text-base leading-relaxed">
            Discover what our amazing patient community says about our personalized care, modern solutions, and cozy clinical environment.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Desktop Symmetrical Grid Layout */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative group"
              >
                
                {/* Accent Quotes decoration */}
                <div className="absolute top-6 right-6 text-cyan-200/50 group-hover:text-cyan-200 transition-colors pointer-events-none">
                  <Icon name="MessageSquare" size={32} />
                </div>

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Body quote */}
                  <blockquote className="font-sans text-sm text-slate-600 leading-relaxed italic">
                    "{t.quote}"
                  </blockquote>
                </div>

                {/* Patient summary metadata footer */}
                <div className="border-t border-slate-100/80 pt-4 mt-6 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-sans font-extrabold text-slate-800 text-sm">
                      {t.name}
                    </span>
                    <span className="font-sans text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-0.5">
                      {t.location}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Icon name="Check" size={12} className="stroke-[3]" />
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Interactive Mobile Slider Carousel Layout */}
          <div className="block lg:hidden relative w-full">
            <div className="overflow-hidden px-1">
              <div className="flex transition-transform duration-300 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {TESTIMONIALS.map((t) => (
                  <div key={t.id} className="w-full shrink-0 px-2">
                    <div className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-8 flex flex-col justify-between shadow-md relative min-h-[220px]">
                      
                      <div className="absolute top-6 right-6 text-cyan-200/50">
                        <Icon name="MessageSquare" size={28} />
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-0.5 text-amber-400">
                          {[...Array(t.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={14} className="fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <blockquote className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed italic">
                          "{t.quote}"
                        </blockquote>
                      </div>

                      <div className="border-t border-slate-100/80 pt-4 mt-6 flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="font-sans font-extrabold text-slate-800 text-sm">
                            {t.name}
                          </span>
                          <span className="font-sans text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-0.5">
                            {t.location}
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                          <Icon name="Check" size={11} className="stroke-[3]" />
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider navigation controls (chevron anchors) */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-slate-100 hover:border-cyan-500 bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-cyan-600 cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <Icon name="ChevronLeft" size={16} />
              </button>
              
              {/* Pagination Dots Indicators */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      activeIndex === i
                        ? 'bg-cyan-600 w-6'
                        : 'bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-slate-100 hover:border-cyan-500 bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-cyan-600 cursor-pointer"
                aria-label="Next Testimonial"
              >
                <Icon name="ChevronRight" size={16} />
              </button>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
};
