import { motion } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can we see results from automation?",
      answer: "Most clients see immediate time savings within the first week of implementation. Full ROI is typically achieved within 30 days. We start with your biggest pain points to deliver maximum impact fast."
    },
    {
      question: "What if our business processes are too unique to automate?",
      answer: "That's what we hear from 90% of our clients initially. The truth is, most 'unique' processes follow similar patterns. We've automated everything from complex manufacturing workflows to niche service delivery. If humans can do it repeatedly, we can automate it."
    },
    {
      question: "How much does automation cost compared to hiring more staff?",
      answer: "Automation typically costs 70-90% less than hiring equivalent staff. A $50,000 annual salary becomes a $5,000-$15,000 one-time automation investment. Plus, automation works 24/7 without benefits, sick days, or vacation time."
    },
    {
      question: "What happens if the automation breaks or needs updates?",
      answer: "All our automations include monitoring and maintenance. We catch issues before they affect your business and provide updates as your needs evolve. Most systems run for years without any intervention required."
    },
    {
      question: "Can automation integrate with our existing software?",
      answer: "Yes. We connect with 2,000+ popular business tools including CRMs, email platforms, accounting software, e-commerce platforms, and databases. If you use it, we can probably automate it."
    },
    {
      question: "How do we know which processes to automate first?",
      answer: "We start with a free automation audit to identify your highest-impact opportunities. We prioritize processes that are: repetitive, time-consuming, error-prone, and performed frequently. This ensures maximum ROI from day one."
    },
    {
      question: "What if my team resists the change to automation?",
      answer: "We've never had a team complain about getting their time back. When employees stop doing boring, repetitive work and start doing meaningful, strategic work, resistance turns into enthusiasm. We also provide training to ensure smooth adoption."
    },
    {
      question: "Do I need technical knowledge to use the automations?",
      answer: "Not at all. We build everything to be user-friendly and often invisible. Your team continues working normally while automation handles the heavy lifting in the background. We provide simple dashboards for monitoring if needed."
    },
    {
      question: "What's your guarantee if the automation doesn't work as promised?",
      answer: "We offer a 30-day money-back guarantee. If you don't see measurable time savings and ROI within 30 days, we'll refund your investment completely. We're that confident in our results."
    },
    {
      question: "How long does it take to implement automation?",
      answer: "Simple automations can be live within 48 hours. Complex, multi-step workflows typically take 1-2 weeks. We work in phases so you start seeing benefits immediately while we build more advanced features."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Questions & Answers</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to Know{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              About Automation
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These are the real questions business owners ask us before transforming their operations with automation:
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl bg-card border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Book a free 15-minute call and we'll answer all your questions about automating your specific business.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-warning text-warning-foreground rounded-lg font-semibold hover:bg-warning/90 transition-colors"
          >
            Get Your Questions Answered
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;