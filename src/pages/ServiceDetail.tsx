import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout, RefreshCw, ShoppingCart, Search, MousePointerClick, Share2, CheckCircle2 } from "lucide-react";

const servicesData: Record<string, {
  icon: typeof Layout;
  title: string;
  headline: string;
  paragraph: string;
  benefits: string[];
}> = {
  "website-design": {
    icon: Layout,
    title: "Website Design",
    headline: "Website Design That Converts",
    paragraph: "We create modern, fast, SEO-optimized websites that attract, engage, and convert visitors into paying clients.",
    benefits: ["Mobile-friendly & responsive", "SEO built-in from day one", "Fast loading speed (under 3s)", "Conversion-focused design", "Custom tailored to your brand"],
  },
  "website-redesign": {
    icon: RefreshCw,
    title: "Website Redesign",
    headline: "Transform Your Outdated Website",
    paragraph: "Keep what works, fix what doesn't. We modernize your online presence to attract more leads and build trust.",
    benefits: ["Modern, professional look", "Improved user experience", "Better SEO performance", "Faster load times", "Higher conversion rates"],
  },
  "ecommerce": {
    icon: ShoppingCart,
    title: "Ecommerce / WooCommerce",
    headline: "Sell Online With Confidence",
    paragraph: "We build beautiful, secure online stores that make it easy for your customers to browse and buy.",
    benefits: ["WooCommerce integration", "Secure payment processing", "Mobile shopping experience", "Product management system", "Order & inventory tracking"],
  },
  "seo-optimization": {
    icon: Search,
    title: "SEO Optimization",
    headline: "Get Found on Google",
    paragraph: "We implement technical and on-page SEO strategies that help your business rank higher and drive consistent organic traffic.",
    benefits: ["Technical SEO audit & fixes", "On-page optimization", "Local SEO for Kenya businesses", "Keyword research & strategy", "Monthly performance reports"],
  },
  "landing-pages": {
    icon: MousePointerClick,
    title: "Landing Pages",
    headline: "Landing Pages That Convert",
    paragraph: "Purpose-built pages designed for your ad campaigns to maximize ROI and generate quality leads.",
    benefits: ["A/B testing ready", "Optimized for ad campaigns", "Fast loading for lower CPC", "Clear call-to-actions", "Lead capture forms"],
  },
  "social-media-management": {
    icon: Share2,
    title: "Social Media Management",
    headline: "Build Your Brand Online",
    paragraph: "Strategic social media content and management that builds authority and attracts leads to your business daily.",
    benefits: ["Content strategy & planning", "Regular posting schedule", "Engagement & community management", "Brand consistency", "Monthly analytics reports"],
  },
};

const allSlugs = Object.keys(servicesData);
const ease = [0.23, 1, 0.32, 1] as const;

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const otherServices = allSlugs.filter((s) => s !== slug);

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-medium">{service.title}</span>
              <h1 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
                {service.headline}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{service.paragraph}</p>
              <ul className="mt-8 space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="shimmer inline-block px-10 py-4 text-sm font-bold text-primary-foreground rounded-lg glow-primary"
                >
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease }}
              className="flex items-center justify-center"
            >
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center">
                <Icon className="w-24 h-24 text-primary" strokeWidth={1} />
              </div>
            </motion.div>
          </div>

          {/* Other services */}
          <div className="mt-20 pt-12 border-t border-border">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Explore Other Services</h3>
            <div className="flex flex-wrap gap-3">
              {otherServices.map((s) => (
                <Link
                  key={s}
                  to={`/services/${s}`}
                  className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                  {servicesData[s].title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
