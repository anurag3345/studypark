import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  path: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
}

export interface Destination {
  slug: string;
  isoCode: string;
  country: string;
  tagline: string;
  description: string;
  intakeMonths: string[];
  popularCourses: string[];
  averageTuition: string;
  flagEmoji: string;
  universityCount: string;
  image: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export interface Testimonial {
  id: string;
  name: string;
  destination: string;
  university: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  destination: string;
  university: string;
  course: string;
  year: string;
  story: string;
}

export interface BreadcrumbItem {
  label: string;
  path?: string;
}
