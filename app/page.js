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

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <FeaturesSection />
      <HomeProductGrid />
      <ComparisonSection />
      <HowItWorks />
      <WhyChooseOxliv />
      <Reviews csvUrl="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7ViyXXaS8ztprK23idlwxqx7Yew74w1QT-qHyjr4EjZHccxdA_DD3yfhsQmsBmWPzK5t00a2m--qh/pub?output=csv" />
      <FAQ />
      <CTABanner />
    </main>
  );
}

export const revalidate = 3600;
