import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import ProductShowcase from "@/components/ProductShowcase/ProductShowcase";
import EverydayLife from "@/components/EverydayLife/EverydayLife";
import OurStory from "@/components/OurStory/OurStory";
import FAQ from "@/components/FAQ/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ProductShowcase />
      <EverydayLife />
      <OurStory />
      <FAQ />
    </main>
  );
}
