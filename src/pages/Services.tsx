import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Layout, RefreshCw, ShoppingCart, Search, Wrench,
  CheckCircle2, ArrowRight, Zap, Smartphone, BarChart3,
  Settings, Target, Shield, Eye, Clock, Users,
  Stethoscope, Briefcase, ShoppingBag, Dumbbell
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "@/components/shared/SectionHeading";

import servicesHeroImg from "@/assets/services-hero.jpg";
import serviceProblemImg from "@/assets/service-problem.jpg";
import serviceEcommerceImg from "@/assets/service-ecommerce.jpg";
import serviceSeoImg from "@/assets/service-seo.jpg";
import serviceMaintenanceImg from "@/assets/service-maintenance.jpg";
import servicesClientsImg from "@/assets/services-clients.jpg";
import responsiveMockupImg from "@/assets/responsive-mockup.jpg";
import techLaptopImg from "@/assets/tech-laptop.webp";

const ease = [0.23, 1, 0.32, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease, delay: i * 0.1 },
  }),
};

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

/* ─── Service data ─── */
const coreServices = [
  {
    icon: Layout,
    title: "Website Design",
    slug: "website-design",
    problem: "Many businesses either don't have a website or rely on outdated designs that make them look unprofessional. Visitors leave within seconds — and potential customers are lost.",
    solution: "We design modern, high-converting websites tailored to your business, audience, and goals. Every design captures attention, builds trust, and guides visitors toward action.",
    benefits: ["Professional online presence", "Higher trust from visitors", "Increased inquiries and calls", "Mobile-first experience"],
    cta: "Start Your Website Project",
    image: responsiveMockupImg,
    imageAlt: "Modern responsive website design on multiple devices",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    slug: "website-redesign",
    problem: "Your website exists… but it's not working. It looks outdated, it's slow, it doesn't generate leads, and visitors don't take action.",
    solution: "We redesign your website with a focus on performance, clarity, and conversion. We don't just \"make it look better\" — we rebuild it to perform better.",
    benefits: ["Faster load times", "Improved user experience", "Clear call-to-actions", "More leads and conversions"],
    cta: "Get a Free Website Audit",
    image: serviceProblemImg,
    imageAlt: "Business owner reviewing website performance",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Development",
    slug: "ecommerce",
    problem: "Many online stores lose sales because they are slow, confusing to navigate, hard to manage, and not optimized for conversions.",
    solution: "We build clean, secure, and easy-to-manage ecommerce websites designed to turn visitors into paying customers.",
    benefits: ["Smooth shopping experience", "Faster checkout process", "Mobile-optimized store", "Easy product & order management"],
    cta: "Build Your Online Store",
    image: serviceEcommerceImg,
    imageAlt: "Modern ecommerce website on laptop and phone",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    slug: "seo-optimization",
    problem: "Your website exists — but no one can find it. Without SEO, your business is invisible on search engines.",
    solution: "We structure and optimize your website so it ranks better on search engines and attracts organic traffic consistently.",
    benefits: ["Increased visibility on Google", "More targeted visitors", "Higher-quality leads", "Long-term traffic growth"],
    cta: "Improve My Visibility",
    image: serviceSeoImg,
    imageAlt: "SEO analytics dashboard showing growth",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    slug: "website-maintenance",
    problem: "Websites break, slow down, or become outdated over time — especially without regular updates. Most business owners don't have time for this.",
    solution: "We provide ongoing support to keep your website running smoothly, securely, and up to date — so you can focus on your business.",
    benefits: ["Regular updates and backups", "Improved security", "Ongoing performance optimization", "Peace of mind"],
    cta: "Maintain My Website",
    image: serviceMaintenanceImg,
    imageAlt: "Website security and maintenance dashboard",
  },
];

const performancePoints = [
  { icon: Zap, label: "Fast loading speeds" },
  { icon: Smartphone, label: "Mobile-first design" },
  { icon: Search, label: "SEO-ready structure" },
  { icon: Target, label: "Conversion-focused layouts" },
  { icon: Settings, label: "Easy content management" },
];

