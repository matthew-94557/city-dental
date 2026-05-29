/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { VALUE_PROPOSITIONS } from '../data';
import { Icon } from './Icon';

export const DentistShowcase: React.FC = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#f8fafc] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Dr. Marcus Rivera showcase profile card (left column) */}
          <div id="dentist-showcase-profile" className="lg:col-span-12 xl:col-span-5 lg:w-4/5 lg:mx-auto xl:w-full">
            
            {/* Elegant framing wrapper */}
            <div className="relative bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300">
              
              {/* Highlight background embellishments */}
              <div className="absolute top-1/2 -right-12 w-24 h-24 bg-cyan-200/25 rounded-full blur-2xl -z-10" />

              {/* Portrait container with custom borders */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-50 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                  alt="Dr. Marcus Rivera - Lead Dentist posing professionally in clinical blue scrubs"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500 select-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-slate-100/50 rounded-lg py-1 px-2.5 text-[10px] font-extrabold uppercase tracking-wide text-cyan-700">
                  Lead Dentist
                </div>
              </div>

              {/* Dentist Name & Credentials text */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-sans font-extrabold text-[#1f2937] text-2xl leading-none">
                    Dr. Marcus Rivera
                  </h3>
                  <p className="font-sans text-xs font-bold text-slate-500 mt-1.5 uppercase tracking-wide">
                    Founder &amp; Lead Dentist
                  </p>
                </div>

                {/* Checklist features */}
                <div className="border-t border-b border-slate-100 py-4 space-y-2.5">
                  {[
                    '10+ Years of Private Practice Experience',
                    'Advanced Training in Cosmetic & Modern Implants',
                    'Highly Dedicated to Specialized Patient Care',
                  ].map((cred, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 flex items-center justify-center shrink-0">
                        <Icon name="Check" size={12} className="stroke-[3]" />
                      </div>
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>

                {/* Dentist signature illustration */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold leading-none">
                      CLINICAL CERTIFICATE
                    </span>
                    <span className="font-sans text-[11px] text-slate-500 font-bold leading-none mt-1">
                      Austin, Texas Directory
                    </span>
                  </div>
                  
                  {/* Styled cursive typography signature mimicking clinical handwritten seal */}
                  <div className="font-sans text-2xl font-extrabold italic text-cyan-700/80 tracking-wider">
                    Marcus Rivera
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Practice value qualities grid deck (right column) */}
          <div id="practice-values-block" className="lg:col-span-12 xl:col-span-7 flex flex-col items-start space-y-6">
            
            <div id="showcase-tag" className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 border border-cyan-100/60 rounded-full text-[#0e7490] font-sans text-xs font-extrabold uppercase tracking-wider">
              <span>✦</span> Why Patients Choose Us
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              Gentle Care. Modern Technology.<br className="hidden sm:inline" /> Healthy{' '}
              <span className="text-cyan-600">Smiles</span>.
            </h2>

            <p className="font-sans text-slate-600 text-[15px] sm:text-base leading-relaxed max-w-2xl">
              We understand that choosing a dentist is a highly personalized decision. We strive to exceed your care expectations by crafting a warm, comfortable space equipped with modern clinical technology to ensure efficiency, safeness, and absolute transparency.
            </p>

            {/* Structured Value Props Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-4">
              {VALUE_PROPOSITIONS.map((prop) => (
                <div
                  key={prop.id}
                  className="flex gap-4 p-5 bg-white border border-slate-100 hover:border-cyan-100 rounded-2xl hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 shadow-inner">
                    <Icon name={prop.iconName} size={18} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans font-extrabold text-slate-800 text-sm">
                      {prop.title}
                    </h4>
                    <p className="font-sans text-xs text-slate-500 leading-normal">
                      {prop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
