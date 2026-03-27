import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ArrowRight, CheckCircle2, Star, Zap, BarChart3, Globe,
  Shield, Clock, Users, TrendingUp, Award, ExternalLink,
  Stethoscope, Briefcase, ShoppingBag, Dumbbell, Palette,
  MessageCircle, ChevronRight, Sparkles, Target, Eye
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "@/components/shared/SectionHeading";

import portfolioHeroImg from "@/assets/portfolio-hero.jpg";
import beforeAfterImg from "@/assets/before-after.jpg";
import portfolioTrustImg from "@/assets/portfolio-trust.jpg";
import caseHealthImg from "@/assets/case-healthcare.jpg";
import caseEcommerceImg from "@/assets/case-ecommerce.jpg";
import caseCoachingImg from "@/assets/case-coaching.jpg";
import ctaBannerImg from "@/assets/cta-banner.jpg";

const ease = [0.23, 1, 0.32, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease, delay: i * 0.1 },
  }),
};

const slideIn = (dir: "left" | "right") => ({
  hidden: { opacity: 0, x: dir === "left" ? -30 : 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
});

/* ─── Counter Hook ─── */
const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return { count, ref };
};

const StatCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <span className="font-display text-4xl md:text-5xl font-bold text-primary tabular-nums">{count}{suffix}</span>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

/* ─── Data ─── */
const categories = ["All", "Healthcare", "Small Business", "Ecommerce", "Coaches", "Service Business"] as const;

const projects = [
  { title: "HealthPlus Clinic", category: "Healthcare", situation: "Outdated website with zero online patient inquiries", outcome: "+120% increase in online inquiries within 2 months", color: "from-primary/10 to-accent/10" },
  { title: "SokoMart Online", category: "Ecommerce", situation: "No online store, losing sales to competitors daily", outcome: "+85% more online orders in the first quarter", color: "from-accent/10 to-primary/10" },
  { title: "UrbanFit Gym", category: "Small Business", situation: "Social media followers weren't converting to paid members", outcome: "3x membership sign-ups with targeted landing page", color: "from-primary/15 to-accent/5" },
  { title: "TechStart Agency", category: "Service Business", situation: "High bounce rate — visitors leaving within seconds", outcome: "50% lower bounce rate and doubled time-on-site", color: "from-accent/15 to-primary/5" },
  { title: "GreenLeaf Organics", category: "Ecommerce", situation: "Invisible on Google, zero organic traffic", outcome: "Page 1 Google rankings achieved in 3 months", color: "from-primary/10 to-accent/15" },
  { title: "Nairobi Law Firm", category: "Service Business", situation: "Professional firm looked amateur online, losing client trust", outcome: "+200% increase in consultation requests", color: "from-accent/5 to-primary/15" },
  { title: "Dr. Amara Dental", category: "Healthcare", situation: "Patients couldn't book appointments online", outcome: "40% of bookings now come through the website", color: "from-primary/10 to-accent/10" },
  { title: "FitCoach Kenya", category: "Coaches", situation: "No online presence, relying solely on word-of-mouth", outcome: "Built a client pipeline generating 15+ leads per month", color: "from-accent/10 to-primary/10" },
  { title: "Mama Njeri Bakery", category: "Small Business", situation: "No way for customers to order online or see the menu", outcome: "+70% increase in weekly orders through new website", color: "from-primary/15 to-accent/10" },
];

const caseStudies = [
  {
    title: "HealthPlus Clinic",
    industry: "Healthcare",
    image: caseHealthImg,
    client: "A growing medical clinic in Nairobi with 3 locations but zero digital presence.",
    problem: "Their outdated website looked unprofessional, had no appointment booking system, and wasn't generating any online inquiries. Patients were choosing competitors who appeared more modern and trustworthy online.",
    solution: "We designed a clean, mobile-first website with an integrated appointment booking system, patient testimonials, and local SEO optimization. Every page was built to convert visitors into patients.",
    result: "+120% increase in online inquiries within 60 days. Online appointment bookings now account for 40% of all new patients.",
  },
  {
    title: "SokoMart Online",
    industry: "Ecommerce",
    image: caseEcommerceImg,
    client: "A Kenyan retail brand selling organic products with a loyal offline customer base.",
    problem: "They had no online store and were losing sales to competitors with ecommerce websites. Their existing website was just a static brochure with no way to purchase.",
    solution: "We built a full ecommerce store with product catalogs, secure payments via M-Pesa and card, order tracking, and automated email notifications. The store was optimized for mobile shoppers.",
    result: "+85% more online orders in Q1. Average order value increased by 35% due to improved product recommendations.",
  },
  {
    title: "FitCoach Kenya",
    industry: "Coaching",
    image: caseCoachingImg,
    client: "A fitness coach building a personal brand with a growing Instagram following.",
    problem: "Despite having thousands of followers, they couldn't convert social media interest into paying clients. There was no professional website, booking system, or credibility beyond Instagram.",
    solution: "We created a personal branding website with service packages, client transformations, an integrated booking calendar, and testimonial sections. SEO was added to attract organic traffic.",
    result: "Now generates 15+ qualified leads per month. Booking calendar is consistently full 3 weeks in advance.",
  },
];