const processSteps = [
  { num: "01", title: "Strategy & Discovery", desc: "We understand your business, goals, and audience to build the right plan." },
  { num: "02", title: "Design & Development", desc: "We design and build your website based on proven, high-converting structures." },
  { num: "03", title: "Review & Refinement", desc: "You give feedback, and we refine everything until it's perfect." },
  { num: "04", title: "Launch & Support", desc: "Your website goes live — fully optimized and ready to perform." },
];

const clientTypes = [
  { icon: Briefcase, label: "Small & Local Businesses" },
  { icon: Stethoscope, label: "Clinics & Healthcare" },
  { icon: Users, label: "Coaches & Consultants" },
  { icon: Wrench, label: "Service-Based Businesses" },
  { icon: ShoppingBag, label: "Ecommerce Brands" },
  { icon: Dumbbell, label: "Fitness & Wellness" },
];

const differentiators = [
  { icon: Target, title: "Strategy Before Design", desc: "We plan before we build. Every pixel has a purpose." },
  { icon: Zap, title: "Performance Over Decoration", desc: "Beautiful sites that also load fast and rank well." },
  { icon: BarChart3, title: "Business-Focused Approach", desc: "Your website is a growth tool, not a digital brochure." },
  { icon: Shield, title: "Long-Term Support", desc: "We stick around after launch to keep things running smoothly." },
];

const faqs = [
  { q: "How long does it take to build a website?", a: "Most projects take between 1–3 weeks depending on complexity. We'll give you a clear timeline during our initial consultation." },
  { q: "Can I update my website myself?", a: "Yes. We build websites that are easy to manage without technical skills. We also provide a walkthrough after launch." },
  { q: "Do you work with international clients?", a: "Yes. We work with businesses both locally in Kenya and globally. Communication is done via WhatsApp, email, or video calls." },
  { q: "Do you redesign existing websites?", a: "Absolutely. In fact, many of our projects are redesigns of underperforming websites that need a complete overhaul." },
  { q: "How much does a website cost?", a: "Pricing depends on the scope and features you need. We offer affordable packages for small businesses. Contact us for a free, no-obligation quote." },
  { q: "Do you offer payment plans?", a: "Yes! We understand cash flow is important. We offer flexible payment plans so you can get started without breaking the bank." },
];

