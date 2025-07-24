import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Users, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const CaseStudies = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const caseStudies = [
    {
      company: "TechFlow Solutions",
      industry: "Software Development",
      problem: "Manual client onboarding taking 40+ hours per client",
      solution: "Automated onboarding workflow with document collection, account setup, and welcome sequences",
      results: {
        timeSaved: "35 hours per client",
        costSavings: "$75,000 annually",
        errorReduction: "92%",
        scalability: "10x more clients with same team"
      },
      testimonial: "We went from spending entire weeks on onboarding to having it done automatically overnight. Our team can now focus on actual development work instead of paperwork.",
      avatar: "👨‍💻"
    },
    {
      company: "GrowthMart E-commerce",
      industry: "E-commerce",
      problem: "Order processing, inventory updates, and customer service consuming 60+ hours weekly",
      solution: "Complete order-to-fulfillment automation with inventory sync, automated customer communications, and support chatbot",
      results: {
        timeSaved: "60 hours per week",
        costSavings: "$120,000 annually",
        errorReduction: "98%",
        scalability: "5x order volume increase"
      },
      testimonial: "Our conversion rate doubled when customers started getting instant responses. The automation handles everything from order confirmation to shipping updates flawlessly.",
      avatar: "🛍️"
    },
    {
      company: "DataSync Consulting",
      industry: "Business Consulting",
      problem: "Creating client reports and proposals manually for 20+ hours per week",
      solution: "Automated report generation system pulling data from multiple sources with branded templates and client-specific insights",
      results: {
        timeSaved: "20 hours per week",
        costSavings: "$85,000 annually",
        errorReduction: "95%",
        scalability: "3x more clients served"
      },
      testimonial: "Our clients are amazed by the speed and quality of our reports now. What used to take days now happens in minutes, and the insights are more accurate than ever.",
      avatar: "📊"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/20 text-success border border-success/30 mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Real Results</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How We Saved Our Clients{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-primary">
              $280,000
            </span>{' '}
            in 12 Months
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real businesses, real problems, real results. Here's exactly how automation transformed these companies:
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 rounded-2xl bg-card border border-border hover:border-success/30 transition-all">
                
                {/* Left Column - Company & Problem */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-2xl">
                      {study.avatar}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{study.company}</h3>
                      <p className="text-muted-foreground">{study.industry}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                      <div className="w-2 h-2 rounded-full bg-destructive mr-3" />
                      The Problem
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                      Our Solution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>

                  <blockquote className="relative p-4 rounded-lg bg-muted/50 border-l-4 border-success">
                    <p className="text-foreground font-medium italic">"{study.testimonial}"</p>
                  </blockquote>
                </div>

                {/* Right Column - Results */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-foreground flex items-center">
                    <div className="w-2 h-2 rounded-full bg-success mr-3" />
                    The Results
                  </h4>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-5 h-5 text-success" />
                        <span className="text-sm text-muted-foreground">Time Saved</span>
                      </div>
                      <div className="text-2xl font-bold text-success">{study.results.timeSaved}</div>
                    </div>

                    <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <DollarSign className="w-5 h-5 text-secondary" />
                        <span className="text-sm text-muted-foreground">Cost Savings</span>
                      </div>
                      <div className="text-2xl font-bold text-secondary">{study.results.costSavings}</div>
                    </div>

                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">Error Reduction</span>
                      </div>
                      <div className="text-2xl font-bold text-primary">{study.results.errorReduction}</div>
                    </div>

                    <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-5 h-5 text-warning" />
                        <span className="text-sm text-muted-foreground">Scalability</span>
                      </div>
                      <div className="text-xl font-bold text-warning">{study.results.scalability}</div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      <span>Get Similar Results</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Connector Line (except for last item) */}
              {index < caseStudies.length - 1 && (
                <div className="flex justify-center py-8">
                  <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 rounded-xl bg-gradient-to-r from-success/10 to-primary/10 border border-success/20"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Your Success Story Could Be Next
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Every business is unique, but the results are always the same: more time, less errors, higher profits.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-warning text-warning-foreground rounded-lg font-semibold hover:bg-warning/90 transition-colors"
          >
            Start Your Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;