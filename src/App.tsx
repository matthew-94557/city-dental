/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { DentistShowcase } from './components/DentistShowcase';
import { Testimonials } from './components/Testimonials';
import { ClinicGallery } from './components/ClinicGallery';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToBooking = () => {
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      const offset = 80; // Match header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = bookingElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Match header height
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
    <div id="landing-page-root" className="min-h-screen bg-white text-slate-800 antialiased selection:bg-cyan-500 selection:text-white">
      
      {/* 1. Header Navigation Bar */}
      <Header onBookClick={handleScrollToBooking} />

      {/* 2. Main content content deck */}
      <main id="landing-page-main">
        {/* Hero Section */}
        <Hero onBookClick={handleScrollToBooking} />

        {/* Services Directory Section */}
        <Services onBookClick={handleScrollToBooking} />

        {/* Dentist showcase credentials section */}
        <DentistShowcase />

        {/* Happy patient testimonials carousel section */}
        <Testimonials />

        {/* Virtual Tour environment grid gallery section */}
        <ClinicGallery />

        {/* Multi-feature responsive Reservation Card section */}
        <BookingForm />
      </main>

      {/* 3. Footer Site Links Info Section */}
      <Footer onLinkClick={handleScrollToSection} />

    </div>
  );
}
