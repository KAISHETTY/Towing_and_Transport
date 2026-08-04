export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  startingPrice: string;
  features: string[];
}

export interface ServiceCity {
  name: string;
  counties: string;
  blurb: string;
  popularServices: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'coverage' | 'payment';
}

export interface RescueStory {
  id: string;
  title: string;
  location: string;
  service: string;
  responseTime: string;
  description: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface PricingPlan {
  service: string;
  priceRange: string;
  includes: string[];
  recommendedFor: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: { label: string; action: string; payload?: string }[];
  timestamp: string;
}
