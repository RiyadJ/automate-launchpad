import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Workflow, BarChart3, MessageSquare, Database, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import React from 'react';

const Services = () => {
  const [currentService, setCurrentService] = useState(0);

  const services = [
    {
      icon: Workflow,
      title: "Business Process Automation",
      description: "We eliminate the repetitive tasks that eat your team's time. Data entry, report generation, email sequences, order processing - all handled automatically.",
      features: ["Workflow automation", "Data processing", "Email automation", "Document generation"],
    },
    {
      icon: Bot,
      title: "AI-Powered Customer Service",
      description: "Smart chatbots and AI assistants that handle customer inquiries 24/7, qualify leads, and escalate complex issues to your team.",
      features: ["24/7 customer support", "Lead qualification", "Appointment booking", "FAQ automation"],
    },
    {
      icon: Database,
      title: "Data Integration & Sync",
      description: "Connect all your tools and platforms. No more manual data entry between systems. Everything stays synchronized automatically.",
      features: ["CRM integration", "Multi-platform sync", "Real-time updates", "Data validation"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting Automation",
      description: "Get real-time dashboards and automated reports. Make data-driven decisions without spending hours creating spreadsheets.",
      features: ["Automated dashboards", "Custom reports", "KPI tracking", "Performance alerts"],
    },
    {
      icon: MessageSquare,
      title: "Lead Generation & Nurturing",
      description: "Automated lead capture, qualification, and nurturing sequences that turn prospects into customers while you sleep.",
      features: ["Lead capture forms", "Email sequences", "Lead scoring", "CRM automation"],
    },
    {
      icon: Zap,
      title: "Custom Automation Solutions",
      description: "Unique business challenges require unique solutions. We build custom automations tailored to your specific needs.",
      features: ["Bespoke workflows", "API integrations", "Custom dashboards", "Scalable solutions"],
    }
  ];

  // Auto-loop through services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">What We Automate</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            We Automate Everything That Wastes Your Time
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple data entry to complex multi-step workflows - if it's repetitive, we can automate it.
          </p>
        </motion.div>

        {/* Service Display Area */}
        <div className="max-w-4xl mx-auto">
          {/* Service Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentService(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentService 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Current Service Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative p-8 rounded-xl bg-card border border-border shadow-lg"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/20 mx-auto mb-6">
                {React.createElement(services[currentService].icon, { className: "w-8 h-8 text-primary" })}
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {services[currentService].title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {services[currentService].description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                  {services[currentService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Service Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => setCurrentService((prev) => (prev - 1 + services.length) % services.length)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Previous
            </button>
            <button
              onClick={() => setCurrentService((prev) => (prev + 1) % services.length)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;