const testimonials = [
  { quote: "KevCodePulse didn't just build us a website — they built us a system that actually brings in patients. Our online inquiries have never been higher.", name: "Dr. Sarah M.", role: "HealthPlus Clinic", rating: 5 },
  { quote: "We went from zero online sales to processing orders every single day. The website paid for itself within the first month.", name: "James K.", role: "SokoMart Online", rating: 5 },
  { quote: "I finally have a professional online presence that matches my brand. My calendar stays booked and clients come to me already trusting my work.", name: "Coach Mike O.", role: "FitCoach Kenya", rating: 5 },
  { quote: "The redesign completely transformed our image. We went from looking like amateurs to looking like the top firm in Nairobi.", name: "Advocate Jane W.", role: "Nairobi Law Firm", rating: 5 },
];

const benefits = [
  { icon: Zap, title: "Lightning-Fast Websites", desc: "Every site loads in under 2 seconds. Speed directly impacts conversions and search rankings." },
  { icon: Eye, title: "Conversion-Focused Design", desc: "Layouts built to guide visitors toward taking action — not just scrolling and leaving." },
  { icon: TrendingUp, title: "More Inquiries & Sales", desc: "Clients see measurable increases in leads, calls, and online orders after launch." },
  { icon: Globe, title: "SEO-Ready From Day One", desc: "Structured for search engines so your ideal customers can actually find you." },
  { icon: Shield, title: "Reliable & Secure", desc: "Regular updates, backups, and monitoring keep your site running without interruptions." },
  { icon: Target, title: "Stronger Online Presence", desc: "Stand out in your industry with a website that positions you as the obvious choice." },
];

const objections = [
  { q: "I don't know where to start with a website.", a: "That's exactly why we handle everything. From strategy to launch, we guide you through a simple process. You just show up — we do the heavy lifting." },
  { q: "I'm not technical at all. Will I be able to manage it?", a: "Absolutely. We build websites that anyone can update without technical skills. Plus, we provide a 1-on-1 walkthrough so you feel 100% confident managing your site." },
  { q: "What if the process takes too long?", a: "Most projects launch within 1–3 weeks. We keep things structured and moving forward with clear milestones, so nothing drags on." },
  { q: "I've been burned by developers before.", a: "We hear this often. That's why we're transparent about our process, provide regular updates, and don't disappear after launch. Your success is our reputation." },
  { q: "Is it worth the investment?", a: "Our clients consistently see returns within the first few months — whether that's more inquiries, online sales, or saved time. A website is a business tool, and we build it to perform." },
];

