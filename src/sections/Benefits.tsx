import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, TrendingUp, Clock, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Get 40-200 Hours Back Every Month",
      description: "Your team stops doing robot work and starts doing human work. Imagine what you could accomplish with an extra 200 hours.",
      results: ["Data entry: 0 minutes", "Report generation: Automatic", "Follow-ups: Handled by AI"]
    },
    {
      icon: Shield,
      title: "Eliminate 95% of Human Errors",
      description: "No more costly mistakes from tired employees. Automated systems work 24/7 without coffee breaks or bad days.",
      results: ["Zero data entry errors", "Consistent quality every time", "Automatic error detection"]
    },
    {
      icon: TrendingUp,
      title: "Scale Without Hiring",
      description: "Handle 10x more volume with the same team. Your automation scales infinitely while your competitors hire endlessly.",
      results: ["Process 1000s of orders", "Handle unlimited inquiries", "Scale without overhead"]
    },
    {
      icon: Users,
      title: "Keep Your Best People Happy",
      description: "Talented employees do strategic work, not busy work. Watch productivity and job satisfaction soar.",
      results: ["Higher employee retention", "More strategic thinking", "Increased innovation"]
    },
    {
      icon: Zap,
      title: "See ROI in 30 Days",
      description: "Most clients save their entire investment in the first month. Every month after is pure profit.",
      results: ["Immediate time savings", "Reduced operational costs", "Measurable efficiency gains"]
    },
    {
      icon: CheckCircle,
      title: "Set It and Forget It",
      description: "Once automated, it runs forever. No maintenance, no supervision, no babysitting required.",
      results: ["24/7 operation", "Self-monitoring systems", "Automatic updates"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-destructive/5 via-success/5 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/20 text-success border border-success/30 mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">What You Get Instead</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Transform Your Business in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-primary">
              30 Days
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's exactly what happens when you stop doing manual work and start automating everything:
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 rounded-xl bg-card border border-success/20 hover:border-success/40 transition-all group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex-shrink-0 p-2 rounded-lg bg-success/20 group-hover:bg-success/30 transition-colors">
                  <benefit.icon className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {benefit.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {benefit.description}
              </p>
              
              <ul className="space-y-2">
                {benefit.results.map((result, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;