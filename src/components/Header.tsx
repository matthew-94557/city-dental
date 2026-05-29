/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <div
            id="brand-logo"
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 text-white shadow-md shadow-cyan-100 group-hover:scale-105 transition-transform">
              <Icon name="Smile" className="w-6 h-6 animate-pulse" />
              <div className="absolute -bottom-1 -right-1 w-4.5 h-4.5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                <Icon name="Sparkles" className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold tracking-wider text-slate-800 text-lg uppercase leading-none">
                City
              </span>
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#0e7490] leading-none mt-1">
                Dental Care
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'Services', id: 'services' },
              { label: 'Why Us', id: 'why-us' },
              { label: 'Reviews', id: 'reviews' },
              { label: 'Our Clinic', id: 'gallery' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-sans text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-500 hover:after:w-full after:transition-all"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Contact Details & Consultation Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              id="header-phone"
              href="tel:5125550123"
              className="flex items-center gap-2 text-slate-700 hover:text-cyan-600 font-sans text-sm font-semibold transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm text-cyan-500">
                <Icon name="Phone" size={14} />
              </div>
              <span>(512) 555-0123</span>
            </a>
            
            <button
              id="header-cta"
              onClick={onBookClick}
              className="bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-sans text-xs font-bold tracking-wider uppercase py-2.5 px-5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Navigation Toggle Button */}
          <div className="flex lg:hidden items-center gap-4">
            <a
              href="tel:5125550123"
              className="w-9 h-9 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100"
              title="Call Us"
            >
              <Icon name="Phone" size={15} />
            </a>
            
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 text-slate-700 flex items-center justify-center rounded-lg hover:bg-slate-50 cursor-pointer border border-slate-100"
            >
              <Icon name={isOpen ? 'X' : 'Menu'} size={22} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Panel Overlay */}
      {isOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-5 duration-200"
        >
          <div className="px-4 py-6 space-y-4 max-w-md mx-auto">
            <div className="grid grid-cols-1 gap-2">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'Our Services', id: 'services' },
                { label: 'Why Patients Choose Us', id: 'why-us' },
                { label: 'Patient Reviews', id: 'reviews' },
                { label: 'Our Clinic Environment', id: 'gallery' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left font-sans text-[15px] font-semibold text-slate-700 hover:text-cyan-600 py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <Icon name="ArrowRight" size={14} className="text-slate-400" />
                </button>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-5 space-y-4">
              <a
                href="tel:5125550123"
                className="flex items-center gap-3.5 px-4 py-3 bg-slate-50 rounded-lg text-slate-800 font-sans text-[15px] font-bold"
              >
                <Icon name="Phone" className="text-cyan-600" />
                <span>Call Us: (512) 555-0123</span>
              </a>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onBookClick();
                }}
                className="w-full bg-gradient-to-r from-cyan-600 to-sky-600 text-white font-sans font-bold tracking-wider uppercase py-3.5 rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Icon name="Calendar" size={16} />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