/* ─── Component ─── */
const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const filtered = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={portfolioHeroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10 py-20">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-6">
              <span className="inline-block w-8 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-medium">Proven Results</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-background leading-[1.05]">
              Websites That Don't Just Look Good — They{" "}
              <span className="text-primary">Deliver Results</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg md:text-xl text-background/70 max-w-2xl leading-relaxed">
              Real projects. Real businesses. Real growth. Every website here was built with one purpose — to generate leads, increase revenue, and grow the business behind it.
            </motion.p>

            {/* Trust indicators */}
            <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-6">
              {[{ val: "66+", label: "Projects Completed" }, { val: "12+", label: "Industries Served" }, { val: "6+", label: "Years Experience" }].map(s => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="font-display text-2xl font-bold text-primary">{s.val}</span>
                  <span className="text-sm text-background/60">{s.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} custom={4} className="mt-10 flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="shimmer inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-primary-foreground rounded-lg glow-primary">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold border border-background/20 rounded-lg hover:border-background/40 transition-colors text-background">
                  View Our Work <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ FILTERABLE PROJECT GRID ═══════ */}
      <section id="projects" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Our Work" title="Projects That Speak Louder Than Promises" description="Filter by industry to find work relevant to your business. Every project here solved a real problem and delivered measurable results." centered />

          {/* Filter Tabs */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat ? "bg-primary text-primary-foreground shadow-lg glow-primary" : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"}`}>
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="group rounded-xl border border-border overflow-hidden bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-500"
              >
                <div className={`aspect-[16/10] bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                  <span className="font-display text-3xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500">{p.title.split(" ")[0]}</span>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                      <ExternalLink className="w-3 h-3" /> View
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-primary uppercase tracking-wide">{p.category}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{p.situation}</p>
                  <div className="flex items-start gap-2 pt-3 border-t border-border">
                    <TrendingUp className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <p className="text-sm font-semibold text-accent">{p.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURED CASE STUDIES ═══════ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Case Studies" title="The Full Story Behind the Results" description="Dig deeper into how we transformed these businesses. Every case study follows the same formula: understand the problem, build the solution, measure the outcome." centered />

          <div className="space-y-16 md:space-y-24">
            {caseStudies.map((cs, idx) => (
              <motion.div
                key={cs.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${idx % 2 === 1 ? "md:[direction:rtl]" : ""}`}
              >
                <motion.div variants={slideIn(idx % 2 === 0 ? "left" : "right")} className={idx % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <div className="rounded-xl overflow-hidden shadow-2xl">
                    <img src={cs.image} alt={`${cs.title} case study`} className="w-full h-auto object-cover" loading="lazy" />
                  </div>
                </motion.div>
                <motion.div variants={slideIn(idx % 2 === 0 ? "right" : "left")} className={`space-y-5 ${idx % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">{cs.industry}</span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">{cs.title}</h3>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <div>
                      <span className="font-bold text-foreground block mb-1">The Client</span>
                      <span className="text-muted-foreground">{cs.client}</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground block mb-1">The Problem</span>
                      <span className="text-muted-foreground">{cs.problem}</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground block mb-1">What We Did</span>
                      <span className="text-muted-foreground">{cs.solution}</span>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                      <span className="font-bold text-accent block mb-1">The Result</span>
                      <span className="text-foreground font-medium">{cs.result}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BEFORE & AFTER ═══════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideIn("left")}>
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Transformation</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
                See the Difference a <span className="text-primary">Real Redesign</span> Makes
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
                It's not about making things "look nicer." It's about clarity, speed, and guiding every visitor toward taking action. The before and after speaks for itself.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Before", items: ["Slow load times", "Confusing navigation", "No clear CTAs", "Unprofessional look"] },
                  { label: "After", items: ["Sub-2s load times", "Intuitive user flow", "Strategic CTAs", "Trust-building design"] },
                ].map(col => (
                  <div key={col.label}>
                    <span className={`text-sm font-bold ${col.label === "Before" ? "text-destructive" : "text-accent"}`}>{col.label}</span>
                    <ul className="mt-2 space-y-1.5">
                      {col.items.map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          {col.label === "Before" ? <span className="w-1.5 h-1.5 rounded-full bg-destructive/50" /> : <CheckCircle2 className="w-3.5 h-3.5 text-accent" />}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideIn("right")}>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border">
                <img src={beforeAfterImg} alt="Website before and after redesign comparison" className="w-full h-auto" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="py-20 md:py-28 bg-foreground">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <motion.span variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-wider text-primary font-medium">Client Feedback</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-background">
              Don't Take Our Word For It
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-4 text-background/60 leading-relaxed text-lg">
              Hear directly from businesses who trusted us with their online presence.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-xl p-6 md:p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-background/80 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-display text-sm font-bold text-primary">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-background text-sm">{t.name}</p>
                    <p className="text-background/50 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ RESULTS & BENEFITS ═══════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <SectionHeading badge="What You Get" title="The Results Our Clients Experience" description="It's not about pixels and code. It's about what your website does for your business after it launches." centered />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TRUST SECTION ═══════ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideIn("left")}>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img src={portfolioTrustImg} alt="KevCodePulse team celebrating client success" className="w-full h-auto" loading="lazy" />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideIn("right")} className="space-y-6">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Why Trust Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
                Built on Results, Not Just Promises
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We've worked with businesses across industries and consistently delivered websites that perform. Our track record speaks for itself.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-2">
                <StatCounter value={66} suffix="+" label="Websites Built" />
                <StatCounter value={12} suffix="+" label="Industries Served" />
                <StatCounter value={6} suffix="+" label="Years Experience" />
                <StatCounter value={100} suffix="%" label="Client Satisfaction" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ STATS BAR ═══════ */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, label: "Proven Track Record" },
              { icon: Clock, label: "Fast Turnaround" },
              { icon: Users, label: "Dedicated Support" },
              { icon: Shield, label: "Reliable & Secure" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                className="flex items-center gap-3 justify-center"
              >
                <item.icon className="w-5 h-5 text-primary-foreground" />
                <span className="text-sm font-bold text-primary-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ctaBannerImg} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/85" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter text-background">
              Ready to Build a Website That <span className="text-primary">Actually Works?</span>
            </h2>
            <p className="mt-4 text-background/60 text-lg max-w-xl mx-auto">
              Let's talk about your goals and see if we're a good fit. No pressure, no jargon — just a clear conversation about what your business needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="shimmer inline-flex items-center gap-2 px-10 py-4 text-sm font-bold text-primary-foreground rounded-lg glow-primary">
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/services" className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold border border-background/20 rounded-lg hover:border-background/40 transition-colors text-background">
                  See Our Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ OBJECTION HANDLING FAQ ═══════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionHeading badge="Common Concerns" title="Still Have Questions? We've Got Answers." description="We understand — choosing someone to build your website is a big decision. Here's what most people ask before getting started." centered />

          <Accordion type="single" collapsible className="space-y-3">
            {objections.map((o, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, ease, delay: i * 0.08 }}>
                <AccordionItem value={`obj-${i}`} className="border border-border rounded-xl px-6 bg-card">
                  <AccordionTrigger className="text-left font-display font-bold text-foreground hover:text-primary transition-colors">
                    {o.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {o.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="text-center mt-10">
            <p className="text-muted-foreground mb-4">Still not sure? Let's just have a conversation.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
