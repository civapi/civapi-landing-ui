import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do credits work?",
    answer: "Each credit equals 1,000 standard API calls. Satellite images use credits based on image pricing. ACLED conflict data access is handled through a separate license agreement, not through credits."
  },
  {
    question: "What's included in the free tier?",
    answer: "The free tier includes starter credits to explore the API, full access to documentation, the query dashboard, and community support. No credit card is required to get started."
  },
  {
    question: "How is ACLED billed?",
    answer: "ACLED (Armed Conflict Location & Event Data) requires a separate license agreement due to data licensing requirements. This is handled independently from the credit system and provides real-time conflict event data."
  },
  {
    question: "Do I need to be a developer to use CivAPI?",
    answer: "No! While we offer a powerful REST API for developers, our intuitive dashboard allows anyone to query, visualize, and export humanitarian data without writing any code."
  },
  {
    question: "How does satellite imagery pricing work?",
    answer: "Satellite imagery is available on-demand. You request imagery tasks, and once priced, credits are deducted when images are delivered. All tasking and status tracking is managed through your dashboard."
  },
  {
    question: "Can I get a refund on unused credits?",
    answer: "Credits do not expire and remain in your account for future use. We do not offer refunds on purchased credits, but you can always use them for any API calls or satellite imagery requests."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            Everything you need to know about CivAPI and our credit-based pricing model.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm px-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-xl font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
