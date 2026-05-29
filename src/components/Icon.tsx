/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Sparkles,
  Smile,
  Layers,
  Sun,
  Users,
  Activity,
  Compass,
  HeartHandshake,
  Tv,
  Clock,
  FileCheck,
  Coffee,
  Heart,
  Award,
  Star,
  Shield,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  ShieldAlert,
  Check,
  Eye,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  Sparkles,
  Smile,
  Layers,
  Sun,
  Users,
  Activity,
  Compass,
  HeartHandshake,
  Tv,
  Clock,
  FileCheck,
  Coffee,
  Heart,
  Award,
  Star,
  Shield,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  ShieldAlert,
  Check,
  Eye,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ArrowRight
};

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', size = 20 }) => {
  const IconComponent = iconMap[name as IconName] || HelpCircleComponent;
  return <IconComponent className={className} size={size} />;
};

// Fallback icon inside case name is not mapped
const HelpCircleComponent: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
};
