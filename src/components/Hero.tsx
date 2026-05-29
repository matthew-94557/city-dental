/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Icon } from './Icon';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="hero" className="relative pt-24 lg:pt-36 pb-16 lg:pb-24 bg-gradient-to-b from-slate-50 via-cyan-50/10 to-white overflow-hidden">
      
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero text credentials (left column) */}
          <div id="hero-headlines" className="lg:col-span-6 flex flex-col items-start space-y-6">
            
            <div id="hero-tag" className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 border border-cyan-100 rounded-full text-cyan-700 font-sans text-xs font-extrabold uppercase tracking-wider">
              <span>✦</span> Austin's Modern Dental Experience
            </div>

            <h1 id="hero-title" className="font-sans text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-slate-800 tracking-tight leading-[1.1] sm:leading-[1.15]">
              Comfortable, Modern Dental Care Designed Around{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-600 relative inline-block">
                Your Smile
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-cyan-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              .
            </h1>

            <p id="hero-subtitle" className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              At City Dental Care, we combine advanced digital technology with a gentle, supportive approach to help you feel confident, comfortable, and thoroughly cared for at every stage of your appointment.
            </p>

            {/* Quick value circular cards layout */}
            <div id="hero-grid-features" className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-2">
              {[
                { icon: 'Heart', title: 'Gentle Care', desc: 'Pain-Free focus' },
                { icon: 'Tv', title: 'Advanced Tech', desc: 'Digital safety' },
                { icon: 'Coffee', title: 'Relaxing Space', desc: 'Comfortable lobby' },
                { icon: 'Award', title: 'Expert Team', desc: 'ADA Registered' },
              ].map((feat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-3.5 bg-white border border-slate-100/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center mb-2 shadow-inner">
                    <Icon name={feat.icon} size={18} />
                  </div>
                  <span className="font-sans text-xs font-bold text-slate-800 leading-tight">
                    {feat.title}
                  </span>
                  <span className="font-sans text-[10px] text-slate-500 mt-0.5 leading-none">
                    {feat.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Main call to actions */}
            <div id="hero-actions-container" className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-3">
              <button
                id="hero-book-cta"
                onClick={onBookClick}
                className="group bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-sans text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-xl shadow-lg hover:shadow-cyan-200/50 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Book My Dental Consultation</span>
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            {/* Subtext under action buttons */}
            <div className="flex items-center gap-2 text-slate-500 font-sans text-xs pt-1">
              <span className="text-emerald-500">✦</span>
              <span>New patients receive a comprehensive exam &amp; personalized treatment plans.</span>
            </div>

          </div>

          {/* Patient / treatment ambient hero visuals (right column) */}
          <div id="hero-illustrations" className="lg:col-span-6 relative w-full flex justify-center items-center">
            
            {/* Visual design embellishments */}
            <div className="absolute -top-6 -left-6 w-12 h-12 text-cyan-200 border-t-4 border-l-4 border-cyan-400/30 rounded-tl-2xl hidden sm:block" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 text-slate-200 border-b-4 border-r-4 border-slate-300/30 rounded-br-2xl hidden sm:block" />
            
            {/* Main high fidelity image wrapper */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 w-full max-w-lg aspect-4/3 sm:aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                alt="Patient sitting comfortably and smiling in a digital dental chair"
                className="w-full h-full object-cover select-none object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating visual indicators or highlights */}
            <div className="absolute -bottom-8 left-4 py-1.5 px-3 bg-emerald-500 text-white rounded-lg flex items-center gap-1.5 text-xs font-bold shadow-md shadow-emerald-100 hidden sm:flex">
              <Icon name="Check" size={12} className="stroke-[3]" />
              <span>Pain-free, Gentle Guarantee</span>
            </div>

          </div>

        </div>

        {/* Floating statistics grid card spanning full width at bottom of Hero on desktop */}
        <div
          id="hero-stats-bar"
          className="mt-16 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-100/80 p-5 lg:p-7 grid grid-cols-2 md:grid-cols-4 gap-6 relative"
        >
          {/* Card 1: Google Reviews */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:border-r border-slate-100 last:border-0 md:pr-4">
            <div className="flex items-center gap-1 mb-1 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
              <span className="font-sans font-extrabold text-xs text-amber-600">Google</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={10} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <span className="font-sans font-extrabold text-slate-800 text-lg">
              4.9/5 Rating
            </span>
            <span className="font-sans text-xs text-slate-500 mt-1">
              Top-rated Austin Dental Clinic
            </span>
          </div>

          {/* Card 2: 5-Star Reviews */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:border-r border-slate-100 last:border-0 md:px-4">
            <span className="font-sans font-extrabold text-cyan-600 text-2xl lg:text-3xl leading-none">
              500+
            </span>
            <span className="font-sans font-bold text-slate-800 text-sm mt-1">
              5-Star Reviews
            </span>
            <span className="font-sans text-xs text-slate-500 mt-1">
              Verified patient reviews
            </span>
          </div>

          {/* Card 3: 10+ Years Serving */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:border-r border-slate-100 last:border-0 md:px-4">
            <span className="font-sans font-extrabold text-sky-600 text-2xl lg:text-3xl leading-none">
              10+ Years
            </span>
            <span className="font-sans font-bold text-slate-800 text-sm mt-1">
              Serving Austin
            </span>
            <span className="font-sans text-xs text-slate-500 mt-1">
              Trusted community oral health
            </span>
          </div>

          {/* Card 4: ADA Badge */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:px-4">
            <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center mb-1">
              <Icon name="Shield" size={16} />
            </div>
            <span className="font-sans font-extrabold text-slate-800 text-sm leading-none">
              ADA Member
            </span>
            <span className="font-sans text-xs text-slate-500 mt-1.5">
              American Dental Association
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
