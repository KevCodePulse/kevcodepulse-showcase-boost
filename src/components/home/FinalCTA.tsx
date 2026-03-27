import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ctaBanner from "@/assets/cta-banner.jpg";

const ease = [0.23, 1, 0.32, 1] as const;

const FinalCTA = () => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={ctaBanner}
        alt=""
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-foreground/85" />
    </div>

    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter text-background">
          Ready to Turn Your Website Into a{" "}
          <span className="text-primary">Client Machine?</span>
        </h2>
        <p className="mt-4 text-background/60 text-lg">Limited slots available this month</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="shimmer inline-block px-10 py-4 text-sm font-bold text-primary-foreground rounded-lg glow-primary"
            >
              Start Your Project
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-block px-10 py-4 text-sm font-bold border border-background/20 rounded-lg hover:border-background/40 transition-colors text-background"
            >
              Get Free Website Audit
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
