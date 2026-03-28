import { motion } from "framer-motion";
import { Check, Star, ShoppingCart, Rocket, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "@/components/shared/SectionHeading";

const ease = [0.23, 1, 0.32, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease, delay: i * 0.12 },
  }),
};

const plans = [
  {
    name: "Starter Website",
    price: "KES 20,000",
    description: "Perfect for small businesses that need a professional online presence.",
    icon: Rocket,
    features: [
      "Up to 5 sections/pages",
      "Mobile responsive design",
      "WhatsApp integration",
      "Contact form",
      "Basic SEO setup",
    ],
    highlighted: false,
    badge: null,
    accent: "secondary",
  },
  {
    name: "Growth Website",
    price: "KES 35,000",
    description: "Designed to attract clients and generate consistent inquiries.",
    icon: Star,
    features: [
      "Multi-page website",
      "Blog setup (SEO ready)",
      "Lead capture forms",
      "Speed optimization",
      "Google Maps integration",
    ],
    highlighted: true,
    badge: "Most Popular",
    accent: "primary",
  },
  {
    name: "Ecommerce Website",
    price: "KES 80,000",
    description: "Sell products online and accept payments easily.",
    icon: ShoppingCart,
    features: [
      "Full online store setup",
      "M-Pesa integration",
      "Product pages + cart",
      "Checkout system",
      "Admin dashboard",
    ],
    highlighted: false,
    badge: null,
    accent: "secondary",
  },
];

const Pricing = () => (
  <section className="py-20 md:py-28 bg-muted/40 overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6">
      <SectionHeading
        badge="Pricing"
        title="Affordable Website Packages for Kenyan Businesses"
        description="Choose a package that fits your business goals. Transparent pricing, no hidden costs."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={i}
            variants={fadeUp}
            className={`relative rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 ${
              plan.highlighted
                ? "bg-foreground text-background shadow-2xl scale-[1.03] md:scale-105 ring-2 ring-primary z-10"
                : "bg-card text-card-foreground shadow-lg hover:shadow-xl"
            }`}
          >
            {plan.badge && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                {plan.badge}
              </span>
            )}

            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
              plan.highlighted ? "bg-primary/20" : "bg-secondary/10"
            }`}>
              <plan.icon className={`w-6 h-6 ${plan.highlighted ? "text-primary" : "text-secondary"}`} />
            </div>

            <h3 className="font-display text-xl font-bold tracking-tight">{plan.name}</h3>

            <div className="mt-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider opacity-60">From</span>
              <div className={`text-3xl sm:text-4xl font-display font-black tracking-tighter mt-1 ${
                plan.highlighted ? "text-primary" : "text-foreground"
              }`}>
                {plan.price}
              </div>
            </div>

            <p className={`text-sm leading-relaxed mb-6 ${
              plan.highlighted ? "opacity-70" : "text-muted-foreground"
            }`}>
              {plan.description}
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check className={`w-4 h-4 mt-0.5 shrink-0 ${
                    plan.highlighted ? "text-primary" : "text-secondary"
                  }`} />
                  <span className={plan.highlighted ? "opacity-80" : "text-muted-foreground"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className={`block w-full text-center py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-colors ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="mt-16 text-center"
      >
        <p className="text-muted-foreground text-lg mb-5">
          Not sure which package is right for you?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              View Full Pricing
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like help choosing the right website package for my business.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-muted transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Talk to Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Pricing;
