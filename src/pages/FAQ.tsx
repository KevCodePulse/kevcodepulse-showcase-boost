import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "@/components/shared/SectionHeading";

const faqs = [
  { q: "How long does a website take?", a: "Most projects are delivered within 2–4 weeks depending on complexity. We'll give you a clear timeline during our initial consultation." },
  { q: "How much does it cost?", a: "Pricing depends on the scope and features you need. We offer affordable packages starting from KES 30,000. Contact us for a detailed quote." },
  { q: "Do you offer payment plans?", a: "Yes! We understand cash flow matters. We offer flexible payment plans — pay in installments so you can get started without breaking the bank." },
  { q: "Will my site rank on Google?", a: "Absolutely. Every website we build includes technical SEO best practices — fast loading, mobile-friendly, proper meta tags, structured data, and clean code." },
  { q: "Do you provide support after launch?", a: "Yes. We offer ongoing support and maintenance packages to keep your website running smoothly, secure, and up-to-date." },
  { q: "Can you redesign my existing website?", a: "Of course! We specialize in website redesigns. We'll modernize your design, improve performance, and boost conversions while preserving your brand identity." },
  { q: "Do you build e-commerce websites?", a: "Yes, we build WooCommerce stores with secure payment integration, inventory management, and beautiful product pages." },
  { q: "What if I don't have content ready?", a: "No worries! We can help with copywriting and content strategy. We'll guide you through providing the information we need to create compelling content." },
  { q: "Do you work with businesses outside Kenya?", a: "Absolutely. While we're based in Nairobi, we work with clients globally. We communicate via video calls, email, and WhatsApp." },
  { q: "What's your process?", a: "Our process is simple: Discovery → Design → Development → Launch → Support. We keep you involved at every step and ensure clear communication throughout." },
];

const FAQPage = () => (
  <>
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with us"
          centered
        />
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
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Link
            to="/contact"
            className="shimmer inline-block px-10 py-4 text-sm font-bold text-primary-foreground rounded-lg glow-primary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default FAQPage;
