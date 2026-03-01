import { HeroSection } from '@/components/sections/HeroSection';
import { CredibilityBar } from '@/components/sections/CredibilityBar';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { FAQSection } from '@/components/sections/FAQSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CredibilityBar />
      <ProcessSection />
      <AboutSection />
      <FAQSection />
    </>
  );
}
