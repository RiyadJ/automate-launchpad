import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import { ChapterStamp } from "@/components/brand/ChapterStamp";
import { fadeUp, staggerContainer, spring } from "@/lib/motion";

interface FaqItem {
  qEn: string;
  qAr: string;
  aEn: string;
  aAr: string;
}

const FAQS: FaqItem[] = [
  {
    qEn: "How quickly can we expect results?",
    qAr: "كم من الوقت حتى نرى نتائج؟",
    aEn: "Most projects go live within 2-4 weeks. Simple single-workflow automations can ship in 48 hours. Complex multi-system integrations typically take 6-8 weeks with staged rollouts.",
    aAr: "معظم المشاريع تنطلق خلال 2-4 أسابيع. الأتمتة البسيطة لسير عمل واحد يمكن تسليمها في 48 ساعة. التكاملات المعقدة متعددة الأنظمة تستغرق عادة 6-8 أسابيع مع إطلاق تدريجي.",
  },
  {
    qEn: "What does an engagement cost?",
    qAr: "كم تكلفة المشروع؟",
    aEn: "It depends on scope, not on hours. A typical first engagement runs $3,000-$8,000 for a complete automation system. We quote fixed-price after the discovery call — no hourly billing, no surprise invoices.",
    aAr: "يعتمد على النطاق، لا على الساعات. المشروع الأول النموذجي يتراوح بين $3,000-$8,000 لنظام أتمتة كامل. نقدم سعراً ثابتاً بعد مكالمة الاكتشاف — لا فوترة بالساعة، لا فواتير مفاجئة.",
  },
  {
    qEn: "Can you integrate with the tools we already use?",
    qAr: "هل يمكنكم التكامل مع أدواتنا الحالية؟",
    aEn: "Almost certainly. We work with REST APIs, webhooks, direct database connections, and platform-specific SDKs. If your tool has an API or can export data, we can connect it.",
    aAr: "شبه مؤكد. نعمل مع واجهات REST APIs، webhooks، اتصالات مباشرة بقواعد البيانات، و SDKs خاصة بالمنصات. إذا كانت أداتك تملك API أو تصدّر بيانات، يمكننا ربطها.",
  },
  {
    qEn: "What happens if something breaks?",
    qAr: "ماذا يحدث إذا تعطل شيء؟",
    aEn: "Every system we build includes error handling, retry logic, and alert notifications. You get a monitoring dashboard. If an issue exceeds automated recovery, we're on-call within SLA terms.",
    aAr: "كل نظام نبنيه يتضمن معالجة أخطاء، منطق إعادة المحاولة، وإشعارات تنبيه. تحصل على لوحة مراقبة. إذا تجاوزت المشكلة الاسترداد الآلي، نحن متاحون ضمن شروط اتفاقية الخدمة.",
  },
  {
    qEn: "Do we need technical staff to maintain this?",
    qAr: "هل نحتاج فريقاً تقنياً لصيانة النظام؟",
    aEn: "No. We design for operator-level maintenance: toggles, not code. Your team can pause, adjust, and monitor without touching the underlying logic.",
    aAr: "لا. نصمم للصيانة على مستوى المشغّل: أزرار تبديل، لا أكواد. فريقك يستطيع الإيقاف المؤقت، التعديل، والمراقبة دون لمس المنطق الأساسي.",
  },
  {
    qEn: "What makes you different from a freelance developer on Upwork?",
    qAr: "ما الذي يميزكم عن مطور مستقل على Upwork؟",
    aEn: "Scope. A freelancer builds a script. We build a system — with error handling, documentation, monitoring, and a handover that doesn't require you to become technical. We stay accountable after launch.",
    aAr: "النطاق. المستقل يبني سكربت. نحن نبني نظاماً — بمعالجة أخطاء، توثيق، مراقبة، وتسليم لا يتطلب منك أن تصبح تقنياً. نبقى مسؤولين بعد الإطلاق.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const saved = localStorage.getItem("preferredLanguage") || "EN";
    setLanguage(saved);
    const handler = (e: CustomEvent) => setLanguage(e.detail);
    window.addEventListener("languageChange", handler as EventListener);
    return () =>
      window.removeEventListener("languageChange", handler as EventListener);
  }, []);

  const isAr = language === "AR";

  return (
    <section
      id="faq"
      className="snap-section min-h-[100dvh] flex items-center py-20 md:py-0 bg-background"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Chapter stamp */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 md:mb-16"
          >
            <ChapterStamp
              index="06"
              label="FAQ"
              labelAr="أسئلة"
              language={language}
            />
          </motion.div>

          {/* Two-column: headline left, accordion right */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20">
            {/* Left — headline */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-editorial text-3xl md:text-5xl lg:text-6xl tracking-editorial-tight leading-[0.95] text-foreground mb-4">
                {isAr ? "أسئلة متكررة." : "Questions we hear often."}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[35ch]">
                {isAr
                  ? "إذا لم تجد إجابتك هنا، احجز مكالمة وسنتحدث."
                  : "If yours isn't here, book a call and we'll talk through it."}
              </p>
            </motion.div>

            {/* Right — accordion */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-5%" }}
            >
              {FAQS.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="border-t border-ink-line/50"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full py-5 md:py-6 flex items-start gap-4 text-left
                               hover:opacity-90 transition-opacity group"
                    aria-expanded={openIndex === i}
                  >
                    {/* Q prefix */}
                    <span className="font-mono text-[0.62rem] text-steel/40 uppercase tracking-mono-wider tabular-nums pt-1 shrink-0">
                      Q/{String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="flex-1 text-[0.94rem] md:text-base font-space-grotesk font-medium text-foreground/90">
                      {isAr ? faq.qAr : faq.qEn}
                    </h3>

                    <span className="shrink-0 pt-0.5">
                      {openIndex === i ? (
                        <Minus className="w-4 h-4 text-gold/70" />
                      ) : (
                        <Plus className="w-4 h-4 text-steel/50 group-hover:text-steel/80 transition-colors" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-[calc(0.62rem+3.5rem)] md:pl-[calc(0.62rem+3.5rem)]">
                          <p className="text-muted-foreground/80 text-[0.88rem] leading-relaxed max-w-[55ch]">
                            {isAr ? faq.aAr : faq.aEn}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              {/* Bottom hairline */}
              <div className="hair-tick" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
