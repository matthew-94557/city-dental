/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Icon } from './Icon';

interface FooterProps {
  onLinkClick: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-slate-900 text-slate-400 py-16 scroll-mt-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid Deck */}
        <div id="footer-main-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-slate-800 pb-12 mb-10">
          
          {/* Column 1: Brand & Desc (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 text-white flex items-center justify-center shadow-md">
                <Icon name="Smile" size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold tracking-wider text-white text-base uppercase leading-none">
                  City
                </span>
                <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-cyan-400 leading-none mt-1">
                  Dental Care
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-450 leading-relaxed max-w-sm">
              We focus on providing highly supportive, precise, and comfortable dental care treatments for families throughout Austin, Texas. Healthier smiles for life.
            </p>

            {/* Social media badges */}
            <div className="flex gap-2.5 pt-2">
              {['Heart', 'Users', 'Tv'].map((scLogo, idx) => (
                <div key={idx} className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-slate-750 flex items-center justify-center border border-slate-700/40 cursor-pointer transition-colors">
                  <Icon name={scLogo} size={14} />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-extrabold text-white text-xs uppercase tracking-wider">
              Quick Links
            </h4>
            <ul id="footer-quick-links" className="space-y-2.5 text-xs font-semibold">
              {[
                { label: 'Home Page', id: 'hero' },
                { label: 'Our Services', id: 'services' },
                { label: 'Why Choose Us', id: 'why-us' },
                { label: 'Patient Reviews', id: 'reviews' },
                { label: 'Our Facilities', id: 'gallery' }
              ].map((lnk, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onLinkClick(lnk.id)}
                    className="hover:text-cyan-400 transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {lnk.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details (col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans font-extrabold text-white text-xs uppercase tracking-wider">
              Contact Us
            </h4>
            <div id="footer-contact-details" className="space-y-3.5 text-xs font-semibold">
              <div className="flex gap-3">
                <Icon name="MapPin" size={16} className="text-cyan-500 shrink-0" />
                <span className="leading-relaxed">
                  123 City Dental Way, Suite 100,<br />Austin, TX 78701
                </span>
              </div>

              <a
                href="tel:5125550123"
                className="flex items-center gap-3 hover:text-cyan-400 transition-colors"
              >
                <Icon name="Phone" size={16} className="text-cyan-500" />
                <span>(512) 555-0123</span>
              </a>

              <a
                href="mailto:hello@citydentalcare.com"
                className="flex items-center gap-3 hover:text-cyan-400 transition-colors"
              >
                <Icon name="Mail" size={16} className="text-cyan-500" />
                <span>hello@citydentalcare.com</span>
              </a>
            </div>
          </div>

          {/* Column 4: Hours (col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans font-extrabold text-white text-xs uppercase tracking-wider">
              Hours of Operation
            </h4>
            <div id="footer-hours-details" className="space-y-2 text-xs font-semibold">
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span>Mon - Thu:</span>
                <span className="text-slate-300 font-extrabold">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span>Friday:</span>
                <span className="text-slate-300 font-extrabold">8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span>Saturday:</span>
                <span className="text-slate-300 font-extrabold">9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-cyan-400 font-extrabold">Closed</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Meta bottom copyright credentials summary */}
        <div id="footer-terms-row" className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <span className="text-center sm:text-left">
            &copy; {currentYear} City Dental. Recreated beautifully. All rights reserved.
          </span>
          <div className="flex gap-6">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">HIPAA Consent</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
