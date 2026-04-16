import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Marquee } from "@devnomic/marquee";
import { ConstellationBg } from "@/components/brand/ConstellationBg";
import { ChapterStamp } from "@/components/brand/ChapterStamp";
import { MagneticButton } from "@/components/brand/MagneticButton";
import { springCinematic } from "@/lib/motion";

/* ─── Premium invented names (taste-skill: NO startup slop) ──────── */
const TRUSTED_BY = [
  "Halden Industries",
  "Atelier Ostrum",
  "Penumbra Labs",
  "Bayard Group",
  "Quarry North",
  "Vaughn & Kress",
  "Tessera Collective",
  "Wren & Caliber",
  "Nordvelt Partners",
];

const Hero = () => {
  const [currentLetter, setCurrentLetter] = useState("o");
  const [language, setLanguage] = useState("EN");

  /* Letter swap — preserved exactly */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetter((prev) => (prev === "o" ? "u" : "o"));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  /* Language sync */
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
      id="hero"
      className="snap-section relative flex items-start md:items-center overflow-hidden"
      style={{ minHeight: "100dvh" }}
    >
      {/* ─── Background layers ─────────────────────────────────────── */}
      <ConstellationBg />
      <div className="absolute inset-0 bg-gradient-to-br from-background/96 via-background/92 to-background/88" />

      {/* ─── Content ───────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 pt-8 pb-32 md:py-0">
        <div className="max-w-7xl mx-auto">
          {/* Chapter stamp */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-10 md:mb-14"
          >
            <ChapterStamp index="01" label="HERO" labelAr="البداية" language={language} />
          </motion.div>

          {/* Left-aligned content (DESIGN_VARIANCE=8: anti-center) */}
          <div className="max-w-3xl">
            {/* Tech chip */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, ...springCinematic }}
              className="tech-chip mb-8 inline-flex"
            >
              {isAr ? "بنية تحتية للأتمتة" : "Operations Infrastructure"}
            </motion.span>

            {/* ─── H1 — editorial serif + letter swap (PRESERVED) ─── */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ...springCinematic }}
              className="font-editorial text-5xl md:text-7xl lg:text-[6.2rem] tracking-editorial-tight leading-[0.92] text-foreground mb-3"
            >
              {isAr ? (
                <>أتمِت.</>
              ) : (
                <>
                  A
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentLetter}
                      initial={{ y: 20, opacity: 0, rotateX: 90 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -20, opacity: 0, rotateX: -90 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block"
                    >
                      {currentLetter}
                    </motion.span>
                  </AnimatePresence>
                  t
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`second-${currentLetter === "o" ? "u" : "o"}`}
                      initial={{ y: -20, opacity: 0, rotateX: -90 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: 20, opacity: 0, rotateX: 90 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block"
                    >
                      {currentLetter === "o" ? "u" : "o"}
                    </motion.span>
                  </AnimatePresence>
                  mate.
                </>
              )}
            </motion.h1>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="gold-rule mb-8 origin-left"
            />

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, ...springCinematic }}
              className="text-base md:text-lg text-muted-foreground max-w-[55ch] mb-12 leading-relaxed"
            >
              {isAr
                ? "نصمّم ونبني أنظمة أتمتة تزيل العقبات دون أن تمسّ الجودة. عمليات هادئة، عوائد متراكمة."
                : "We design and ship automation systems that remove bottlenecks without removing craft. Quiet operations, compounding returns."}
            </motion.p>

            {/* CTA — magnetic button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, ...springCinematic }}
              id="hero-cta"
            >
              <MagneticButton
                onClick={() =>
                  window.open(
                    "https://cal.com/riyad-jaamour/30-mins-discovery-call",
                    "_blank",
                  )
                }
              >
                {isAr ? "احجز مكالمة استكشافية" : "Book a Discovery Call"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── Trusted-by marquee — pinned to bottom ─────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute bottom-14 md:bottom-16 left-0 right-0 z-10"
      >
        <p className="section-meta mb-4 px-6 md:px-12 lg:px-16">
          {isAr ? "موثوق من قبل" : "Trusted by"}
        </p>
        <div
          className="overflow-hidden relative"
          dir="ltr"
          style={{ direction: "ltr", unicodeBidi: "isolate" }}
        >
          <Marquee fade={true} pauseOnHover={false} numberOfCopies={5}>
            {TRUSTED_BY.map((company, index) => (
              <span
                key={`${company}-${index}`}
                className="text-steel/60 font-mono text-[0.72rem] uppercase tracking-mono-wide px-8"
              >
                {company}
              </span>
            ))}
          </Marquee>
        </div>
      </motion.div>

      {/* ─── Scroll indicator ──────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-steel/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
