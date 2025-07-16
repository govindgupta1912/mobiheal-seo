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
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
       <Helmet>
        <title>MobiHeal - Home</title>
        <meta name="description" content="Secure and scalable MDM solution for enterprises." />
        <meta property="og:title" content="MobiHeal - Home" />
        <meta property="og:description" content="Protect and manage your mobile workforce." />
      </Helmet>
      <Hero  className="my-8 py-12 px-4 md:px-8 bg-white shadow-sm rounded-2xl border border-gray-100"/>
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
