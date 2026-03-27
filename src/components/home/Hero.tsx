import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Zap, BarChart3 } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const ease = [0.23, 1, 0.32, 1] as const;

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background pt-8 pb-16 md:pt-16 md:pb-24">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-foreground text-balance">
            Get More Clients With a Website That Actually{" "}
            <span className="text-gradient">Converts</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
            We design fast, SEO-optimized websites for businesses in Kenya and
            worldwide — built to turn visitors into paying customers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="shimmer inline-block px-8 py-4 text-sm font-bold text-primary-foreground rounded-lg glow-primary"
              >
                Get a Free Website Audit
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/portfolio"
                className="inline-block px-8 py-4 text-sm font-bold text-foreground border border-border rounded-lg hover:border-foreground/20 transition-colors"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-primary" fill="hsl(43 96% 56%)" />{" "}
              60+ Websites Launched
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-primary" /> Fast Turnaround
            </span>
            <span className="flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-primary" /> Conversion-Focused
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <div className="ml-4 flex-1 h-6 bg-background/50 rounded-md" />
            </div>
            <img
              src={heroMockup}
              loading="lazy"
              alt="Premium website mockup"
              className="w-full"
            />
          </div>
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full -z-10" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
