export interface NavLink {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export interface TestimonialItem {
  id: string;
  rating: number;
  quote: string;
  author: string;
  role: string;
  initials: string;
  avatarUrl?: string;
}

export interface EcoFeature {
  icon: string;
  title: string;
  description: string;
}

export interface EcoMetric {
  value: string;
  label: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}

export interface BusinessHours {
  weekdays: string;
  saturday: string;
  sunday: string;
}

export interface SiteConfig {
  name: string;
  brandAcent: string;
  title: string;
  description: string;
  tagline: string;
  contact: ContactInfo;
  hours: BusinessHours;
  whatsapp?: {
    number: string;
    message: string;
  };
  repository?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TrustBadge {
  label: string;
  description: string;
}
