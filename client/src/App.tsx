import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Features from "@/pages/Features";
import UseCases from "@/pages/UseCases";
import Pricing from "@/pages/Pricing";
import Resources from "@/pages/Resources";
import Blog from "@/pages/Blog";
import CaseStudies from "@/pages/CaseStudies";
import Whitepapers from "@/pages/Whitepapers";
import OwaspMobile from "@/pages/OwaspMobile";
import FAQ from "@/pages/FAQ";
import Partners from "@/pages/Partners";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import BlogDetailPage from "./pages/BlogDetailPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/use-cases" component={UseCases} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/resources" component={Resources} />
      <Route path="/blog" component={Blog} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/whitepapers" component={Whitepapers} />
      <Route path="/owasp-mobile" component={OwaspMobile} />
      <Route path="/faq" component={FAQ} />
      <Route path="/partners" component={Partners} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/contact" component={Contact} />
      {/* <Route path="/blog-deatails" component={BlogDetailPage}/> */}
      <Route path="/blog/:slug" component={BlogDetailPage} />
      

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Router />
      </Layout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