/* ─── Page Component ─── */
const ServicesPage = () => {
  const stat1 = useCountUp(66);
  const stat2 = useCountUp(6);
  const stat3 = useCountUp(100);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicesHeroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="relative container mx-auto px-6 py-24 md:py-36">
          <motion.div
            initial="hidden" animate="visible"
            className="max-w-3xl"
          >
            <motion.span variants={fadeUp} custom={0} className="inline-block text-xs font-mono uppercase tracking-wider text-primary font-medium mb-4">
              Our Services
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-background leading-[1.1]">
              Websites Built to <span className="text-primary">Grow Your Business</span> — Not Just Look Good
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg md:text-xl text-background/70 leading-relaxed max-w-2xl">
              We design and build high-performance websites that don't just sit online — they actively bring you leads, customers, and revenue.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="shimmer inline-block px-8 py-4 text-sm font-bold text-primary-foreground rounded-lg glow-primary">
                Start Your Project
              </Link>
              <a href="#services-list" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-background border border-background/30 rounded-lg hover:bg-background/10 transition-colors">
                Explore Services <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ WHAT WE DO STRIP ═══ */}
      <section className="py-16 bg-muted/50 border-b border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <motion.p variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-wider text-primary font-medium">What We Do</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-3 font-display text-2xl md:text-3xl font-bold tracking-tighter text-foreground">
              End-to-End Website Solutions
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Eye, label: "More Inquiries" },
              { icon: Search, label: "Better Visibility" },
              { icon: Zap, label: "Faster Websites" },
              { icon: Shield, label: "Strong Digital Presence" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-display font-bold text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CORE SERVICES ═══ */}
      <section id="services-list" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Core Services" title="What We Offer" centered />

          <div className="space-y-24 md:space-y-32">
            {coreServices.map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={service.title}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isEven ? "lg:[direction:rtl]" : ""}`}
                >
                  {/* Image side */}
                  <motion.div variants={fadeUp} custom={0} className={`${!isEven ? "lg:[direction:ltr]" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                          <service.icon className="w-5 h-5 text-primary-foreground" strokeWidth={1.5} />
                        </div>
                        <span className="text-sm font-bold text-background">{service.title}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content side */}
                  <motion.div variants={fadeUp} custom={1} className={`${!isEven ? "lg:[direction:ltr]" : ""}`}>
                    <span className="text-xs font-mono uppercase tracking-wider text-primary font-medium">
                      {String(idx + 1).padStart(2, "0")} / {String(coreServices.length).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                      {service.title}
                    </h3>

                    {/* Problem */}
                    <div className="mt-6 p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                      <p className="text-sm font-semibold text-destructive mb-1">The Problem</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.problem}</p>
                    </div>

                    {/* Solution */}
                    <div className="mt-4 p-4 rounded-xl bg-accent/5 border border-accent/10">
                      <p className="text-sm font-semibold text-accent mb-1">Our Solution</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.solution}</p>
                    </div>

                    {/* Benefits */}
                    <ul className="mt-6 grid grid-cols-2 gap-2">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-foreground">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 shimmer px-6 py-3 text-sm font-bold text-primary-foreground rounded-lg glow-primary"
                      >
                        {service.cta} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ WHY OUR WEBSITES PERFORM BETTER ═══ */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.span variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-wider text-primary font-medium">
                Why We're Different
              </motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tighter">
                Why Our Websites Perform Better
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="mt-4 text-background/60 leading-relaxed">
                Not all websites are built the same. We focus on what actually drives results. Your website becomes a <strong className="text-primary">business tool</strong>, not just a digital brochure.
              </motion.p>
              <motion.ul variants={fadeUp} custom={3} className="mt-8 space-y-4">
                {performancePoints.map((p) => (
                  <li key={p.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                      <p.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="font-medium">{p.label}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="relative"
            >
              <img
                src={techLaptopImg}
                alt="High-performance website on laptop"
                className="w-full rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-primary/20 -z-10 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Our Process" title="What It's Like Working With Us" description="We keep everything simple and structured." centered />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.12 }}
                className="relative p-8 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="font-display text-5xl font-black text-primary/15 group-hover:text-primary/30 transition-colors">{step.num}</span>
                <h3 className="mt-2 font-display text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHO WE WORK WITH ═══ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <img
                src={servicesClientsImg}
                alt="Happy business professionals with their websites"
                className="w-full rounded-2xl shadow-lg"
                loading="lazy"
              />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.span variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-wider text-primary font-medium">
                Our Clients
              </motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
                Who We Work With
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="mt-4 text-muted-foreground leading-relaxed">
                We work with businesses that are serious about growth. If you rely on customers finding you online, we can help.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="mt-8 grid grid-cols-2 gap-4">
                {clientTypes.map((c) => (
                  <div key={c.label} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                    <c.icon className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
                    <span className="text-sm font-medium text-foreground">{c.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT MAKES US DIFFERENT ═══ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Why KevCodePulse" title="What Makes Us Different" description="Most developers focus on building websites. We focus on building results." centered />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <d.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { ref: stat1.ref, count: stat1.count, suffix: "+", label: "Websites Built" },
              { ref: stat2.ref, count: stat2.count, suffix: "+", label: "Years Experience" },
              { ref: stat3.ref, count: stat3.count, suffix: "%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label} ref={s.ref}>
                <p className="font-display text-4xl md:text-5xl font-black text-primary-foreground">
                  {s.count}{s.suffix}
                </p>
                <p className="mt-1 text-sm font-medium text-primary-foreground/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <SectionHeading badge="FAQ" title="Frequently Asked Questions" centered />
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative container mx-auto px-6 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl md:text-5xl font-bold tracking-tighter text-background">
              Ready to Build a Website<br />That <span className="text-primary">Actually Works</span>?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-4 text-lg text-background/60 max-w-xl mx-auto">
              If your website isn't bringing you leads, customers, or results — it's time for an upgrade.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link to="/contact" className="shimmer inline-block px-10 py-4 text-sm font-bold text-primary-foreground rounded-lg glow-primary">
                  Start Your Project Today
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link to="/portfolio" className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold text-background border border-background/30 rounded-lg hover:bg-background/10 transition-colors">
                  See Our Work <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
