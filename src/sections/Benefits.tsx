import { motion } from 'framer-motion';
import { CheckCircle, Zap, TrendingUp, Clock, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const Benefits = () => {
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    setLanguage(document.documentElement.lang === 'ar' ? 'AR' : 'EN');
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
            <span className="text-sm font-medium">
              {language === 'AR' ? 'ما تحصل عليه بدلاً من ذلك' : 'What You Get Instead'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {language === 'AR' ? (
              <>
                حول عملك في{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-primary">
                  30 يوماً
                </span>
              </>
            ) : (
              <>
                Transform Your Business in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-primary">
                  30 Days
                </span>
              </>
            )}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'AR'
              ? 'إليك بالضبط ما يحدث عندما تتوقف عن العمل اليدوي وتبدأ في أتمتة كل شيء:'
              : "Here's exactly what happens when you stop doing manual work and start automating everything:"
            }
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