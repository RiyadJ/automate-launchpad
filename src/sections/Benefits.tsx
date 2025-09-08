import { motion } from 'framer-motion';
import { CheckCircle, Zap, TrendingUp, Clock, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const Benefits = () => {
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'EN';
    setLanguage(savedLanguage);

    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChange', handleLanguageChange as EventListener);
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: language === 'AR' ? "احصل على 40-200 ساعة كل شهر" : "Get 40-200 Hours Back Every Month",
      description: language === 'AR'
        ? "فريقك يتوقف عن القيام بعمل الروبوتات ويبدأ في القيام بعمل بشري. تخيل ما يمكن أن تحققه بـ 200 ساعة إضافية."
        : "Your team stops doing robot work and starts doing human work. Imagine what you could accomplish with an extra 200 hours.",
      results: language === 'AR'
        ? ["إدخال البيانات: 0 دقيقة", "إنتاج التقارير: تلقائي", "المتابعة: يتولاها الذكاء الاصطناعي"]
        : ["Data entry: 0 minutes", "Report generation: Automatic", "Follow-ups: Handled by AI"]
    },
    {
      icon: TrendingUp,
      title: language === 'AR' ? "توسع دون توظيف" : "Scale Without Hiring",
      description: language === 'AR'
        ? "تعامل مع 10 أضعاف الحجم بنفس الفريق. أتمتتك تتوسع إلى ما لا نهاية بينما منافسوك يوظفون بلا انتهاء."
        : "Handle 10x more volume with the same team. Your automation scales infinitely while your competitors hire endlessly.",
      results: language === 'AR'
        ? ["معالجة آلاف الطلبات", "التعامل مع استفسارات لا محدودة", "التوسع دون تكاليف إضافية"]
        : ["Process 1000s of orders", "Handle unlimited inquiries", "Scale without overhead"]
    },
    {
      icon: Users,
      title: language === 'AR' ? "حافظ على سعادة أفضل موظفيك" : "Keep Your Best People Happy",
      description: language === 'AR'
        ? "الموظفون الموهوبون يقومون بعمل استراتيجي، وليس عمل روتيني. شاهد الإنتاجية ورضا الوظيفة يرتفعان."
        : "Talented employees do strategic work, not busy work. Watch productivity and job satisfaction soar.",
      results: language === 'AR'
        ? ["احتفاظ أعلى بالموظفين", "مزيد من التفكير الاستراتيجي", "ابتكار متزايد"]
        : ["Higher employee retention", "More strategic thinking", "Increased innovation"]
    },
    {
      icon: Zap,
      title: language === 'AR' ? "اطلع على عائد الاستثمار خلال 30 يوماً" : "See ROI in 30 Days",
      description: language === 'AR'
        ? "معظم العملاء يوفرون استثمارهم بالكامل في الشهر الأول. كل شهر بعد ذلك ربح صافي."
        : "Most clients save their entire investment in the first month. Every month after is pure profit.",
      results: language === 'AR'
        ? ["توفير فوري في الوقت", "تقليل التكاليف التشغيلية", "مكاسب كفاءة قابلة للقياس"]
        : ["Immediate time savings", "Reduced operational costs", "Measurable efficiency gains"]
    },
    {
      icon: CheckCircle,
      title: language === 'AR' ? "اضبطها وانسها" : "Set It and Forget It",
      description: language === 'AR'
        ? "بمجرد الأتمتة، تعمل إلى الأبد. لا صيانة، لا إشراف، لا مراقبة مطلوبة."
        : "Once automated, it runs forever. No maintenance, no supervision, no babysitting required.",
      results: language === 'AR'
        ? ["تشغيل 24/7", "أنظمة مراقبة ذاتية", "تحديثات تلقائية"]
        : ["24/7 operation", "Self-monitoring systems", "Automatic updates"]
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/20 text-success border border-success/30 mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">
              {language === 'AR' ? 'ما تحصل عليه بدلاً من ذلك' : 'What You Get Instead'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {language === 'AR' ? (
              <>
                حول عملك في 30 يوماً
              </>
            ) : (
              <>
                Transform Your Business in 30 Days
              </>
            )}
          </h2>
        </motion.div>

        {/* Vertical Benefits Flow */}
        <div className="max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start mb-8 last:mb-0"
            >
              {/* Connector Line */}
              {index < benefits.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-success/30"></div>
              )}
              
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-success/20 border-2 border-success/30 flex items-center justify-center mr-4">
                <benefit.icon className="w-5 h-5 text-success" />
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {benefit.description}
                </p>
                <ul className="space-y-1">
                  {benefit.results.map((result, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-xs">
                      <CheckCircle className="w-3 h-3 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;