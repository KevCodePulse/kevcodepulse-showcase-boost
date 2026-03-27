import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "@/components/shared/SectionHeading";

const faqs = [
  { q: "How long does a website take?", a: "Most projects are delivered within 2–4 weeks depending on complexity. We'll give you a clear timeline during our initial consultation." },
  { q: "How much does it cost?", a: "Our pricing depends on the scope and features you need. We offer affordable packages for small businesses and startups. Contact us for a free quote." },
  { q: "Do you offer payment plans?", a: "Yes! We understand cash flow is important. We offer flexible payment plans so you can get started without breaking the bank." },
  { q: "Will my site rank on Google?", a: "Absolutely. Every website we build includes technical SEO best practices — fast loading, mobile-friendly, proper meta tags, and clean code." },
  { q: "Do you provide support after launch?", a: "Yes. We offer ongoing support and maintenance packages to keep your website running smoothly and up-to-date." },
];

const HomeFAQ = () => (
  <section className="py-20 md:py-28 bg-muted/30">
    <div className="container mx-auto px-6">
      <SectionHeading badge="FAQ" title="Frequently Asked Questions" centered />
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
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
);

export default HomeFAQ;
