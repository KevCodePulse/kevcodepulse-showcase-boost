import { motion } from "framer-motion";
import { Target, Zap, MessageSquare, Search, DollarSign, HeadphonesIcon } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import whyUsImg from "@/assets/responsive-mockup.jpg";

const points = [
  { icon: Target, text: "Conversion-focused (not just design)" },
  { icon: Zap, text: "Fast turnaround" },
  { icon: MessageSquare, text: "Clear communication" },
  { icon: Search, text: "SEO built-in (not extra)" },
  { icon: DollarSign, text: "Affordable for growing businesses" },
  { icon: HeadphonesIcon, text: "Ongoing support" },
];

const ease = [0.23, 1, 0.32, 1] as const;

const WhyChooseUs = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <SectionHeading badge="Why Us" title="Why Work With Us?" centered />
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative"
        >
          <img
            src={whyUsImg}
            alt="Before and after website transformation"
            className="w-full rounded-xl shadow-lg border border-border"
            loading="lazy"
          />
          <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full -z-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {points.map((p, i) => (
            <motion.div
              key={p.text}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease, delay: i * 0.08 }}
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-foreground">{p.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
