/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';
import { Icon } from './Icon';

interface ServicesProps {
  onBookClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookClick }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative scroll-mt-10">
      
      {/* Decorative details */}
      <div className="absolute top-1/2 left-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title & headers */}
        <div id="services-header" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-[#0e7490] text-xs font-extrabold tracking-widest uppercase bg-cyan-50 py-1.5 px-3.5 rounded-full inline-block">
            Complete Care for a Healthy, Beautiful Smile
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
            Our Dental <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-600">Services</span>
          </h2>
          <p className="font-sans text-slate-600 text-[15px] sm:text-base leading-relaxed">
            From routine checkups and cleanings to advanced dental restorations and aesthetic cosmetic corrections, we provide responsive dental solutions for all our patients.
          </p>
        </div>

        {/* Services grid deck */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => setSelectedService(srv)}
              className="group relative p-8 bg-[#f8fafc] hover:bg-white border border-slate-100 hover:border-cyan-200/50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-start text-left select-none outline-none focus:ring-2 focus:ring-cyan-400"
              style={{ contentVisibility: 'auto' }}
            >
              
              {/* Highlight bar inside card */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500 group-hover:via-cyan-400 group-hover:to-sky-500 transition-all rounded-t-2xl" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-cyan-100/60 text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white flex items-center justify-center mb-6 shadow-sm shadow-cyan-50 transition-all">
                <Icon name={srv.iconName} size={22} className="group-hover:scale-110 transition-transform" />
              </div>

              {/* Headlines */}
              <h3 className="font-sans font-extrabold text-slate-800 text-lg group-hover:text-cyan-700 transition-colors mb-3">
                {srv.title}
              </h3>

              <p className="font-sans text-sm text-slate-600 leading-relaxed flex-grow">
                {srv.description}
              </p>

              {/* Interactive anchor triggers */}
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-cyan-600 group-hover:text-cyan-700 transition-colors">
                <span>Learn Details &amp; Procedures</span>
                <Icon name="ArrowRight" size={13} className="transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Outer Section Actions */}
        <div className="mt-14 text-center">
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 hover:border-cyan-500 bg-white hover:bg-cyan-50 text-slate-700 hover:text-cyan-700 font-sans text-xs font-bold tracking-wider uppercase rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <span>Schedule A Service Online</span>
            <Icon name="Calendar" size={14} />
          </button>
        </div>

      </div>

      {/* Services Detail Popup Modal Window */}
      {selectedService && (
        <div
          id="services-modal-backdrop"
          className="fixed inset-0 z-50 bg-[#020617]/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            id="services-modal-content"
            className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-9 max-w-xl w-full border border-slate-100 text-left animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close Button Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <Icon name="X" size={18} />
            </button>

            {/* Modal Icon and Categories */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-5 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-600 flex items-center justify-center">
                <Icon name={selectedService.iconName} size={24} />
              </div>
              <div>
                <span className="font-mono text-[9px] font-extrabold uppercase tracking-widest text-cyan-600">
                  RIVERSTONE TREATMENT DIRECTORY
                </span>
                <h3 className="font-sans font-extrabold text-slate-800 text-xl leading-none mt-1">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Expanded Detailed Description Paragraph */}
            <p className="font-sans text-slate-600 text-[15px] leading-relaxed mb-6">
              {selectedService.extendedDescription}
            </p>

            {/* Practice Commitments */}
            <div className="bg-slate-50 border border-slate-100/80 rounded-xl p-4 mb-6 space-y-3">
              <h4 className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                What to expect during your care
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={13} className="text-emerald-500 stroke-[3]" />
                  <span>Comprehensive Dental Evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={13} className="text-emerald-500 stroke-[3]" />
                  <span>State-of-the-Art Imaging Diagnostics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={13} className="text-emerald-500 stroke-[3]" />
                  <span>Detailed Treatment Plan Breakdown</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={13} className="text-emerald-500 stroke-[3]" />
                  <span>Relaxing Ambient Care Rooms</span>
                </div>
              </div>
            </div>

            {/* Final Reservation Triggers Actions */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <button
                onClick={() => {
                  setSelectedService(null);
                  onBookClick();
                }}
                className="flex-1 bg-gradient-to-r from-cyan-600 to-sky-600 text-white font-sans text-xs font-bold tracking-wider uppercase py-3.5 rounded-lg shadow-md hover:shadow-cyan-150 shadow-cyan-100 text-center cursor-pointer"
              >
                Book Dental Appointment
              </button>
              
              <button
                onClick={() => setSelectedService(null)}
                className="px-6 py-3.5 border border-slate-200 text-slate-600 font-sans text-xs font-semibold rounded-lg hover:bg-slate-50 cursor-pointer"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
