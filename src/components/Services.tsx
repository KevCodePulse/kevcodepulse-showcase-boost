import { motion } from "framer-motion";
import { Layout, RefreshCw, MousePointerClick, Globe, BarChart3 } from "lucide-react";

const services = [
  { icon: Layout, title: "Website Design", desc: "Custom designs that communicate trust and convert visitors into customers.", size: "sm" },
  { icon: RefreshCw, title: "Website Redesign", desc: "Modernize your online presence. Keep what works, fix what doesn't.", size: "sm" },
  { icon: MousePointerClick, title: "Landing Pages", desc: "Optimized for one thing: turning clicks into customers. Average 3x ROI on ad spend.", size: "wide" },
  { icon: Globe, title: "WordPress Development", desc: "Enterprise-grade WordPress builds with custom themes and blazing-fast performance.", size: "tall" },
  { icon: BarChart3, title: "SEO Optimization", desc: "Rank higher, get found faster. Technical SEO that drives organic traffic and reduces ad dependency.", size: "sm" },
];

const ease = [0.23, 1, 0.32, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease, delay: i * 0.1 },
  }),
};

const Services = () => (
  <section id="services" className="py-24 md:py-32 bg-muted/50">
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl mb-16"
      >
        <motion.span variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-wider text-primary">
          Services
        </motion.span>
        <motion.h2 variants={fadeUp} custom={1} className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
          Everything You Need to Win Online
        </motion.h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={i}
            variants={fadeUp}
            className={`group relative p-8 rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-500 ${
              s.size === "wide" ? "md:col-span-2" : s.size === "tall" ? "md:row-span-2" : ""
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
