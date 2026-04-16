import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChapterStamp } from "@/components/brand/ChapterStamp";
import { fadeUp, staggerContainer, spring } from "@/lib/motion";

const STEPS = [
  {
    num: "01",
    titleEn: "Discovery",
    titleAr: "اكتشاف",
    descEn:
      "We audit your current workflows, identify bottlenecks, and map what's worth automating — and what isn't.",
    descAr:
      "ندقق في عملياتك الحالية، نحدد نقاط الاختناق، ونرسم خريطة لما يستحق الأتمتة — وما لا يستحق.",
  },
  {
    num: "02",
    titleEn: "Architecture",
    titleAr: "تصميم",
    descEn:
      "We design the system end-to-end: tool selection, data flows, fail-safes, and handoff points between human and machine.",
    descAr:
      "نصمم النظام من البداية للنهاية: اختيار الأدوات، تدفق البيانات، خطط الطوارئ، ونقاط التسليم بين الإنسان والآلة.",
  },
  {
    num: "03",
    titleEn: "Build & Test",
    titleAr: "بناء واختبار",
    descEn:
      "We build in short cycles, test with real data, and iterate until the system runs silently and reliably.",
    descAr:
      "نبني في دورات قصيرة، نختبر ببيانات حقيقية، ونكرر حتى يعمل النظام بصمت وموثوقية.",
  },
  {
    num: "04",
    titleEn: "Handover",
    titleAr: "تسليم",
    descEn:
      "You get documentation, training, and a system that runs. We stay available for support and iteration.",
    descAr:
      "تحصل على توثيق، تدريب، ونظام يعمل. نبقى متاحين للدعم والتطوير.",
  },
];

const HowItWorks = () => {
  const [language, setLanguage] = useState("EN");
  const sectionRef = useRef<HTMLElement>(null);

  /* Scroll-driven SVG line */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.15, 0.7], ["0%", "100%"]);

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
      ref={sectionRef}
      id="how-it-works"
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
              index="04"
              label="PROCESS"
              labelAr="العملية"
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
            {isAr ? "أربع خطوات. لا مفاجآت." : "Four steps. No surprises."}
          </motion.h2>

          {/* ─── Steps with connecting line ─────────────────────────────── */}
          <div className="relative">
            {/* Scroll-drawn vertical line (hidden on mobile) */}
            <div className="hidden md:block absolute left-[2.7rem] top-0 bottom-0 w-px">
              <div className="h-full bg-ink-line/30" />
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-gold via-gold-warm to-gold/30"
                style={{ height: lineHeight }}
              />
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-5%" }}
              className="space-y-12 md:space-y-16"
            >
              {STEPS.map((step) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  className="grid grid-cols-1 md:grid-cols-[5.5rem_1fr] gap-4 md:gap-10 items-start"
                >
                  {/* Large serif numeral */}
                  <div className="relative flex items-center justify-center md:justify-start">
                    <span className="font-editorial text-5xl md:text-6xl text-gold/25 leading-none tabular-nums select-none">
                      {step.num}
                    </span>
                    {/* Node dot on the vertical line */}
                    <span className="hidden md:block absolute left-[2.45rem] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold/80 ring-4 ring-ink-deep" />
                  </div>

                  {/* Content */}
                  <div className="md:pt-2">
                    <h3 className="text-xl md:text-2xl font-space-grotesk font-semibold text-foreground mb-2">
                      {isAr ? step.titleAr : step.titleEn}
                    </h3>
                    <p className="text-muted-foreground/80 text-[0.92rem] leading-relaxed max-w-[50ch]">
                      {isAr ? step.descAr : step.descEn}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
