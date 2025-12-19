import React from 'react';
import Header from '../components/Header';
import StorySection from '../components/StorySection';
import ServicesSection from '../components/ServicesSection';
import GuaranteeSection from '../components/GuaranteeSection';
import DecisionSection from '../components/DecisionSection';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import { ScrollProgress } from '../components/ui/scroll-progress';
import { StickyNav } from '../components/StickyNav';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <StickyNav />
      <Header />
      <StorySection />
      <ServicesSection />
      <GuaranteeSection />
      <DecisionSection />
      <ProcessSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;