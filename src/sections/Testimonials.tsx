import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChapterStamp } from "@/components/brand/ChapterStamp";
import { fadeUp, staggerContainer } from "@/lib/motion";

const TESTIMONIALS = [
  {
    quoteEn:
      "We went from four people managing order intake to one person reviewing exceptions. The system handles the rest — and it doesn't take sick days.",
    quoteAr:
      "انتقلنا من أربعة أشخاص يديرون استقبال الطلبات إلى شخص واحد يراجع الاستثناءات. النظام يتولى الباقي — ولا يأخذ إجازات مرضية.",
    nameEn: "Nadia Khalili",
    nameAr: "نادية خليلي",
    role: "COO",
    companyEn: "Meridian Logistics",
    companyAr: "ميريديان لوجيستكس",
  },
  {
    quoteEn:
      "Other agencies gave us a Zapier link and called it automation. Aotumate gave us an architecture that actually scales with our client load.",
    quoteAr:
      "وكالات أخرى أعطتنا رابط Zapier وسمّته أتمتة. Aotumate أعطانا بنية تتوسع فعلاً مع حجم عملائنا.",
    nameEn: "Thomas Rehberg",
    nameAr: "توماس ريبرغ",
    role: "Founder",
    companyEn: "Kova Studio",
    companyAr: "استديو كوفا",
  },
  {
    quoteEn:
      "The ROI showed up in 23 days. Not because the number was optimistic — because they measured from production, not from kickoff.",
    quoteAr:
      "العائد ظهر في 23 يوماً. ليس لأن الرقم كان متفائلاً — بل لأنهم قاسوا من بدء التشغيل، لا من بدء المشروع.",
    nameEn: "Layla Haroun",
    nameAr: "ليلى هارون",
    role: "Director of Operations",
    companyEn: "Crescent Health",
    companyAr: "كريسنت هيلث",
  },
];

const Testimonials = () => {
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
      id="testimonials"
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
              index="05"
              label="PROOF"
              labelAr="شهادات"
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
                       leading-[0.95] text-foreground mb-16 md:mb-20 max-w-2xl"
          >
            {isAr
              ? "لا تأخذ كلامنا. خذ كلامهم."
              : "Don't take our word for it."}
          </motion.h2>

          {/* ─── Stacked testimonials (not grid, not carousel) ──────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            className="space-y-16 md:space-y-20"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.blockquote
                key={i}
                variants={fadeUp}
                className="relative border-t border-ink-line/50 pt-8 md:pt-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-start">
                  {/* Quote */}
                  <div>
                    {/* Decorative serif quote mark */}
                    <span
                      aria-hidden="true"
                      className="font-editorial text-5xl md:text-6xl text-gold/15 leading-none select-none block -mb-4 md:-mb-6"
                    >
                      &ldquo;
                    </span>
                    <p className="text-foreground/90 text-lg md:text-xl leading-relaxed max-w-[55ch]">
                      {isAr ? t.quoteAr : t.quoteEn}
                    </p>
                  </div>

                  {/* Attribution */}
                  <div className="flex flex-col items-start md:items-end gap-1 md:min-w-[180px]">
                    <span className="text-foreground font-space-grotesk font-medium text-sm">
                      {isAr ? t.nameAr : t.nameEn}
                    </span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-mono-wider text-steel/60">
                      {t.role}
                    </span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-mono-wide text-gold/60">
                      {isAr ? t.companyAr : t.companyEn}
                    </span>
                  </div>
                </div>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
