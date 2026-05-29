/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { Icon } from './Icon';

export const ClinicGallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev! - 1));
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#f8fafc] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header container */}
        <div id="gallery-headlines" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-[#0e7490] text-xs font-extrabold tracking-widest uppercase bg-cyan-50 py-1.5 px-3.5 rounded-full inline-block">
            A Modern, Relaxing Environment
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight">
            Designed With Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-600">Comfort</span> in Mind
          </h2>
          <p className="font-sans text-slate-600 text-[15px] sm:text-base leading-relaxed">
            Take a virtual tour of our contemporary dental space. We combine organic styles, warm ambient light, comfort stations, and clinical state-of-the-art tools.
          </p>
        </div>

        {/* Gallery items responsive bento deck */}
        <div id="gallery-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              style={{ contentVisibility: 'auto' }}
            >
              
              {/* Media Container */}
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Expand Overlay */}
                <div className="absolute inset-0 bg-[#0c4a6e]/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-350">
                  <div className="w-11 h-11 rounded-full bg-white text-[#0e7490] flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <Icon name="Eye" size={18} />
                  </div>
                </div>
              </div>

              {/* Text Label footer */}
              <div className="p-4 flex items-center justify-between">
                <span className="font-sans font-extrabold text-slate-800 text-sm">
                  {item.title}
                </span>
                <span className="text-slate-400 group-hover:text-cyan-500 transition-colors">
                  ➔
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox fullscreen Modal overlay window */}
      {lightboxIndex !== null && (
        <div
          id="gallery-lightbox-backdrop"
          className="fixed inset-0 z-50 bg-[#090d16]/95 backdrop-blur-md flex items-center justify-center p-4 select-none animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          
          {/* Close trigger button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 w-11 h-11 bg-white/10 hover:bg-white/25 border border-white/10 text-white rounded-full flex items-center justify-center hover:scale-105 transition-all cursor-pointer z-50"
            aria-label="Exit lightbox"
          >
            <Icon name="X" size={20} />
          </button>

          {/* Left Arrow anchor */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-6 w-12 h-12 bg-white/5 hover:bg-white/20 border border-white/5 text-white rounded-full flex items-center justify-center hover:scale-105 transition-all cursor-pointer z-40"
            aria-label="Previous Image"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          {/* Central Active Media Block */}
          <div
            className="relative flex flex-col items-center max-w-4xl w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_ITEMS[lightboxIndex].imageUrl}
              alt={GALLERY_ITEMS[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border-4 border-white/5 select-none animate-in zoom-in-95 duration-250"
              referrerPolicy="no-referrer"
            />
            
            {/* Symmetrical Label captions */}
            <div className="mt-5 text-center text-white/90">
              <span className="font-sans font-extrabold text-[#22d3ee] tracking-wider text-xs uppercase block">
                RIVERSTONE CLINICAL ENVIROMENT
              </span>
              <p className="font-sans text-base font-bold mt-1">
                {GALLERY_ITEMS[lightboxIndex].title}
              </p>
            </div>
          </div>

          {/* Right Arrow anchor */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-6 w-12 h-12 bg-white/5 hover:bg-white/20 border border-white/5 text-white rounded-full flex items-center justify-center hover:scale-105 transition-all cursor-pointer z-40"
            aria-label="Next Image"
          >
            <Icon name="ChevronRight" size={20} />
          </button>

        </div>
      )}

    </section>
  );
};
