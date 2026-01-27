import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PrivacyPolicyPage = () => {
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

  const content = {
    EN: {
      title: 'Privacy Policy',
      backToHome: 'Back to Home',
      sections: [
        {
          title: '1. Information We Collect',
          content: 'We collect information you provide directly to us, such as when you contact us for consultation, request automation services, or communicate with us. This may include your name, email address, phone number, company information, and details about your business processes.'
        },
        {
          title: '2. How We Use Your Information',
          content: 'We use the information we collect to:',
          list: [
            'Provide, maintain, and improve our automation services',
            'Communicate with you about our services and respond to your inquiries',
            'Develop custom AI and automation solutions for your business',
            'Send you technical updates, security alerts, and administrative messages',
            'Analyze usage patterns to improve our service offerings'
          ]
        },
        {
          title: '3. Information Sharing',
          content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:',
          list: [
            'With your explicit consent',
            'To comply with legal obligations or respond to lawful requests',
            'To protect our rights, property, or safety, or that of our users',
            'With trusted service providers who assist in our operations under strict confidentiality agreements'
          ]
        },
        {
          title: '4. Data Security',
          content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure data transmission, and regular security assessments.'
        },
        {
          title: '5. AI and Automation Services',
          content: 'When providing AI and automation services, we may process your business data to develop and implement custom solutions. All client data is handled with strict confidentiality and is not used to train general AI models or shared with other clients.'
        },
        {
          title: '6. Data Retention',
          content: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.'
        },
        {
          title: '7. Your Rights',
          content: 'You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. To exercise these rights, please contact us at Riyad@aotumate.com.'
        },
        {
          title: '8. Changes to This Policy',
          content: 'We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the effective date.'
        },
        {
          title: '9. Contact Us',
          content: 'If you have any questions about this privacy policy or our data practices, please contact us at Riyad@aotumate.com.'
        }
      ]
    },
    AR: {
      title: 'سياسة الخصوصية',
      backToHome: 'العودة للرئيسية',
      sections: [
        {
          title: '1. المعلومات التي نجمعها',
          content: 'نجمع المعلومات التي تقدمها لنا مباشرة، مثل عندما تتواصل معنا للاستشارة، أو تطلب خدمات الأتمتة، أو تتواصل معنا. قد يشمل ذلك اسمك وعنوان بريدك الإلكتروني ورقم هاتفك ومعلومات شركتك وتفاصيل حول عمليات عملك.'
        },
        {
          title: '2. كيف نستخدم معلوماتك',
          content: 'نستخدم المعلومات التي نجمعها من أجل:',
          list: [
            'تقديم وصيانة وتحسين خدمات الأتمتة لدينا',
            'التواصل معك حول خدماتنا والرد على استفساراتك',
            'تطوير حلول الذكاء الاصطناعي والأتمتة المخصصة لعملك',
            'إرسال التحديثات التقنية وتنبيهات الأمان والرسائل الإدارية',
            'تحليل أنماط الاستخدام لتحسين عروض خدماتنا'
          ]
        },
        {
          title: '3. مشاركة المعلومات',
          content: 'نحن لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك فقط في الظروف التالية:',
          list: [
            'بموافقتك الصريحة',
            'للامتثال للالتزامات القانونية أو الاستجابة للطلبات القانونية',
            'لحماية حقوقنا أو ممتلكاتنا أو سلامتنا أو سلامة مستخدمينا',
            'مع مقدمي الخدمات الموثوقين الذين يساعدون في عملياتنا بموجب اتفاقيات سرية صارمة'
          ]
        },
        {
          title: '4. أمن البيانات',
          content: 'نطبق تدابير تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفصاح أو التدمير. يشمل ذلك التشفير ونقل البيانات الآمن وتقييمات الأمان المنتظمة.'
        },
        {
          title: '5. خدمات الذكاء الاصطناعي والأتمتة',
          content: 'عند تقديم خدمات الذكاء الاصطناعي والأتمتة، قد نعالج بيانات عملك لتطوير وتنفيذ حلول مخصصة. يتم التعامل مع جميع بيانات العملاء بسرية تامة ولا تستخدم لتدريب نماذج الذكاء الاصطناعي العامة أو مشاركتها مع عملاء آخرين.'
        },
        {
          title: '6. الاحتفاظ بالبيانات',
          content: 'نحتفظ بمعلوماتك الشخصية فقط طالما كان ذلك ضروريًا لتحقيق الأغراض الموضحة في سياسة الخصوصية هذه، ما لم يكن مطلوبًا أو مسموحًا به بموجب القانون فترة احتفاظ أطول.'
        },
        {
          title: '7. حقوقك',
          content: 'لديك الحق في الوصول إلى معلوماتك الشخصية أو تحديثها أو حذفها. يمكنك أيضًا إلغاء الاشتراك في بعض الاتصالات منا. لممارسة هذه الحقوق، يرجى الاتصال بنا على Riyad@aotumate.com.'
        },
        {
          title: '8. التغييرات على هذه السياسة',
          content: 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات جوهرية عن طريق نشر السياسة الجديدة على موقعنا وتحديث تاريخ السريان.'
        },
        {
          title: '9. اتصل بنا',
          content: 'إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارسات البيانات الخاصة بنا، يرجى الاتصال بنا على Riyad@aotumate.com.'
        }
      ]
    }
  };

  const currentContent = language === 'AR' ? content.AR : content.EN;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {currentContent.backToHome}
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
              {currentContent.title}
            </h1>

            <div className="space-y-8">
              {currentContent.sections.map((section, index) => (
                <motion.section
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </motion.section>
              ))}
            </div>

            <div className="pt-8 mt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                {language === 'AR' ? 'آخر تحديث:' : 'Last updated:'} {new Date().toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
