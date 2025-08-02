import { motion } from 'framer-motion';
import { AlertTriangle, Clock, DollarSign, Users, TrendingDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const PainPoints = () => {
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    setLanguage(document.documentElement.lang === 'ar' ? 'AR' : 'EN');
  }, []);
  const painPoints = [
    {
      icon: Clock,
      title: language === 'AR' ? "فريقك يغرق في المهام المتكررة" : "Your Team Drowns in Repetitive Tasks",
      description: language === 'AR' 
        ? "أكثر من 40 ساعة شهرياً تُهدر في إدخال البيانات وإنتاج التقارير وسير العمل اليدوي التي يمكن للكمبيوتر القيام بها في دقائق."
        : "40+ hours per month wasted on data entry, report generation, and manual workflows that a computer could do in minutes.",
      stat: language === 'AR' ? "أكثر من 40 ساعة/شهر" : "40+ hours/month"
    },
    {
      icon: DollarSign,
      title: language === 'AR' ? "الأخطاء تكلفك أموالاً" : "Mistakes Cost You Money",
      description: language === 'AR'
        ? "كل عملية يدوية هي نقطة فشل محتملة. خطأ واحد في إدخال البيانات يمكن أن يكلف آلاف الدولارات في الإيرادات المفقودة وثقة العملاء."
        : "Every manual process is a potential point of failure. One mistake in data entry can cost thousands in lost revenue and customer trust.",
      stat: language === 'AR' ? "أكثر من $50K سنوياً" : "$50K+ annually"
    },
    {
      icon: Users,
      title: language === 'AR' ? "أفضل موظفيك يعانون من الإرهاق" : "Your Best People Are Burning Out",
      description: language === 'AR'
        ? "الموظفون الموهوبون يقومون بعمل الروبوتات بدلاً من التفكير الاستراتيجي. إنهم محبطون، فاقدون للدافعية، ويبحثون عن المخرج."
        : "Talented employees doing robot work instead of strategic thinking. They're frustrated, demotivated, and looking for the exit.",
      stat: language === 'AR' ? "67% خطر استقالة" : "67% turnover risk"
    },
    {
      icon: TrendingDown,
      title: language === 'AR' ? "المنافسون يتحركون بشكل أسرع" : "Competitors Are Moving Faster",
      description: language === 'AR'
        ? "بينما تقوم بمعالجة الطلبات يدوياً وتحديث جداول البيانات، ينمو منافسوك بالأتمتة ويتركونك خلفهم."
        : "While you're manually processing orders and updating spreadsheets, your competitors are scaling with automation and leaving you behind.",
      stat: language === 'AR' ? "3x نمو أبطأ" : "3x slower growth"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-destructive/5 to-destructive/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-destructive/20 text-destructive border border-destructive/30 mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">
              {language === 'AR' ? 'التكلفة الخفية للعمل اليدوي' : 'The Hidden Cost of Manual Work'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {language === 'AR' ? (
              <>
                كل يوم تنتظر فيه،{' '}
                <span className="text-destructive">تخسر أموالاً</span>
              </>
            ) : (
              <>
                Every Day You Wait,{' '}
                <span className="text-destructive">You're Losing Money</span>
              </>
            )}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'AR'
              ? 'إليك ما تكلفه العمليات اليدوية فعلاً لعملك (ولماذا منافسوك الذين يؤتمتون يسحقونك):'
              : "Here's what manual processes are REALLY costing your business (and why your competitors who automate are crushing you):"
            }
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-xl bg-card border border-destructive/20 hover:border-destructive/40 transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <pain.icon className="w-8 h-8 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {pain.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {pain.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-semibold">
                    Lost: {pain.stat}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PainPoints;