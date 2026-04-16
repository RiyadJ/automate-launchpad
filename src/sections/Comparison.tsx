import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChapterStamp } from "@/components/brand/ChapterStamp";
import { fadeUp, staggerContainer, spring } from "@/lib/motion";

const PAIN_POINTS = [
  {
    en: "Your team re-enters the same data into three different systems every morning.",
    ar: "فريقك يعيد إدخال نفس البيانات في ثلاثة أنظمة مختلفة كل صباح.",
  },
  {
    en: "One missed invoice costs more than the tool that would have caught it.",
    ar: "فاتورة واحدة منسية تكلّف أكثر من الأداة التي كانت ستلتقطها.",
  },
  {
    en: "You hired to scale. The process didn't.",
    ar: "وظّفت لتكبر. العملية لم تكبر معك.",
  },
];

const OUTCOMES = [
  {
    en: "Data moves once. Systems stay in sync. Your team does actual work.",
    ar: "البيانات تتحرك مرة واحدة. الأنظمة تبقى متزامنة. فريقك يعمل فعلاً.",
  },
  {
    en: "Errors are caught before they compound. The math flips.",
    ar: "الأخطاء تُكتشف قبل أن تتراكم. المعادلة تنقلب.",
  },
  {
    en: "Throughput scales. Headcount doesn't have to.",
    ar: "الإنتاجية تتضاعف. عدد الموظفين لا يحتاج لذلك.",
  },
];

const Comparison = () => {
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
      id="comparison"
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
              index="02"
              label="COMPARE"
              labelAr="مقارنة"
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
              ? "الفرق بين العمل على عملك والعمل في عملك."
              : "The difference between working on your business and working in it."}
          </motion.h2>

          {/* ─── Split-screen comparison (asymmetric 5fr / 1px / 6fr) ──── */}
          <div className="grid grid-cols-1 md:grid-cols-[5fr_1px_6fr] gap-8 md:gap-0">
            {/* Left column — pain (muted) */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:pr-10 lg:pr-14"
            >
              <span className="section-meta block mb-8">
                {isAr ? "بدون أتمتة" : "Without Aotumate"}
              </span>
              {PAIN_POINTS.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="mb-8 last:mb-0"
                >
                  {/* Tick mark */}
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-[0.62rem] text-steel/40 tabular-nums pt-1.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-muted-foreground/70 leading-relaxed text-[0.94rem]">
                      {isAr ? item.ar : item.en}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* ─── Brutalist vertical divider with tick marks ──────── */}
            <div className="hidden md:flex flex-col items-center py-4">
              <div className="w-px flex-1 bg-gradient-to-b from-ink-line/40 via-gold/30 to-ink-line/40 relative">
                {/* Tick marks */}
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, ...spring }}
                    className="absolute left-1/2 -translate-x-1/2 w-3 h-px bg-gold/50 origin-left"
                    style={{ top: `${25 + i * 25}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Right column — outcome (gold-tinted, heavier) */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:pl-10 lg:pl-14"
            >
              <span className="section-meta block mb-8 text-gold/80">
                {isAr ? "مع Aotumate" : "With Aotumate"}
              </span>
              {OUTCOMES.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="mb-8 last:mb-0"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-[0.62rem] text-gold/50 tabular-nums pt-1.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-foreground/90 leading-relaxed text-[0.94rem]">
                      {isAr ? item.ar : item.en}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom metric bar — organic numbers (no round fakes) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, ...spring }}
            className="mt-16 md:mt-24 pt-8 border-t border-ink-line/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              {[
                {
                  value: "43",
                  unit: isAr ? "ساعة/شهر" : "hrs/mo",
                  label: isAr
                    ? "متوسط الوقت المسترجع"
                    : "avg. time reclaimed",
                },
                {
                  value: "94.3%",
                  unit: "",
                  label: isAr
                    ? "انخفاض في الأخطاء اليدوية"
                    : "reduction in manual errors",
                },
                {
                  value: "31",
                  unit: isAr ? "يوم" : "days",
                  label: isAr
                    ? "متوسط وقت تحقيق العائد"
                    : "median time to ROI",
                },
              ].map((stat, i) => (
                <div key={i} className="flex items-baseline gap-2">
                  <span className="font-editorial text-3xl md:text-4xl text-gold tracking-editorial-tight">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="font-mono text-[0.62rem] uppercase tracking-mono-wider text-steel/60">
                      {stat.unit}
                    </span>
                  )}
                  <span className="font-mono text-[0.62rem] uppercase tracking-mono-wide text-steel/40 ml-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
