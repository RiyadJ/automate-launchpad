import { motion } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import CalcomBooker from '@/components/ui/calcom-booker';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [language, setLanguage] = useState('EN');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    setLanguage(document.documentElement.lang === 'ar' ? 'AR' : 'EN');
  }, []);

  const faqsEN = [
    {
      question: "How quickly can we see results from automation?",
      answer: "Most clients see immediate time savings within the first week of implementation. Full ROI is typically achieved within 30 days. We start with your biggest pain points to deliver maximum impact fast."
    },
    {
      question: "What if our business processes are too unique to automate?",
      answer: "That's what we hear from 90% of our clients initially. The truth is, most 'unique' processes follow similar patterns. We've automated everything from complex manufacturing workflows to niche service delivery. If humans can do it repeatedly, we can automate it."
    },
    {
      question: "How much does automation cost compared to hiring more staff?",
      answer: "Automation typically costs 70-90% less than hiring equivalent staff. A $50,000 annual salary becomes a $5,000-$15,000 one-time automation investment. Plus, automation works 24/7 without benefits, sick days, or vacation time."
    },
    {
      question: "What happens if the automation breaks or needs updates?",
      answer: "All our automations include monitoring and maintenance. We catch issues before they affect your business and provide updates as your needs evolve. Most systems run for years without any intervention required."
    },
    {
      question: "Can automation integrate with our existing software?",
      answer: "Yes. We connect with 2,000+ popular business tools including CRMs, email platforms, accounting software, e-commerce platforms, and databases. If you use it, we can probably automate it."
    },
    {
      question: "How do we know which processes to automate first?",
      answer: "We start with a free automation audit to identify your highest-impact opportunities. We prioritize processes that are: repetitive, time-consuming, prone to delays, and performed frequently. This ensures maximum ROI from day one."
    },
    {
      question: "What if my team resists the change to automation?",
      answer: "We've never had a team complain about getting their time back. When employees stop doing boring, repetitive work and start doing meaningful, strategic work, resistance turns into enthusiasm. We also provide training to ensure smooth adoption."
    },
    {
      question: "Do I need technical knowledge to use the automations?",
      answer: "Not at all. We build everything to be user-friendly and often invisible. Your team continues working normally while automation handles the heavy lifting in the background. We provide simple dashboards for monitoring if needed."
    },
    {
      question: "What's your guarantee if the automation doesn't work as promised?",
      answer: "We offer a 30-day money-back guarantee. If you don't see measurable time savings and ROI within 30 days, we'll refund your investment completely. We're that confident in our results."
    },
    {
      question: "How long does it take to implement automation?",
      answer: "Simple automations can be live within 48 hours. Complex, multi-step workflows typically take 1-2 weeks. We work in phases so you start seeing benefits immediately while we build more advanced features."
    }
  ];

  const faqsAR = [
    {
      question: "ما مدى سرعة رؤية النتائج من الأتمتة؟",
      answer: "معظم العملاء يرون توفيراً فورياً في الوقت خلال الأسبوع الأول من التنفيذ. عادة ما يتم تحقيق عائد الاستثمار الكامل خلال 30 يوماً. نبدأ بنقاط الألم الأكبر لديك لتحقيق أقصى تأثير بسرعة."
    },
    {
      question: "ماذا لو كانت عمليات أعمالنا فريدة جداً للأتمتة؟",
      answer: "هذا ما نسمعه من 90% من عملائنا في البداية. الحقيقة هي أن معظم العمليات 'الفريدة' تتبع أنماطاً متشابهة. لقد قمنا بأتمتة كل شيء من سير عمل التصنيع المعقد إلى تسليم الخدمات المتخصصة. إذا كان البشر يمكنهم فعله بشكل متكرر، يمكننا أتمته."
    },
    {
      question: "كم تكلف الأتمتة مقارنة بتوظيف المزيد من الموظفين؟",
      answer: "الأتمتة تكلف عادة 70-90% أقل من توظيف موظفين مكافئين. راتب سنوي قدره 50,000 دولار يصبح استثماراً لمرة واحدة في الأتمتة قدره 5,000-15,000 دولار. بالإضافة إلى ذلك، الأتمتة تعمل 24/7 دون مزايا أو أيام مرض أو إجازة."
    },
    {
      question: "ماذا يحدث إذا تعطلت الأتمتة أو احتاجت تحديثات؟",
      answer: "جميع أتمتاتنا تشمل المراقبة والصيانة. نحن نكتشف المشاكل قبل أن تؤثر على عملك ونقدم التحديثات مع تطور احتياجاتك. معظم الأنظمة تعمل لسنوات دون الحاجة لأي تدخل."
    },
    {
      question: "هل يمكن للأتمتة التكامل مع البرامج الموجودة لدينا؟",
      answer: "نعم. نحن نتصل مع أكثر من 2,000 أداة عمل شائعة بما في ذلك أنظمة CRM ومنصات البريد الإلكتروني وبرامج المحاسبة ومنصات التجارة الإلكترونية وقواعد البيانات. إذا كنت تستخدمها، يمكننا على الأرجح أتمتتها."
    },
    {
      question: "كيف نعرف العمليات التي يجب أتمتتها أولاً؟",
      answer: "نبدأ بتدقيق مجاني للأتمتة لتحديد فرصك عالية التأثير. نحن نعطي الأولوية للعمليات التي هي: متكررة، مستهلكة للوقت، عرضة للتأخير، ويتم تنفيذها بشكل متكرر. هذا يضمن أقصى عائد استثمار من اليوم الأول."
    },
    {
      question: "ماذا لو قاوم فريقي التغيير إلى الأتمتة؟",
      answer: "لم نواجه أبداً فريقاً يشتكي من استرداد وقته. عندما يتوقف الموظفون عن القيام بعمل مملل ومتكرر ويبدؤون في القيام بعمل ذي معنى واستراتيجي، تتحول المقاومة إلى حماس. نحن نقدم أيضاً التدريب لضمان التبني السلس."
    },
    {
      question: "هل أحتاج معرفة تقنية لاستخدام الأتمتة؟",
      answer: "ليس على الإطلاق. نحن نبني كل شيء ليكون سهل الاستخدام وغالباً غير مرئي. يستمر فريقك في العمل بشكل طبيعي بينما تتولى الأتمتة العمل الثقيل في الخلفية. نقدم لوحات معلومات بسيطة للمراقبة إذا لزم الأمر."
    },
    {
      question: "ما هو ضمانكم إذا لم تعمل الأتمتة كما وُعد؟",
      answer: "نحن نقدم ضمان استرداد الأموال لمدة 30 يوماً. إذا لم تر توفيراً قابلاً للقياس في الوقت وعائد استثمار خلال 30 يوماً، سنسترد استثمارك بالكامل. نحن واثقون جداً من نتائجنا."
    },
    {
      question: "كم من الوقت يستغرق تنفيذ الأتمتة؟",
      answer: "الأتمتة البسيطة يمكن أن تكون جاهزة خلال 48 ساعة. سير العمل المعقد متعدد الخطوات يستغرق عادة 1-2 أسبوع. نحن نعمل على مراحل لذا تبدأ في رؤية الفوائد فوراً بينما نبني ميزات أكثر تقدماً."
    }
  ];

  const faqs = language === 'AR' ? faqsAR : faqsEN;

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">
              {language === 'AR' ? 'أسئلة وأجوبة' : 'Questions & Answers'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {language === 'AR' ? (
              <>
                كل ما تحتاج لمعرفته{' '}
                <span className="text-primary">
                  حول الأتمتة
                </span>
              </>
            ) : (
              <>
                Everything You Need to Know{' '}
                <span className="text-primary">
                  About Automation
                </span>
              </>
            )}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'AR'
              ? 'هذه هي الأسئلة الحقيقية التي يطرحها أصحاب الأعمال علينا قبل تحويل عملياتهم بالأتمتة:'
              : 'These are the real questions business owners ask us before transforming their operations with automation:'
            }
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl bg-card border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {language === 'AR' ? 'ما زال لديك أسئلة؟' : 'Still Have Questions?'}
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            {language === 'AR'
              ? 'احجز مكالمة مجانية لمدة 15 دقيقة وسنجيب على جميع أسئلتك حول أتمتة عملك المحدد.'
              : 'Book a free 15-minute call and we\'ll answer all your questions about automating your specific business.'
            }
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsBookingOpen(true)}
            className="px-8 py-4 bg-warning text-warning-foreground rounded-lg font-semibold hover:bg-warning/90 transition-colors"
          >
            {language === 'AR' ? 'احصل على إجابات لأسئلتك' : 'Get Your Questions Answered'}
          </motion.button>
        </motion.div>
      </div>
      
      {/* Cal.com Booking Modal */}
      <CalcomBooker 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </section>
  );
};

export default FAQ;