import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Clock, DollarSign, Users, TrendingDown, TrendingUp, Zap, Shield, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

const Comparison = () => {
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    setLanguage(document.documentElement.lang === 'ar' ? 'AR' : 'EN');
  }, []);

  const comparisons = [
    {
      manual: {
        icon: Clock,
        title: language === 'AR' ? "فريقك يغرق في المهام المتكررة" : "Your Team Drowns in Repetitive Tasks",
        description: language === 'AR' 
          ? "أكثر من 40 ساعة شهرياً تُهدر في إدخال البيانات وإنتاج التقارير"
          : "40+ hours monthly wasted on data entry and report generation",
        stat: language === 'AR' ? "40+ ساعة مهدورة" : "40+ hours wasted"
      },
      automated: {
        icon: Zap,
        title: language === 'AR' ? "فريقك يركز على النمو الاستراتيجي" : "Your Team Focuses on Strategic Growth",
        description: language === 'AR'
          ? "الأتمتة تنجز في دقائق ما كان يستغرق ساعات"
          : "Automation completes in minutes what took hours",
        stat: language === 'AR' ? "95% توفير في الوقت" : "95% time savings"
      }
    },
    {
      manual: {
        icon: DollarSign,
        title: language === 'AR' ? "الأخطاء تكلفك أموالاً" : "Mistakes Cost You Money",
        description: language === 'AR'
          ? "كل خطأ يدوي يكلف آلاف الدولارات في الإيرادات المفقودة"
          : "Every manual error costs thousands in lost revenue",
        stat: language === 'AR' ? "$50K+ خسائر سنوية" : "$50K+ annual losses"
      },
      automated: {
        icon: Shield,
        title: language === 'AR' ? "دقة مثالية في العمليات" : "Perfect Accuracy in Operations",
        description: language === 'AR'
          ? "الأنظمة الآلية تضمن دقة 99.9% وتمنع الأخطاء المكلفة"
          : "Automated systems ensure 99.9% accuracy and prevent costly errors",
        stat: language === 'AR' ? "99.9% دقة مضمونة" : "99.9% guaranteed accuracy"
      }
    },
    {
      manual: {
        icon: Users,
        title: language === 'AR' ? "أفضل موظفيك يعانون من الإرهاق" : "Your Best People Are Burning Out",
        description: language === 'AR'
          ? "الموظفون الموهوبون يقومون بعمل الروبوتات"
          : "Talented employees doing robot work instead of strategic thinking",
        stat: language === 'AR' ? "67% خطر استقالة" : "67% turnover risk"
      },
      automated: {
        icon: Target,
        title: language === 'AR' ? "موظفوك متحمسون ومنتجون" : "Your Employees Are Energized & Productive",
        description: language === 'AR'
          ? "الفرق تركز على الإبداع والاستراتيجية بدلاً من المهام المتكررة"
          : "Teams focus on creativity and strategy instead of repetitive tasks",
        stat: language === 'AR' ? "89% رضا الموظفين" : "89% employee satisfaction"
      }
    },
    {
      manual: {
        icon: TrendingDown,
        title: language === 'AR' ? "المنافسون يتحركون بشكل أسرع" : "Competitors Are Moving Faster",
        description: language === 'AR'
          ? "بينما تعمل يدوياً، ينمو منافسوك بالأتمتة"
          : "While you work manually, competitors scale with automation",
        stat: language === 'AR' ? "3x نمو أبطأ" : "3x slower growth"
      },
      automated: {
        icon: TrendingUp,
        title: language === 'AR' ? "تنمو بسرعة وكفاءة" : "You Scale Fast & Efficiently",
        description: language === 'AR'
          ? "الأتمتة تمكنك من النمو السريع والتفوق على المنافسين"
          : "Automation enables rapid scaling and competitive advantage",
        stat: language === 'AR' ? "5x نمو أسرع" : "5x faster growth"
      }
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {language === 'AR' ? (
              <>
                العمل اليدوي مقابل الأتمتة
              </>
            ) : (
              <>
                Manual Work vs Automation
              </>
            )}
          </h2>
          <p className="text-muted-foreground text-lg">
            {language === 'AR' 
              ? 'الفرق واضح: أي طريق ستختار؟'
              : 'The difference is clear: which path will you choose?'
            }
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Manual Work Column */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-destructive/20 text-destructive border border-destructive/30 mb-2">
                <AlertTriangle className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">
                  {language === 'AR' ? 'العمل اليدوي' : 'Manual Work'}
                </span>
              </div>
            </div>
            
            {comparisons.map((comparison, index) => (
              <motion.div
                key={`manual-${index}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-start"
              >
                {/* Connector Line */}
                {index < comparisons.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-destructive/30 z-0"></div>
                )}
                
                {/* Icon with enhanced glow effect */}
                <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-destructive/20 border-2 border-destructive/40 flex items-center justify-center mr-4 z-10">
                  <comparison.manual.icon className="w-5 h-5 text-destructive" />
                  <div className="absolute inset-0 rounded-full bg-destructive/20 blur-md animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full bg-destructive/10 blur-lg"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {comparison.manual.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {comparison.manual.description}
                  </p>
                  <div className="inline-flex items-center px-2 py-1 rounded-md bg-destructive/10 text-destructive text-xs font-medium">
                    {comparison.manual.stat}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Automated Work Column */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 mb-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">
                  {language === 'AR' ? 'الأتمتة' : 'Automation'}
                </span>
              </div>
            </div>
            
            {comparisons.map((comparison, index) => (
              <motion.div
                key={`automated-${index}`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-start"
              >
                {/* Connector Line */}
                {index < comparisons.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-primary/30 z-0"></div>
                )}
                
                {/* Icon with enhanced glow effect */}
                <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mr-4 z-10">
                  <comparison.automated.icon className="w-5 h-5 text-primary" />
                  <div className="absolute inset-0 rounded-full bg-primary/30 blur-md animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full bg-primary/15 blur-lg"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {comparison.automated.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {comparison.automated.description}
                  </p>
                  <div className="inline-flex items-center px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                    {comparison.automated.stat}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;