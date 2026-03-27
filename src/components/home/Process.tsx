import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket, HeadphonesIcon } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import processImg from "@/assets/process-steps.jpg";

const steps = [
  { icon: Search, title: "Discovery", desc: "Understand your business & goals" },
  { icon: Palette, title: "Design", desc: "Clean, modern UI tailored to your brand" },
  { icon: Code, title: "Development", desc: "Fast, responsive, SEO-ready build" },
  { icon: Rocket, title: "Launch", desc: "Go live + optimization" },
  { icon: HeadphonesIcon, title: "Support", desc: "Ongoing help if needed" },
];

const ease = [0.23, 1, 0.32, 1] as const;

const Process = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <SectionHeading badge="Process" title="Simple, Clear Process" centered />

      {/* Process illustration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="mb-12 max-w-3xl mx-auto"
      >
        <img
          src={processImg}
          alt="Our 3-step web design process"
          className="w-full rounded-xl"
          loading="lazy"
        />
      </motion.div>

      <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-2">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: i * 0.1 }}
            className="flex-1 text-center relative"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <span className="text-xs font-mono text-primary font-medium">Step {i + 1}</span>
            <h3 className="mt-1 font-display text-lg font-bold text-foreground">{step.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-px bg-border" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
