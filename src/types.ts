/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  extendedDescription: string;
  iconName: string; // Lucide icon identifier
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  preferredTime: string;
  treatmentInterest: string;
}
