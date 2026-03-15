import { HeroSection } from '@/components/sections/HeroSection';
import { CredibilityBar } from '@/components/sections/CredibilityBar';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { FAQSection } from '@/components/sections/FAQSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CredibilityBar />
      <ProductsSection />
      <ProcessSection />
      <AboutSection />
      <FAQSection />
    </>
  );
}
