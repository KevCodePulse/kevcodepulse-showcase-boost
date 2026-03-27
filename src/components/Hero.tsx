import { motion } from "framer-motion";
import heroMockup from "@/assets/hero-mockup.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-mono font-medium tracking-wider uppercase text-primary border border-primary/30 rounded-full">
              Web Design Agency
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-foreground text-balance">
              We Build High-Converting Websites That{" "}
              <span className="text-gradient">Grow Your Business</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Stop losing leads to dated design. We build technical storefronts for modern companies — averaging{" "}
              <span className="text-foreground font-semibold">40% faster load speeds</span> and{" "}
              <span className="text-foreground font-semibold">2x more conversions</span>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="shimmer px-8 py-4 text-sm font-bold text-primary-foreground rounded-lg glow-primary"
              >
                Get a Website
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 text-sm font-bold text-foreground border border-foreground/10 rounded-lg backdrop-blur-md hover:border-foreground/20 transition-colors"
              >
                View Portfolio
              </motion.a>
            </div>
          </motion.div>

          {/* Right — Floating browser mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="relative"
            style={{ perspective: "1000px" }}
          >
            <div className="relative rounded-xl overflow-hidden border border-foreground/10 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <div className="ml-4 flex-1 h-6 bg-background/50 rounded-md" />
              </div>
              <img
                src={heroMockup}
                alt="Premium website mockup built by KevCodePulse"
                className="w-full"
                loading="eager"
              />
            </div>
            {/* Glow */}
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
