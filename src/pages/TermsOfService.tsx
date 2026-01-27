import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const TermsOfServicePage = () => {
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
      title: 'Terms of Service',
      backToHome: 'Back to Home',
      sections: [
        {
          title: '1. Acceptance of Terms',
          content: 'By accessing or using Aotumate\'s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.'
        },
        {
          title: '2. Description of Services',
          content: 'Aotumate provides AI-powered automation solutions and consulting services to help businesses optimize their processes. Our services include process analysis, custom automation development, system integration, and ongoing support.'
        },
        {
          title: '3. Service Agreement',
          content: 'Specific terms for automation projects will be outlined in separate service agreements. These terms serve as the general framework for our relationship.'
        },
        {
          title: '4. Client Responsibilities',
          content: 'As a client, you are responsible for:',
          list: [
            'Providing accurate information about your business processes',
            'Granting necessary access to systems and data required for automation implementation',
            'Communicating requirements and feedback in a timely manner',
            'Ensuring compliance with applicable laws and regulations in your industry',
            'Maintaining confidentiality of any proprietary automation solutions we develop'
          ]
        },
        {
          title: '5. Our Responsibilities',
          content: 'We commit to:',
          list: [
            'Delivering automation solutions according to agreed specifications',
            'Maintaining confidentiality of your business information',
            'Providing reasonable support during implementation and testing phases',
            'Ensuring solutions meet industry best practices for security and reliability'
          ]
        },
        {
          title: '6. Intellectual Property',
          content: 'Custom automation solutions developed specifically for your business remain your property. General methodologies, frameworks, and non-client-specific improvements remain Aotumate\'s intellectual property.'
        },
        {
          title: '7. Confidentiality',
          content: 'We maintain strict confidentiality regarding your business processes, data, and any proprietary information shared during our engagement. This obligation continues beyond the termination of services.'
        },
        {
          title: '8. Limitation of Liability',
          content: 'While we strive for excellence, our liability is limited to the fees paid for the specific service in question. We are not liable for indirect, consequential, or incidental damages.'
        },
        {
          title: '9. Termination',
          content: 'Either party may terminate services with reasonable notice. Upon termination, you retain ownership of your data and any custom solutions developed for your business.'
        },
        {
          title: '10. Governing Law',
          content: 'These terms are governed by the laws of the jurisdiction where Aotumate operates. Any disputes will be resolved through good-faith negotiation or mediation.'
        },
        {
          title: '11. Changes to Terms',
          content: 'We may update these terms from time to time. Material changes will be communicated to existing clients with reasonable notice.'
        },
        {
          title: '12. Contact Information',
          content: 'For questions about these terms or our services, please contact us at Riyad@aotumate.com.'
        }
      ]
    },
    AR: {
      title: 'شروط الخدمة',
      backToHome: 'العودة للرئيسية',
      sections: [
        {
          title: '1. قبول الشروط',
          content: 'باستخدامك لخدمات Aotumate، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.'
        },
        {
          title: '2. وصف الخدمات',
          content: 'تقدم Aotumate حلول الأتمتة المدعومة بالذكاء الاصطناعي وخدمات الاستشارات لمساعدة الشركات على تحسين عملياتها. تشمل خدماتنا تحليل العمليات وتطوير الأتمتة المخصصة وتكامل الأنظمة والدعم المستمر.'
        },
        {
          title: '3. اتفاقية الخدمة',
          content: 'سيتم تحديد الشروط المحددة لمشاريع الأتمتة في اتفاقيات خدمة منفصلة. تعمل هذه الشروط كإطار عام لعلاقتنا.'
        },
        {
          title: '4. مسؤوليات العميل',
          content: 'بصفتك عميلاً، أنت مسؤول عن:',
          list: [
            'تقديم معلومات دقيقة حول عمليات عملك',
            'منح الوصول اللازم للأنظمة والبيانات المطلوبة لتنفيذ الأتمتة',
            'توصيل المتطلبات والملاحظات في الوقت المناسب',
            'ضمان الامتثال للقوانين واللوائح المعمول بها في مجال عملك',
            'الحفاظ على سرية أي حلول أتمتة خاصة نطورها'
          ]
        },
        {
          title: '5. مسؤولياتنا',
          content: 'نلتزم بما يلي:',
          list: [
            'تقديم حلول الأتمتة وفقًا للمواصفات المتفق عليها',
            'الحفاظ على سرية معلومات عملك',
            'توفير الدعم المعقول أثناء مراحل التنفيذ والاختبار',
            'ضمان أن الحلول تلبي أفضل ممارسات الصناعة للأمان والموثوقية'
          ]
        },
        {
          title: '6. الملكية الفكرية',
          content: 'تظل حلول الأتمتة المخصصة المطورة خصيصًا لعملك ملكًا لك. تظل المنهجيات العامة والأطر والتحسينات غير الخاصة بالعميل ملكية فكرية لـ Aotumate.'
        },
        {
          title: '7. السرية',
          content: 'نحافظ على سرية تامة فيما يتعلق بعمليات عملك وبياناتك وأي معلومات خاصة يتم مشاركتها خلال تعاملنا. يستمر هذا الالتزام بعد إنهاء الخدمات.'
        },
        {
          title: '8. تحديد المسؤولية',
          content: 'بينما نسعى للتميز، تقتصر مسؤوليتنا على الرسوم المدفوعة للخدمة المحددة المعنية. نحن غير مسؤولين عن الأضرار غير المباشرة أو التبعية أو العرضية.'
        },
        {
          title: '9. الإنهاء',
          content: 'يجوز لأي من الطرفين إنهاء الخدمات بإشعار معقول. عند الإنهاء، تحتفظ بملكية بياناتك وأي حلول مخصصة تم تطويرها لعملك.'
        },
        {
          title: '10. القانون الحاكم',
          content: 'تخضع هذه الشروط لقوانين الولاية القضائية التي تعمل فيها Aotumate. سيتم حل أي نزاعات من خلال التفاوض بحسن نية أو الوساطة.'
        },
        {
          title: '11. التغييرات على الشروط',
          content: 'قد نقوم بتحديث هذه الشروط من وقت لآخر. سيتم إبلاغ العملاء الحاليين بالتغييرات الجوهرية بإشعار معقول.'
        },
        {
          title: '12. معلومات الاتصال',
          content: 'للأسئلة حول هذه الشروط أو خدماتنا، يرجى الاتصال بنا على Riyad@aotumate.com.'
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

export default TermsOfServicePage;
