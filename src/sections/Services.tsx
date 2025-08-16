import { motion } from 'framer-motion';
import { Bot, Workflow, BarChart3, MessageSquare, Database, Zap } from 'lucide-react';
import automationIcons from '@/assets/automation-icons.png';

const Services = () => {
  const services = [
    {
      icon: Workflow,
      title: "Business Process Automation",
      description: "We eliminate the repetitive tasks that eat your team's time. Data entry, report generation, email sequences, order processing - all handled automatically.",
      features: ["Workflow automation", "Data processing", "Email automation", "Document generation"],
      savingsTime: "40-80 hours/month",
      errorReduction: "95%"
    },
    {
      icon: Bot,
      title: "AI-Powered Customer Service",
      description: "Smart chatbots and AI assistants that handle customer inquiries 24/7, qualify leads, and escalate complex issues to your team.",
      features: ["24/7 customer support", "Lead qualification", "Appointment booking", "FAQ automation"],
      savingsTime: "60-120 hours/month",
      errorReduction: "90%"
    },
    {
      icon: Database,
      title: "Data Integration & Sync",
      description: "Connect all your tools and platforms. No more manual data entry between systems. Everything stays synchronized automatically.",
      features: ["CRM integration", "Multi-platform sync", "Real-time updates", "Data validation"],
      savingsTime: "20-50 hours/month",
      errorReduction: "99%"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting Automation",
      description: "Get real-time dashboards and automated reports. Make data-driven decisions without spending hours creating spreadsheets.",
      features: ["Automated dashboards", "Custom reports", "KPI tracking", "Performance alerts"],
      savingsTime: "15-30 hours/month",
      errorReduction: "85%"
    },
    {
      icon: MessageSquare,
      title: "Lead Generation & Nurturing",
      description: "Automated lead capture, qualification, and nurturing sequences that turn prospects into customers while you sleep.",
      features: ["Lead capture forms", "Email sequences", "Lead scoring", "CRM automation"],
      savingsTime: "25-60 hours/month",
      errorReduction: "80%"
    },
    {
      icon: Zap,
      title: "Custom Automation Solutions",
      description: "Unique business challenges require unique solutions. We build custom automations tailored to your specific needs.",
      features: ["Bespoke workflows", "API integrations", "Custom dashboards", "Scalable solutions"],
      savingsTime: "50-200 hours/month",
      errorReduction: "95%"
    }
  ];

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
            We Automate Everything{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              That Wastes Your Time
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple data entry to complex multi-step workflows - if it's repetitive, we can automate it. Here's how we transform each area of your business:
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="flex justify-between pt-4 border-t border-border/50">
                  <div>
                    <div className="text-sm font-semibold text-success">{service.savingsTime}</div>
                    <div className="text-xs text-muted-foreground">Time Saved</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-secondary">{service.errorReduction}</div>
                    <div className="text-xs text-muted-foreground">Error Reduction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Image & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative inline-block mb-8">
            <img 
              src={automationIcons} 
              alt="Automation Technology Stack" 
              className="w-32 h-32 mx-auto opacity-80"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-primary/30 rounded-full"
            />
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Don't See Your Use Case?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We've automated everything from complex manufacturing workflows to simple email responses. If it's repetitive, we can automate it.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-warning text-warning-foreground rounded-lg font-semibold hover:bg-warning/90 transition-colors"
          >
            Get Your Custom Automation Plan
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;