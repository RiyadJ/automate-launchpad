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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-destructive/20 text-destructive border border-destructive/30 mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">
              {language === 'AR' ? 'التكلفة الخفية للعمل اليدوي' : 'The Hidden Cost of Manual Work'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {language === 'AR' ? (
              <>
                كل يوم تنتظر فيه، تخسر أموالاً
              </>
            ) : (
              <>
                Every Day You Wait, You're Losing Money
              </>
            )}
          </h2>
        </motion.div>

        {/* Vertical Pain Points Flow */}
        <div className="max-w-2xl mx-auto">
          {painPoints.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start mb-8 last:mb-0"
            >
              {/* Connector Line */}
              {index < painPoints.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-destructive/30"></div>
              )}
              
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/20 border-2 border-destructive/30 flex items-center justify-center mr-4">
                <pain.icon className="w-5 h-5 text-destructive" />
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {pain.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {pain.description}
                </p>
                <div className="inline-flex items-center px-2 py-1 rounded-md bg-destructive/10 text-destructive text-xs font-medium">
                  Lost: {pain.stat}
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