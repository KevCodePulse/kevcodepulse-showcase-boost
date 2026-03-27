import { motion } from "framer-motion";
import { Zap, Target, Smartphone, Search } from "lucide-react";

const strengths = [
  { icon: Zap, title: "Fast Delivery", desc: "Launch in weeks, not months. We move fast without cutting corners." },
  { icon: Target, title: "Conversion-Focused", desc: "Every pixel is designed to turn visitors into paying customers." },
  { icon: Smartphone, title: "Mobile-First", desc: "70% of traffic is mobile. We design for phones first, then scale up." },
  { icon: Search, title: "SEO-Ready", desc: "Built-in search optimization so your customers can actually find you." },
];

const ease = [0.23, 1, 0.32, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease, delay: i * 0.1 },
  }),
};

const About = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl"
      >
        <motion.span variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-wider text-primary">
          About Us
        </motion.span>
        <motion.h2 variants={fadeUp} custom={1} className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
          Results-Driven Design for Modern Companies
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="mt-6 text-muted-foreground leading-relaxed">
          We're a lean team of designers and developers obsessed with performance. We specialize in WordPress, modern web apps, responsive design, and SEO — delivering websites that don't just look good, but{" "}
          <span className="text-foreground font-medium">measurably grow your business</span>.
        </motion.p>
      </motion.div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {strengths.map((s, i) => (
          <motion.div
            key={s.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={i}
            variants={fadeUp}
            className="group p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors duration-500"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <s.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
