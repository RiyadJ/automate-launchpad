import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Clock, DollarSign, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const CaseStudies = () => {
  const [currentCase, setCurrentCase] = useState(0);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    setLanguage(document.documentElement.lang === 'ar' ? 'AR' : 'EN');
  }, []);

  const caseStudies = [
    {
      company: language === 'AR' ? "شركة تقنية متنامية" : "Growing Tech Company",
      industry: language === 'AR' ? "برمجيات السحابة" : "Cloud Software",
      problem: language === 'AR' 
        ? "فريق مبيعات يقضي 15 ساعة أسبوعياً في إدخال بيانات العملاء المحتملين يدوياً من مصادر مختلفة"
        : "Sales team spending 15 hours weekly manually entering lead data from various sources",
      solution: language === 'AR'
        ? "أتمتة التقاط العملاء المحتملين ومزامنة CRM وتسلسل رعاية البريد الإلكتروني"
        : "Automated lead capture, CRM sync, and email nurturing sequences",
      results: [
        {
          metric: language === 'AR' ? "60 ساعة" : "60 hours",
          description: language === 'AR' ? "توفر شهرياً" : "saved monthly",
          icon: Clock
        },
        {
          metric: language === 'AR' ? "300%" : "300%",
          description: language === 'AR' ? "زيادة في تحويل العملاء المحتملين" : "increase in lead conversion",
          icon: TrendingUp
        }
      ],
      testimonial: language === 'AR'
        ? "لقد حولت الأتمتة قسم المبيعات لدينا بالكامل. الآن يمكننا التركيز على بناء العلاقات بدلاً من إدخال البيانات."
        : "Automation completely transformed our sales department. We can now focus on building relationships instead of data entry.",
      avatar: "/lovable-uploads/948527d9-7f86-4dab-bef7-0d1a84c7ef82.png"
    },
    {
      company: language === 'AR' ? "وكالة التسويق الرقمي" : "Digital Marketing Agency",
      industry: language === 'AR' ? "التسويق والإعلان" : "Marketing & Advertising",
      problem: language === 'AR'
        ? "إنتاج تقارير العملاء يدوياً استغرق 8 ساعات لكل عميل شهرياً"
        : "Manual client reporting took 8 hours per client monthly",
      solution: language === 'AR'
        ? "لوحات معلومات آلية وإنتاج تقارير مخصصة"
        : "Automated dashboards and custom report generation",
      results: [
        {
          metric: language === 'AR' ? "240 ساعة" : "240 hours",
          description: language === 'AR' ? "توفر شهرياً" : "saved monthly",
          icon: Clock
        },
        {
          metric: language === 'AR' ? "$50K" : "$50K",
          description: language === 'AR' ? "إيرادات إضافية" : "additional revenue",
          icon: DollarSign
        }
      ],
      testimonial: language === 'AR'
        ? "أصبحت التقارير التي كانت تستغرق ساعات الآن تحدث بنقرة واحدة. عملاؤنا يحبون لوحات المعلومات الفورية."
        : "Reports that took hours now happen with one click. Our clients love the real-time dashboards.",
      avatar: "/lovable-uploads/948527d9-7f86-4dab-bef7-0d1a84c7ef82.png"
    },
    {
      company: language === 'AR' ? "متجر التجارة الإلكترونية" : "E-commerce Store",
      industry: language === 'AR' ? "التجارة الإلكترونية" : "E-commerce",
      problem: language === 'AR'
        ? "معالجة الطلبات وإدارة المخزون وخدمة العملاء كلها تُدار يدوياً"
        : "Order processing, inventory management, and customer service all handled manually",
      solution: language === 'AR'
        ? "أتمتة الطلبات وتتبع المخزون وروبوتات دعم العملاء"
        : "Order automation, inventory tracking, and customer support bots",
      results: [
        {
          metric: language === 'AR' ? "150 ساعة" : "150 hours",
          description: language === 'AR' ? "توفر شهرياً" : "saved monthly",
          icon: Clock
        },
        {
          metric: language === 'AR' ? "500%" : "500%",
          description: language === 'AR' ? "نمو في الطلبات" : "growth in orders processed",
          icon: TrendingUp
        }
      ],
      testimonial: language === 'AR'
        ? "تعالج أنظمتنا الآن آلاف الطلبات دون تدخل بشري. لقد تحولنا من متجر صغير إلى عملية قابلة للتوسع."
        : "Our systems now process thousands of orders without human intervention. We've gone from a small shop to a scalable operation.",
      avatar: "/lovable-uploads/948527d9-7f86-4dab-bef7-0d1a84c7ef82.png"
    }
  ];

  // Auto-loop through case studies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % caseStudies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [caseStudies.length]);

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-background to-muted/20">
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

      </div>
    </section>
  );
};

export default CaseStudies;