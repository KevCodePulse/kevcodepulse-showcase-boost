import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import solutionImg from "@/assets/tech-laptop.webp";

const ease = [0.23, 1, 0.32, 1] as const;

const Solution = () => (
  <section className="py-20 md:py-28 bg-muted/30">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-medium">The Solution</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
            We Don't Just Build Websites — We Build{" "}
            <span className="text-gradient">Growth Systems</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            Every website we create is designed to attract, engage, and convert. We combine design, SEO, and strategy to turn your website into a 24/7 sales machine.
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-8 inline-block">
            <Link
              to="/contact"
              className="shimmer inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-primary-foreground rounded-lg glow-primary"
            >
              Start Your Project
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative"
        >
          <img
            src={solutionImg}
            alt="Business growth through professional web design"
            className="w-full rounded-xl shadow-2xl border border-border"
            loading="lazy"
          />
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full -z-10" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Solution;
