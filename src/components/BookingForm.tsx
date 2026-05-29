/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookingFormData } from '../types';
import { Icon } from './Icon';

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    preferredTime: '',
    treatmentInterest: ''
  });

  const [formErrors, setFormErrors] = useState<Partial<BookingFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors as user details update
    if (formErrors[name as keyof BookingFormData]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors: Partial<BookingFormData> = {};
    
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    
    const phoneRegex = /^[0-9+-\s()]{7,15}$/;
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Enter a valid phone number';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.emailAddress.trim()) {
      errors.emailAddress = 'Email address is required';
    } else if (!emailRegex.test(formData.emailAddress)) {
      errors.emailAddress = 'Enter a valid email address';
    }
    
    if (!formData.preferredTime) {
      errors.preferredTime = 'Please select a preferred time';
    }
    
    if (!formData.treatmentInterest) {
      errors.treatmentInterest = 'Please select a treatment category';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate clinical reservation API call
    setTimeout(() => {
      const generatedRef = `RSD-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(generatedRef);
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      preferredTime: '',
      treatmentInterest: ''
    });
    setFormErrors({});
    setIsConfirmed(false);
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#0284c7] relative text-white overflow-hidden scroll-mt-20">
      
      {/* Decorative background details */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Block text details (col-span-5) */}
          <div id="booking-headlines" className="lg:col-span-5 space-y-6">
            <span className="font-sans text-xs font-extrabold uppercase tracking-widest bg-cyan-400/35 border border-cyan-300/30 py-1.5 px-4 rounded-full inline-block">
              ✦ New Patient Offer
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none sm:leading-[1.1]">
              Start Your Healthiest Smile Today
            </h2>
            <p className="font-sans text-cyan-50 text-sm sm:text-base leading-relaxed max-w-lg">
              Schedule your new patient consultation and take the first step toward a healthier, more confident smile. Let our clinical specialist match your care path seamlessly.
            </p>

            <div className="space-y-4 pt-3 border-t border-cyan-400/40">
              {[
                { title: 'Comprehensive Exam', desc: 'Thorough evaluation & checkup' },
                { title: 'Personalized Treatment Plan', desc: 'No-pressure custom roadmap' },
                { title: 'Comfortable, No Pressure', desc: 'Anxiety-free, supportive care' }
              ].map((feat, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/20 border border-cyan-300/20 flex items-center justify-center shrink-0 text-cyan-200">
                    <Icon name="Check" size={14} className="stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-white">
                      {feat.title}
                    </h4>
                    <p className="font-sans text-xs text-cyan-100 mt-0.5">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side form block or confirmation state (col-span-7) */}
          <div id="booking-sheet-container" className="lg:col-span-7 flex justify-center items-center">
            <div className="bg-white text-slate-800 rounded-3xl p-6 sm:p-9 shadow-2xl border border-slate-100 w-full max-w-lg min-h-[460px] flex flex-col justify-center">
              
              {!isConfirmed ? (
                // Active Interactive Consultation Form
                <form id="appointment-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-center sm:text-left mb-6">
                    <h3 className="font-sans font-extrabold text-[#111827] text-xl">
                      Book Your Dental Consultation
                    </h3>
                    <p className="font-sans text-xs text-slate-400 mt-1">
                      Fill out the form below. We will secure your priority slot instantly.
                    </p>
                  </div>

                  {/* Top Inputs: Full Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-600 mb-1.5 uppercase">
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        className={`w-full bg-slate-50 border rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 placeholder-slate-400 ${
                          formErrors.fullName
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-slate-100 focus:ring-cyan-200'
                        }`}
                      />
                      {formErrors.fullName && (
                        <span className="text-[10px] text-red-500 font-bold block mt-1">
                          {formErrors.fullName}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-bold text-slate-600 mb-1.5 uppercase">
                        Phone Number
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="(512) 555-0199"
                        className={`w-full bg-slate-50 border rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 placeholder-slate-400 ${
                          formErrors.phoneNumber
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-slate-100 focus:ring-cyan-200'
                        }`}
                      />
                      {formErrors.phoneNumber && (
                        <span className="text-[10px] text-red-500 font-bold block mt-1">
                          {formErrors.phoneNumber}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email address */}
                  <div>
                    <label htmlFor="emailAddress" className="block text-xs font-bold text-slate-600 mb-1.5 uppercase">
                      Email Address
                    </label>
                    <input
                      id="emailAddress"
                      type="email"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      placeholder="john.doe31@gmail.com"
                      className={`w-full bg-slate-50 border rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 placeholder-slate-400 ${
                        formErrors.emailAddress
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-100 focus:ring-cyan-200'
                      }`}
                    />
                    {formErrors.emailAddress && (
                      <span className="text-[10px] text-red-500 font-bold block mt-1">
                        {formErrors.emailAddress}
                      </span>
                    )}
                  </div>

                  {/* Preferred Appointment Time and Treatment Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredTime" className="block text-xs font-bold text-slate-600 mb-1.5 uppercase">
                        Preferred Time
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 ${
                          formErrors.preferredTime
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-slate-100 focus:ring-cyan-200'
                        }`}
                      >
                        <option value="">Select Time Window</option>
                        <option value="Morning">Morning (8am - 12pm)</option>
                        <option value="Mid-day">Mid-day (12pm - 2pm)</option>
                        <option value="Afternoon">Afternoon (2pm - 4pm)</option>
                        <option value="Evening">Evening (4pm - 6pm)</option>
                      </select>
                      {formErrors.preferredTime && (
                        <span className="text-[10px] text-red-500 font-bold block mt-1">
                          {formErrors.preferredTime}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="treatmentInterest" className="block text-xs font-bold text-slate-600 mb-1.5 uppercase">
                        Treatment Interest
                      </label>
                      <select
                        id="treatmentInterest"
                        name="treatmentInterest"
                        value={formData.treatmentInterest}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 ${
                          formErrors.treatmentInterest
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-slate-100 focus:ring-cyan-200'
                        }`}
                      >
                        <option value="">Select Care Focus</option>
                        <option value="General Dentistry">General Checkup / Cleaning</option>
                        <option value="Cosmetic Dentistry">Cosmetic Smile Makeover</option>
                        <option value="Invisalign Aligners">Invisalign &amp; Clear Braces</option>
                        <option value="Dental Implants">Dental Implant Restorations</option>
                        <option value="Teeth Whitening">Professional Teeth Whitening</option>
                        <option value="Emergency Care">Emergency Same-Day Slot</option>
                      </select>
                      {formErrors.treatmentInterest && (
                        <span className="text-[10px] text-red-500 font-bold block mt-1">
                          {formErrors.treatmentInterest}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Submission triggers button */}
                  <button
                    id="submit-booking-button"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-sans text-xs font-bold uppercase tracking-widest py-3.5 rounded-lg shadow-md hover:shadow-cyan-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 transition-all flex items-center justify-center gap-2 cursor-pointer pt-4.5 pb-4.5"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        <span>Securing Slot...</span>
                      </>
                    ) : (
                      <>
                        <Icon name="Calendar" size={14} />
                        <span>Book My Consultation</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-slate-500 text-[11px] font-semibold pt-1">
                    <Icon name="Shield" size={11} className="text-emerald-500" />
                    <span>Privacy Assured. Your information is secure.</span>
                  </div>
                </form>
              ) : (
                // Consultation Confirmed Success Response Page
                <div
                  id="booking-confirmed-card"
                  className="space-y-6 text-center py-6 animate-in fade-in zoom-in-95 duration-300"
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center shadow-lg shadow-emerald-50 animate-bounce">
                      <Icon name="CheckCircle2" size={32} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-sans font-extrabold text-[#111827] text-2xl leading-none">
                      Consultation Confirmed!
                    </h3>
                    <p className="font-sans text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
                      Ticket Reference: {ticketId}
                    </p>
                  </div>

                  {/* Booking parameters metadata summary list */}
                  <div className="bg-[#f8fafc] border border-slate-100/80 rounded-xl p-4 text-left text-xs font-semibold space-y-2 max-w-sm mx-auto">
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-400">Patient:</span>
                      <span className="text-slate-700 font-bold">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-400">Department:</span>
                      <span className="text-slate-700 font-bold">{formData.treatmentInterest}</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-slate-400">Preferred Slot:</span>
                      <span className="text-slate-700 font-bold">{formData.preferredTime} Window</span>
                    </div>
                  </div>

                  <p className="font-sans text-[12.5px] leading-relaxed text-slate-500 max-w-xs mx-auto">
                    We have reserved your draft slot! A patient manager will call you at <strong className="text-slate-700">{formData.phoneNumber}</strong> within the next 15 minutes to secure and finalize your schedule.
                  </p>

                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-slate-200 text-slate-600 font-sans text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-slate-50 cursor-pointer transition-all"
                  >
                    <Icon name="ChevronLeft" size={12} />
                    <span>Schedule another</span>
                  </button>

                </div>
              )}

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
