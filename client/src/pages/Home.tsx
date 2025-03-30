import Hero from "@/components/home/Hero";
import ClientsBanner from "@/components/home/ClientsBanner";
import FeaturesSection from "@/components/home/FeaturesSection";
import UseCasesSection from "@/components/home/UsesCasesSection";
import PricingSection from "@/components/home/PricingSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import FAQSection from "@/components/home/FAQSection";
import PartnersSection from "@/components/home/PartnersSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <>
      <Hero />
      <ClientsBanner />
      <FeaturesSection />
      <UseCasesSection />
      <PricingSection />
      <ResourcesSection />
      <FAQSection />
      <PartnersSection />
      <CTASection />
      <ContactSection />
    </>
  );
};

export default Home;
