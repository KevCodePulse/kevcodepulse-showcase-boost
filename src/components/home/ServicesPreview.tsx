import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout, RefreshCw, ShoppingCart, Search, MousePointerClick, Share2 } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import workspaceImg from "@/assets/services-workspace.jpg";

const services = [
  { icon: Layout, title: "Website Design", desc: "Modern, fast, conversion-focused websites tailored to your brand.", slug: "website-design" },
  { icon: RefreshCw, title: "Website Redesign", desc: "Turn outdated sites into client-generating machines.", slug: "website-redesign" },
  { icon: ShoppingCart, title: "Ecommerce (WooCommerce)", desc: "Sell your products with ease — built for conversions.", slug: "ecommerce" },
  { icon: Search, title: "SEO Optimization", desc: "Rank higher and get consistent organic traffic.", slug: "seo-optimization" },
  { icon: MousePointerClick, title: "Landing Pages", desc: "High-converting pages for ads & campaigns.", slug: "landing-pages" },
  { icon: Share2, title: "Social Media Management", desc: "Build authority and attract leads daily.", slug: "social-media-management" },
];

const ease = [0.23, 1, 0.32, 1] as const;

const ServicesPreview = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <SectionHeading badge="Services" title="Our Services" centered />

      {/* Full-width workspace image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="mb-12 rounded-xl overflow-hidden border border-border shadow-lg"
      >
        <img
          src={workspaceImg}
          alt="Our creative web design workspace"
          className="w-full h-48 md:h-64 object-cover"
          loading="lazy"
        />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease, delay: i * 0.08 }}
          >
            <Link
              to={`/services/${s.slug}`}
              className="group block h-full p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <span className="text-sm font-semibold text-primary">Learn More →</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPreview;
