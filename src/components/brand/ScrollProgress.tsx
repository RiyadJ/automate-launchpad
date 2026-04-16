import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Chapter {
  id: string;
  index: string;
  label: string;
  labelAr?: string;
}

interface ScrollProgressProps {
  chapters: Chapter[];
  /** CSS selector for the scroll container (snap-container). If null, uses window. */
  container?: string;
  language?: "EN" | "AR";
  className?: string;
}

/**
 * Fixed right-edge chapter indicator.
 * Shows: current chapter stamp + vertical progress rail.
 * Independent of content.  Always LTR (explicit bidi isolation).
 */
export const ScrollProgress = ({
  chapters,
  container,
  language = "EN",
  className,
}: ScrollProgressProps) => {
  const { scrollYProgress } = useScroll(
    container
      ? { container: { current: document.querySelector(container) as HTMLElement } }
      : undefined,
  );

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.3,
  });

  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.min(
        chapters.length - 1,
        Math.floor(v * chapters.length + 0.0001),
      );
      setActiveIdx(idx);
    });
  }, [scrollYProgress, chapters.length]);

  const current = chapters[activeIdx] ?? chapters[0];
  const currentLabel =
    language === "AR" && current.labelAr ? current.labelAr : current.label;

  return (
    <aside
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed right-5 md:right-8 top-1/2 -translate-y-1/2 z-30",
        "hidden md:flex flex-col items-end gap-6",
        className,
      )}
      dir="ltr"
      style={{ direction: "ltr", unicodeBidi: "isolate" }}
    >
      {/* Active chapter stamp */}
      <div className="flex flex-col items-end gap-1">
        <span className="font-mono text-[0.62rem] uppercase tracking-mono-wider text-steel/50">
          § {current.index} / {chapters.length.toString().padStart(2, "0")}
        </span>
        <span
          key={current.id}
          className="font-mono text-[0.68rem] uppercase tracking-mono-wide text-gold/90
                     animate-fade-in-up"
        >
          {currentLabel}
        </span>
      </div>

      {/* Vertical rail */}
      <div className="relative h-40 w-px bg-ink-line/70 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-gold via-gold-warm to-gold/40"
          style={{
            height: "100%",
            scaleY: progress,
            transformOrigin: "top",
          }}
        />
      </div>

      {/* Chapter tick marks */}
      <div className="flex flex-col gap-1.5">
        {chapters.map((ch, i) => (
          <span
            key={ch.id}
            className={cn(
              "block h-px transition-all duration-500",
              i === activeIdx ? "w-6 bg-gold" : "w-3 bg-steel/30",
            )}
          />
        ))}
      </div>
    </aside>
  );
};

export default ScrollProgress;
