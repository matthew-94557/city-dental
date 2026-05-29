/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, TestimonialItem, GalleryItem, ValueProposition } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with veneers, bonding, and custom smile makeovers.',
    extendedDescription: 'Get the aesthetic confidence you deserve. Our custom veneers, direct bonding, and complete smile rebuilds are crafted to compliment your natural facial features while maintaining a healthy bite structure.',
    iconName: 'Sparkles',
  },
  {
    id: 'invisalign',
    title: 'Invisalign & Braces',
    description: 'Straighten your smile comfortably with clear aligners or braces.',
    extendedDescription: 'Align your teeth discretely. As Gold-certified Invisalign providers, we map out your treatment path digitally so you can track progress and straighten your teeth with minimal disruption to your daily life.',
    iconName: 'Smile',
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent, natural-looking solutions for missing teeth.',
    extendedDescription: 'Restore both your smile and chewing function permanently. Our advanced 3D guiding technology allows for precise placement of durable, biocompatible dental implants that blend seamlessly with your natural teeth.',
    iconName: 'Layers',
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    description: 'Brighten your smile safely with professional whitening treatments.',
    extendedDescription: 'Achieve a shade up to eight times brighter in just one appointment. We use clinically formulated whitening systems coupled with protective gums barriers for rapid, long-lasting brightness with zero sensitivity.',
    iconName: 'Sun',
  },
  {
    id: 'family',
    title: 'Family Dentistry',
    description: 'Comprehensive care for patients of all ages in a friendly environment.',
    extendedDescription: 'From toddler dental checkups to senior care, we provide supportive, educational, and thorough oral hygiene treatments tailored to meet safety standards for family members at every stage of their lives.',
    iconName: 'Users',
  },
  {
    id: 'emergency',
    title: 'Emergency Care',
    description: 'Same-day appointments for urgent dental needs and pain relief.',
    extendedDescription: 'We understand that toothaches or accidental breaks can happen at any time. Our clinic reserves priority slots daily for active same-day walk-ins or emergency appointments to resolve pain immediately.',
    iconName: 'Activity',
  },
];

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    id: 'anxiety',
    title: 'Anxiety-Friendly Approach',
    description: 'We take extra time to ensure your comfort and peace of mind.',
    iconName: 'Compass',
  },
  {
    id: 'team',
    title: 'Experienced, Caring Team',
    description: 'A compassionate team that puts your needs first.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'tech',
    title: 'Advanced, Painless Technology',
    description: 'Modern tools for faster, more comfortable treatments.',
    iconName: 'Tv',
  },
  {
    id: 'scheduling',
    title: 'Flexible Scheduling',
    description: 'Evening and weekend appointments available.',
    iconName: 'Clock',
  },
  {
    id: 'transparent',
    title: 'Transparent & Honest Care',
    description: 'No pressure. Just honest recommendations you can trust.',
    iconName: 'FileCheck',
  },
  {
    id: 'welcoming',
    title: 'Welcoming Environment',
    description: 'Designed to help you relax from the moment you arrive.',
    iconName: 'Coffee',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'jessica-t',
    name: 'Jessica T.',
    location: 'Austin, TX',
    quote: 'I used to dread going to the dentist, but the team at City Dental made me feel so comfortable. Best experience I\'ve ever had!',
    rating: 5,
  },
  {
    id: 'michael-r',
    name: 'Michael R.',
    location: 'Austin, TX',
    quote: 'The office is beautiful, the staff is amazing, and my smile has never looked better. Highly recommend!',
    rating: 5,
  },
  {
    id: 'samantha-l',
    name: 'Samantha L.',
    location: 'Round Rock, TX',
    quote: 'From the atmosphere to the care, everything is top-notch. I finally found a dentist I can trust.',
    rating: 5,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'waiting',
    title: 'Relaxing Waiting Area',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'treatment',
    title: 'Advanced Treatment Rooms',
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'technology',
    title: 'State-of-the-Art Technology',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'team',
    title: 'Friendly, Caring Team',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
  },
];
