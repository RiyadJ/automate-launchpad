import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Clock, Star, ArrowRight } from 'lucide-react';

const BookCall = () => {
  const benefits = [
    "Free automation audit of your current processes",
    "Custom automation roadmap for your business",
    "ROI projection and timeline estimate",
    "No sales pitch - just valuable insights"
  ];

  const testimonials = [
    {
      text: "The free audit alone saved us 15 hours per week. The actual automation transformed our entire business.",
      author: "Sarah Chen, TechFlow Solutions",
      avatar: "👩‍💼"
    },
    {
      text: "I was skeptical about another 'consultation call' but this actually delivered real value from minute one.",
      author: "Mike Rodriguez, GrowthMart",
      avatar: "👨‍💻"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-warning/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-warning/20 text-warning border border-warning/30 mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Free Strategy Session</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Get Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-warning to-primary">
                    Free Automation Audit
                  </span>{' '}
                  (Worth $2,500)
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Book a 30-minute call and we'll analyze your business processes, identify automation opportunities, and show you exactly how to save 40+ hours per month.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  What You'll Get (100% Free):
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Testimonials */}
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="p-4 rounded-lg bg-card border border-border/50"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{testimonial.avatar}</div>
                      <div>
                        <p className="text-sm text-muted-foreground italic mb-2">
                          "{testimonial.text}"
                        </p>
                        <p className="text-xs text-muted-foreground font-medium">
                          {testimonial.author}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>30 minutes max</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-warning" />
                  <span>No sales pressure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Immediate value</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Booking */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative p-8 rounded-xl bg-card border border-border shadow-2xl">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-warning/20 to-primary/20 rounded-xl blur-xl -z-10" />
                
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-warning to-primary flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Book Your Free Call
                    </h3>
                    <p className="text-muted-foreground">
                      Available slots fill up fast. Book now to secure your spot.
                    </p>
                  </div>

                  {/* Cal.com Integration Placeholder */}
                  <div className="p-6 rounded-lg bg-muted/30 border border-dashed border-muted-foreground/30">
                    <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm mb-4">
                      Cal.com booking widget will be embedded here
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-warning text-warning-foreground rounded-lg font-semibold hover:bg-warning/90 transition-colors"
                    >
                      <span>Select Your Time Slot</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">
                      🔒 Your information is secure and will never be shared
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Urgency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-6 rounded-xl bg-destructive/10 border border-destructive/20"
        >
          <h3 className="text-xl font-bold text-foreground mb-2">
            ⚠️ Only 3 Spots Left This Week
          </h3>
          <p className="text-muted-foreground">
            We limit free audits to ensure quality. Next available slots open Monday.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCall;