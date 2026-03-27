import { motion } from "framer-motion";

const logos = [
  "TechStart", "HealthPlus", "GreenCo", "UrbanFit", "BlueWave", "SokoMart"
];

const TrustStrip = () => (
  <section className="py-12 md:py-16 bg-muted/30 border-y border-border/50">
    <div className="container mx-auto px-6 text-center">
      <p className="text-sm font-medium text-muted-foreground mb-8">
        Trusted by startups, clinics, agencies, and local businesses
      </p>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] as const }}
        className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
      >
        {logos.map((name) => (
          <div
            key={name}
            className="px-6 py-3 rounded-lg bg-background border border-border text-sm font-display font-bold text-muted-foreground/50"
          >
            {name}
          </div>
        ))}
      </motion.div>
      <p className="mt-6 text-xs text-muted-foreground">Based in Kenya, serving clients globally 🌍</p>
    </div>
  </section>
);

export default TrustStrip;
