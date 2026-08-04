import React from 'react';
import { Navbar } from './components/Navbar';
import { SocialProofTicker } from './components/SocialProofTicker';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { StatsCounter } from './components/StatsCounter';
import { HowItWorks } from './components/HowItWorks';
import { ServiceAreaMap } from './components/ServiceAreaMap';
import { RecentRescues } from './components/RecentRescues';
import { PricingEstimate } from './components/PricingEstimate';
import { PhotoGallery } from './components/PhotoGallery';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { FAQAccordion } from './components/FAQAccordion';
import { PaymentMethods } from './components/PaymentMethods';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';
import { CallbackWidget } from './components/CallbackWidget';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Popups } from './components/Popups';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Social Proof Ticker */}
      <SocialProofTicker />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        <ServicesGrid />
        <WhyChooseUs />
        <StatsCounter />
        <HowItWorks />
        <ServiceAreaMap />
        <RecentRescues />
        <PricingEstimate />
        <PhotoGallery />
        <TestimonialsCarousel />
        <FAQAccordion />
        <PaymentMethods />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Widgets & Popups */}
      <ChatbotWidget />
      <CallbackWidget />
      <StickyMobileBar />
      <Popups />
    </div>
  );
}
