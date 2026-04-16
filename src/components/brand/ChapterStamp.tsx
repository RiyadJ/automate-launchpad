import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ChapterStampProps {
  /** Section index, zero-padded ("01") */
  index: string;
  /** Section title in English */
  label: string;
  /** Optional Arabic label for RTL parity */
  labelAr?: string;
  /** Force language display (falls back to document.dir) */
  language?: "EN" | "AR";
  className?: string;
  /** If true, aligns to the right edge */
  align?: "left" | "right";
}

/**
 * Industrial chapter marker: § 01 / HERO
 * Appears at the top-left (or top-right) of each section.
 */
export const ChapterStamp = ({
  index,
  label,
  labelAr,
  language = "EN",
  className,
  align = "left",
}: ChapterStampProps) => {
  const displayLabel = language === "AR" && labelAr ? labelAr : label;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "flex items-center gap-3 section-meta",
        align === "right" && "flex-row-reverse",
        className,
      )}
      dir="ltr"
      style={{ direction: "ltr", unicodeBidi: "isolate" }}
    >
      <span className="text-gold/80 leading-none">§</span>
      <span className="text-steel/90 tabular-nums tracking-[0.3em]">{index}</span>
      <span
        aria-hidden="true"
        className="inline-block h-px w-8 bg-gradient-to-r from-gold/60 via-gold/20 to-transparent"
      />
      <span className="text-steel/70">{displayLabel}</span>
    </motion.div>
  );
};

export default ChapterStamp;
