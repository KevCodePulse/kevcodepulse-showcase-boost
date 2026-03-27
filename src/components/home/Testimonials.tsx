import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import clientsImg from "@/assets/testimonials-clients.jpg";

const testimonials = [
  {
    quote: "Our new website doubled our leads in 2 months. The team at KevCodePulse really understands what businesses need.",
    name: "Dr. Amani W.",
    title: "Clinic Owner, Nairobi",
  },
  {
    quote: "They delivered a stunning e-commerce site ahead of schedule. Our online sales jumped 85% in the first quarter.",
    name: "James K.",
    title: "Founder, SokoMart",
  },
  {
    quote: "Professional, communicative, and affordable. They made the whole process seamless from start to finish.",
    name: "Sarah M.",
    title: "Agency Director, Mombasa",
  },
];

const ease = [0.23, 1, 0.32, 1] as const;

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-muted/30">
    <div className="container mx-auto px-6">
      <SectionHeading badge="Testimonials" title="What Our Clients Say" centered />

      {/* Clients photo banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="mb-12 rounded-xl overflow-hidden border border-border shadow-lg"
      >
        <img
          src={clientsImg}
          alt="Happy clients working with KevCodePulse websites"
          className="w-full h-48 md:h-72 object-cover"
          loading="lazy"
        />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: i * 0.1 }}
            className="p-8 rounded-xl bg-card border border-border"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 text-primary" fill="hsl(43 96% 56%)" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm">
                {t.name[0]}
              </div>
              <div>
                <p className="font-display font-bold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
