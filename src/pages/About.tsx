import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search, Code, BarChart3, Globe, Smartphone, Shield, Eye,
  Facebook, Twitter, Youtube, ArrowRight, CheckCircle2, Zap
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import heroMockup from "@/assets/hero-mockup.jpg";

const ease = [0.23, 1, 0.32, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease, delay: i * 0.1 },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

/* ── Team Data ── */
const team = [
  {
    name: "Kelvin Munene",
    role: "Founder / Lead Designer",
    initials: "KM",
    socials: { facebook: "#", twitter: "#", youtube: "#" },
  },
  {
    name: "Mary Hadasah",
    role: "Digital Marketer",
    initials: "MH",
    socials: { facebook: "#", twitter: "#", youtube: "#" },
  },
  {
    name: "David Kim",
    role: "UI Designer",
    initials: "DK",
    socials: { facebook: "#", twitter: "#", youtube: "#" },
  },
];

/* ── Process Steps ── */
const steps = [
  {
    icon: Search,
    title: "Strategy & Discovery",
    desc: "Analyze competitors & audience to map site architecture for high-value leads.",
    step: "01",
  },
  {
    icon: Code,
    title: "High-Velocity Development",
    desc: "Build fast, clean, optimized WordPress websites in days — not months.",
    step: "02",
  },
  {
    icon: BarChart3,
    title: "Growth & Optimization",
    desc: "Launch, handle SEO, and provide 1-on-1 walkthrough with ongoing support.",
    step: "03",
  },
];

/* ── Why Choose Us ── */
const differentiators = [
  { icon: Globe, title: "WordPress Experts", desc: "Focused solely on WordPress for top-notch, reliable websites." },
  { icon: Zap, title: "Performance First", desc: "Fast-loading, mobile-optimized sites that keep visitors engaged." },
  { icon: Search, title: "SEO-Ready", desc: "Structured for search engines from day one — no extras needed." },
  { icon: Eye, title: "Transparent Process", desc: "Clear, honest, and straightforward development every step of the way." },
];

/* ── Stats ── */
const stats = [
  { value: 66, suffix: "+", label: "Websites Designed & Hosted" },
  { value: 6, suffix: "+", label: "Years Hands-On Experience" },
  { value: 100, suffix: "%", label: "High Customer Satisfaction" },
];

/* ── Counter Hook ── */
const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(id);
  }, [started, target, duration]);

  return { count, ref };
};

const StatCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <span className="font-display text-5xl md:text-6xl font-bold text-primary">
        {count}{suffix}
      </span>
      <p className="mt-2 text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

/* ════════════════════════════════════════════════
   ABOUT PAGE
   ════════════════════════════════════════════════ */
const AboutPage = () => (
  <>
    {/* ── HERO ── */}
    <section id="about-hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* decorative blob */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.span variants={fadeUp} custom={0} className="inline-block text-xs font-mono uppercase tracking-wider text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
              About KevCodePulse
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground leading-[1.1]">
              WordPress Websites That Actually{" "}
              <span className="text-gradient">Perform</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              KevCodePulse is a Nairobi-based WordPress agency building fast, SEO-ready websites that convert visitors into paying clients. We specialize in results-driven digital solutions for businesses in Kenya and beyond.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="shimmer inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-primary-foreground rounded-lg glow-primary">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold border border-border rounded-lg hover:border-primary/40 transition-colors text-foreground">
                  See Our Work
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
              <img src={heroMockup} alt="KevCodePulse website mockup" className="w-full h-auto" loading="eager" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">100% Satisfaction</p>
                  <p className="text-xs text-muted-foreground">Every project, guaranteed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── OUR STORY ── */}
    <section id="our-story" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideInLeft}
          >
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">Our Story</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
              The Story Behind{" "}
              <span className="text-gradient">KevCodePulse</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Businesses deserve websites that actually perform. Too many sites are slow, confusing, and fail to convert visitors. We started KevCodePulse to change that — creating fast, clean, SEO-ready WordPress websites designed to grow your business.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From our base in Nairobi, we've helped dozens of businesses across Kenya and beyond transform their online presence. We believe great design meets measurable results — and our{" "}
              <Link to="/services" className="text-primary font-medium hover:underline underline-offset-4">
                services
              </Link>{" "}
              reflect that philosophy.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideInRight}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-muted overflow-hidden border border-border">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="w-10 h-10 text-primary" />
                  </div>
                  <p className="font-display font-bold text-foreground text-lg">Founder / Team Photo</p>
                  <p className="text-sm text-muted-foreground mt-1">Placeholder image</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 w-24 h-24 rounded-2xl bg-primary/10 -z-10" />
            <div className="absolute -bottom-3 -left-3 w-32 h-32 rounded-2xl bg-accent/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── MISSION ── */}
    <section id="mission" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span variants={fadeUp} custom={0} className="inline-block text-xs font-mono uppercase tracking-wider text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
            Our Mission
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
            Empowering Growth Through{" "}
            <span className="text-gradient">Great Web Design</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Our mission is simple: help businesses in Kenya and worldwide grow by building websites that attract, engage, and convert. Every project is designed with speed, performance, and results in mind.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/contact" className="shimmer inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-primary-foreground rounded-lg glow-primary">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ── TEAM ── */}
    <section id="team" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-6">
        <SectionHeading badge="Our Team" title="Meet Our Team of Experts" description="The talented people behind every project we deliver." centered />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.15 }}
              className="group bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
            >
              {/* Avatar placeholder */}
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-500">
                <span className="font-display text-2xl font-bold text-primary">{member.initials}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              <div className="mt-4 flex justify-center gap-3">
                {[
                  { icon: Facebook, href: member.socials.facebook },
                  { icon: Twitter, href: member.socials.twitter },
                  { icon: Youtube, href: member.socials.youtube },
                ].map((s, j) => (
                  <a
                    key={j}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── PROCESS ── */}
    <section id="process" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <SectionHeading badge="How We Work" title="Our Simple 3-Step Process" description="A streamlined approach that delivers results fast." centered />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.15 }}
              className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-colors duration-500"
            >
              <span className="absolute -top-4 -left-2 font-display text-6xl font-black text-primary/10">{step.step}</span>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <step.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-5 w-10 items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-primary/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── WHY CHOOSE US ── */}
    <section id="why-choose-us" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-6">
        <SectionHeading badge="Why Us" title="What Sets KevCodePulse Apart" centered />
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="flex gap-5 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <d.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">{d.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── STATS ── */}
    <section id="stats" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <SectionHeading badge="Results" title="Our Impact in Numbers" centered />
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>

    {/* ── FINAL CTA ── */}
    <section id="final-cta" className="py-20 md:py-28 bg-foreground text-background">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter">
            Ready to Build a Website That Actually{" "}
            <span className="text-primary">Works?</span>
          </h2>
          <p className="mt-4 text-background/60 text-lg max-w-xl mx-auto">
            Let's talk about your goals and see if we're a good fit.
          </p>
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
                className="shimmer inline-flex items-center gap-2 px-10 py-4 text-sm font-bold text-primary-foreground rounded-lg glow-primary"
              >
                Book Free Consultation <ArrowRight className="w-4 h-4" />
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
                to="/portfolio"
                className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold border border-background/20 rounded-lg hover:border-background/40 transition-colors"
              >
                See Our Work
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default AboutPage;
