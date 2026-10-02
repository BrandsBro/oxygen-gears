import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import HomeProductGrid from "@/components/HomeProductGrid/HomeProductGrid";
import ComparisonSection from "@/components/ComparisonSection/ComparisonSection";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import WhyChooseOxliv from "@/components/WhyChooseOxliv/WhyChooseOxliv";
import Reviews from "@/components/Reviews/Reviews";
import FAQ from "@/components/FAQ/FAQ";
import CTABanner from "@/components/CTABanner/CTABanner";
import RevealSection from "@/components/RevealSection/RevealSection";

export default function Home() {
  return (
    <main>
      {/* Hero has its own entrance — no reveal wrapper */}
      <Hero />

      <RevealSection direction="up">
        <Features />
      </RevealSection>

      <RevealSection direction="up" delay={100}>
        <FeaturesSection />
      </RevealSection>

      <RevealSection direction="up" delay={100}>
        <HomeProductGrid />
      </RevealSection>

      <RevealSection direction="left">
        <ComparisonSection />
      </RevealSection>

      <RevealSection direction="up" delay={100}>
        <HowItWorks />
      </RevealSection>

      <RevealSection direction="fade">
        <WhyChooseOxliv />
      </RevealSection>

      <RevealSection direction="up" delay={100}>
        <Reviews csvUrl="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7ViyXXaS8ztprK23idlwxqx7Yew74w1QT-qHyjr4EjZHccxdA_DD3yfhsQmsBmWPzK5t00a2m--qh/pub?output=csv" />
      </RevealSection>

      <RevealSection direction="up">
        <FAQ />
      </RevealSection>

      <RevealSection direction="fade">
        <CTABanner />
      </RevealSection>
    </main>
  );
}

export const revalidate = 3600;
