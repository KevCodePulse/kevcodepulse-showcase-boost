import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/shared/SectionHeading";
import portfolioHealth from "@/assets/portfolio-health.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioFitness from "@/assets/portfolio-fitness.jpg";
import portfolioTech from "@/assets/portfolio-tech.jpg";

const projects = [
  { title: "HealthPlus Clinic", type: "Healthcare", result: "+120% increase in inquiries", image: portfolioHealth },
  { title: "SokoMart Online", type: "E-Commerce", result: "+85% more online orders", image: portfolioEcommerce },
  { title: "UrbanFit Gym", type: "Fitness & Wellness", result: "3x membership sign-ups", image: portfolioFitness },
  { title: "TechStart Agency", type: "Tech Startup", result: "50% lower bounce rate", image: portfolioTech },
];

const ease = [0.23, 1, 0.32, 1] as const;

const PortfolioPreview = () => (
  <section className="py-20 md:py-28 bg-muted/30">
    <div className="container mx-auto px-6">
      <SectionHeading badge="Portfolio" title="Real Results From Real Projects" centered />
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: i * 0.1 }}
            className="group rounded-xl border border-border overflow-hidden bg-card hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} website project`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-mono text-muted-foreground uppercase">{p.type}</span>
              <h3 className="mt-1 font-display text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-accent font-semibold">{p.result}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/portfolio"
          className="inline-block px-8 py-3 text-sm font-semibold border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
        >
          View Full Portfolio →
        </Link>
      </div>
    </div>
  </section>
);

export default PortfolioPreview;
