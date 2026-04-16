import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { ChapterStamp } from "@/components/brand/ChapterStamp";
import { MagneticButton } from "@/components/brand/MagneticButton";
import { fadeUp, springCinematic } from "@/lib/motion";

const CTA = () => {
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
    <section id="cta" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Chapter stamp */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 md:mb-14"
          >
            <ChapterStamp
              index="07"
              label="CONTACT"
              labelAr="تواصل"
              language={language}
            />
          </motion.div>

          {/* Split layout: headline left, CTA right */}
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 md:gap-20 items-end">
            {/* Left — big editorial statement */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-editorial text-4xl md:text-6xl lg:text-[5.5rem] tracking-editorial-tight leading-[0.9] text-foreground mb-6">
                {isAr ? "لنتحدث." : "Let's talk."}
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="gold-rule mb-8 origin-left"
              />
              <p className="text-muted-foreground text-base leading-relaxed max-w-[45ch]">
                {isAr
                  ? "المكالمة الأولى 30 دقيقة. مجانية. بدون عروض تقديمية. نسمع عن عمليتك ونخبرك إذا كان بإمكاننا المساعدة."
                  : "First call is 30 minutes. Free. No slides. We listen to your process and tell you if we can help."}
              </p>
            </motion.div>

            {/* Right — CTA button + meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, ...springCinematic }}
              className="flex flex-col items-start md:items-end gap-6"
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

              <span className="font-mono text-[0.62rem] uppercase tracking-mono-wider text-steel/50">
                Riyad@aotumate.com
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
