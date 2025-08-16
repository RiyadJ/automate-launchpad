import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CEO, TechFlow Solutions",
      company: "Software Development Agency",
      avatar: "👩‍💼",
      rating: 5,
      testimonial: "Before aotumate, our team was drowning in manual client onboarding. 35 hours per client turned into 2 hours of automated magic. Our developers finally get to focus on actual development instead of paperwork. ROI in 3 weeks.",
      results: {
        timeSaved: "35 hours per client",
        errorReduction: "92%",
        revenue: "+$75,000 annually"
      }
    },
    {
      name: "Mike Rodriguez",
      title: "Founder, GrowthMart",
      company: "E-commerce Platform",
      avatar: "👨‍💻",
      rating: 5,
      testimonial: "I was skeptical about automation until I saw our order processing time drop from 60 hours/week to basically zero. Our customers get instant responses, inventory updates automatically, and our team handles 5x more volume. Game changer.",
      results: {
        timeSaved: "60 hours per week",
        errorReduction: "98%",
        revenue: "+$120,000 annually"
      }
    },
    {
      name: "Jennifer Park",
      title: "Operations Director, DataSync Consulting",
      company: "Business Intelligence Firm",
      avatar: "👩‍💼",
      rating: 5,
      testimonial: "Creating client reports used to consume 20+ hours weekly. Now it happens automatically with better insights than manual work. Our clients are amazed by the speed and accuracy. We can serve 3x more clients with the same team.",
      results: {
        timeSaved: "20 hours per week",
        errorReduction: "95%",
        revenue: "+$85,000 annually"
      }
    },
    {
      name: "David Kim",
      title: "COO, StreamlineHQ",
      company: "Marketing Agency",
      avatar: "👨‍💼",
      rating: 5,
      testimonial: "The manual campaign reporting was killing our team's morale. Now everything from data collection to client presentations happens automatically. Our team loves their job again, and we're closing bigger deals with better insights.",
      results: {
        timeSaved: "45 hours per week",
        errorReduction: "90%",
        revenue: "+$95,000 annually"
      }
    },
    {
      name: "Lisa Thompson",
      title: "VP of Operations, AutoFlow Systems",
      company: "Manufacturing Solutions",
      avatar: "👩‍💼",
      rating: 5,
      testimonial: "I thought our manufacturing processes were too complex to automate. I was wrong. aotumate streamlined our entire order-to-delivery pipeline. We handle twice the volume with half the errors. Absolutely transformational.",
      results: {
        timeSaved: "80 hours per week",
        errorReduction: "94%",
        revenue: "+$150,000 annually"
      }
    },
    {
      name: "Alex Morgan",
      title: "Founder, InnovateLab",
      company: "Product Development Studio",
      avatar: "👨‍💻",
      rating: 5,
      testimonial: "Project management was chaos before automation. Now timelines update automatically, clients get real-time progress reports, and our team focuses on innovation instead of admin work. We're shipping products 40% faster.",
      results: {
        timeSaved: "30 hours per week",
        errorReduction: "88%",
        revenue: "+$65,000 annually"
      }
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/20 text-success border border-success/30 mb-6">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Client Success Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Their Results
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners say about their automation transformation:
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/30 group-hover:text-primary/50 transition-colors" />
              
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-xs text-muted-foreground opacity-70">{testimonial.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-warning fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                "{testimonial.testimonial}"
              </p>

              {/* Results */}
              <div className="space-y-2 pt-4 border-t border-border/50">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Time Saved:</span>
                  <span className="font-semibold text-success">{testimonial.results.timeSaved}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Error Reduction:</span>
                  <span className="font-semibold text-primary">{testimonial.results.errorReduction}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Revenue Impact:</span>
                  <span className="font-semibold text-secondary">{testimonial.results.revenue}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 rounded-xl bg-card border border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">$590K+</div>
              <div className="text-sm text-muted-foreground">Total Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">30 Days</div>
              <div className="text-sm text-muted-foreground">Average Time to ROI</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 p-6 rounded-xl bg-gradient-to-r from-success/10 to-primary/10 border border-success/20"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="font-semibold text-foreground">Join 100+ Successful Businesses</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Every client gets measurable results within 30 days. Your success story could be next.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-warning text-warning-foreground rounded-lg font-semibold hover:bg-warning/90 transition-colors"
            >
              Start Your Success Story
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;