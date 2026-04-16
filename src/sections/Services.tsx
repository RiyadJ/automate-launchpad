import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChapterStamp } from "@/components/brand/ChapterStamp";
import { fadeUp, staggerContainer, spring } from "@/lib/motion";

interface Service {
  id: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  tags: string[];
}

const SERVICES: Service[] = [
  {
    id: "01",
    titleEn: "Process Automation",
    titleAr: "أتمتة العمليات",
    descEn:
      "We map your repetitive workflows — approvals, reports, data entry, email sequences — and replace manual steps with systems that run without supervision.",
    descAr:
      "نرسم خريطة عملياتك المتكررة — الموافقات، التقارير، إدخال البيانات، سلاسل البريد — ونستبدل الخطوات اليدوية بأنظمة تعمل دون إشراف.",
    tags: ["n8n", "Make", "Zapier", "Custom APIs"],
  },
  {
    id: "02",
    titleEn: "AI-Powered Support",
    titleAr: "دعم بالذكاء الاصطناعي",
    descEn:
      "Conversational agents trained on your knowledge base. They handle first-contact resolution, route complex tickets, and learn from every interaction.",
    descAr:
      "وكلاء محادثة مدرّبون على قاعدة معرفتك. يتعاملون مع الاستفسارات الأولية، يوجّهون التذاكر المعقدة، ويتعلمون من كل تفاعل.",
    tags: ["GPT-4o", "Claude", "RAG", "Voiceflow"],
  },
  {
    id: "03",
    titleEn: "Data Integration",
    titleAr: "تكامل البيانات",
    descEn:
      "API bridges between the tools you already use. CRM talks to accounting, inventory syncs with shipping, and nothing falls through the cracks.",
    descAr:
      "جسور API بين الأدوات التي تستخدمها. نظام العملاء يتحدث مع المحاسبة، المخزون يتزامن مع الشحن، ولا شيء يضيع.",
    tags: ["REST", "Webhooks", "Supabase", "Airtable"],
  },
  {
    id: "04",
    titleEn: "Custom Internal Tools",
    titleAr: "أدوات داخلية مخصصة",
    descEn:
      "Admin dashboards, client portals, booking systems — lightweight applications built exactly for your operation, not adapted from someone else's template.",
    descAr:
      "لوحات تحكم، بوابات عملاء، أنظمة حجز — تطبيقات خفيفة مبنية بالضبط لعمليتك، وليست معدّلة من قالب شخص آخر.",
    tags: ["React", "Supabase", "Vercel", "Tailwind"],
  },
  {
    id: "05",
    titleEn: "Content Operations",
    titleAr: "عمليات المحتوى",
    descEn:
      "Publishing pipelines that take raw footage or copy and deliver edited, scheduled, multi-platform content — with human review at the checkpoints that matter.",
    descAr:
      "خطوط إنتاج تأخذ المادة الخام وتسلّم محتوى محرّر ومجدول لعدة منصات — مع مراجعة بشرية في النقاط المهمة.",
    tags: ["FFmpeg", "Remotion", "YouTube API", "Social APIs"],
  },
];

const Services = () => {
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
      id="services"
      className="snap-section min-h-[100dvh] flex items-start pt-8 md:items-center md:pt-0 bg-background"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Chapter stamp */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8"
          >
            <ChapterStamp
              index="03"
              label="SERVICES"
              labelAr="خدمات"
              language={language}
            />
          </motion.div>

          {/* Section headline */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-editorial text-3xl md:text-5xl lg:text-6xl tracking-editorial-tight
                       leading-[0.95] text-foreground mb-4 max-w-3xl"
          >
            {isAr
              ? "ما نبنيه."
              : "What we build."}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-muted-foreground text-base max-w-[50ch] mb-8 md:mb-10 leading-relaxed"
          >
            {isAr
              ? "كل مشروع يبدأ من عمليتك الحالية. نحدد ما يمكن أتمتته، نبنيه، ونسلّمه يعمل."
              : "Every engagement starts from your existing process. We identify what can be automated, build it, and hand it over running."}
          </motion.p>

          {/* ─── Capabilities index (zig-zag rows, not card grid) ─────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.id}
                variants={fadeUp}
                className="border-t border-ink-line/50 py-4 md:py-5"
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-[auto_1fr_1.5fr] gap-4 md:gap-8 lg:gap-12 items-start ${
                    i % 2 === 1 ? "md:grid-cols-[auto_1.5fr_1fr]" : ""
                  }`}
                >
                  {/* Row number */}
                  <span className="font-mono text-[0.62rem] text-steel/40 tabular-nums pt-1 shrink-0">
                    {svc.id}
                  </span>

                  {/* Title block */}
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <h3 className="text-lg md:text-xl font-space-grotesk font-semibold text-foreground mb-2">
                      {isAr ? svc.titleAr : svc.titleEn}
                    </h3>
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {svc.tags.map((tag) => (
                        <span key={tag} className="tech-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-muted-foreground/80 text-[0.88rem] leading-relaxed ${
                      i % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    {isAr ? svc.descAr : svc.descEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom hairline */}
          <div className="hair-tick" />
        </div>
      </div>
    </section>
  );
};

export default Services;
