import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';

import Layout from '@/components/layout/Layout';
import ScrollToTop from '@/components/common/ScrollToTop';
import { Toaster } from '@/components/ui/toaster';

import Home from '@/pages/Home';
import Features from './pages/Features';
import UseCases from './pages/UseCases';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import BlogDetailPage from './pages/BlogDetailPage';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Whitepapers from './pages/whitepapers/Whitepapers';
import WhitepaperDetailPage from './pages/whitepapers/[slug]';
import OwaspMobile from './pages/OwaspMobile';
import FAQ from './pages/FAQ';
import Partners from './pages/Partners';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import CookiesPolicy from './pages/CookiesPolicy';
import TermsOfService from './pages/TermsOfService';
import AcceptableUsePolicy from './pages/AcceptableUsePolicy';
import AboutUsPage from './pages/AboutUs';
import NotFound from './pages/not-found';
// ... other imports

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <Layout>
        <Routes>
           <Route path="/" element={<Home />} />
           
          <Route path="/features" element={<Features />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs/category/:category" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/category/:category" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/whitepapers" element={<Whitepapers />} />
          <Route path="/whitepapers/category/:category" element={<Whitepapers />} />
          <Route path="/whitepapers/:slug" element={<WhitepaperDetailPage />} />
          <Route path="/owasp-mobile" element={<OwaspMobile />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/partners" element={<Partners/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/terms-services" element={<TermsOfService />} />
          <Route path="/acceptable-policy" element={<AcceptableUsePolicy />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Toaster />
    </QueryClientProvider>
  );
}
