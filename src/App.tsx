import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/shared/Layout";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import PortfolioPage from "./pages/Portfolio";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQPage from "./pages/FAQ";
import TherapistLanding from "./pages/TherapistLanding";
import TherapistLocationLanding from "./pages/TherapistLocationLanding";
import NotFound from "./pages/NotFound";
import HubPage from "./pages/HubPage";
import ServicePage from "./pages/ServicePage";
import AuditPage from "./pages/AuditPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/:slug" element={<ServicePage />} />
            <Route path="/hub/:slug" element={<HubPage />} />
            <Route path="/therapists" element={<TherapistLanding />} />
            <Route
              path="/therapists/:location"
              element={<TherapistLocationLanding />}
            />
            <Route path="/audit" element={<AuditPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
