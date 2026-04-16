import { motion } from "framer-motion";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { useMagneticHover, springSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  /** 0 = no magnetism, 0.5 = strong. default 0.3 */
  strength?: number;
  /** Visual variant */
  variant?: "primary" | "ghost";
}

/**
 * Premium CTA button — pulls subtly toward the cursor.
 * Uses motion values only (no useState on mouse move).
 */
export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ children, strength = 0.28, variant = "primary", className, ...rest }, forwardedRef) => {
    const { ref, x, y } = useMagneticHover(strength);

    return (
      <motion.div
        ref={ref}
        style={{ x, y }}
        className="inline-block will-change-transform"
      >
        <motion.button
          ref={forwardedRef}
          whileTap={{ scale: 0.97 }}
          transition={springSoft}
          className={cn(
            "group relative inline-flex items-center gap-3",
            "px-8 py-4 rounded-sm",
            "font-mono text-[0.78rem] uppercase tracking-mono-wider",
            "transition-colors duration-300",
            variant === "primary" && [
              "bg-gold/10 text-gold",
              "border border-gold/40",
              "hover:bg-gold hover:text-ink-deep hover:border-gold",
              "shadow-[inset_0_1px_0_hsla(40,55%,85%,0.15)]",
            ],
            variant === "ghost" && [
              "bg-transparent text-foreground/80",
              "border border-ink-line",
              "hover:border-gold/50 hover:text-foreground",
            ],
            className,
          )}
          {...rest}
        >
          {/* Inner refraction highlight (liquid-glass edge) */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-sm pointer-events-none
                       bg-gradient-to-b from-white/5 via-transparent to-transparent
                       opacity-60"
          />
          <span className="relative z-10 flex items-center gap-3">{children}</span>
        </motion.button>
      </motion.div>
    );
  },
);
MagneticButton.displayName = "MagneticButton";

export default MagneticButton;
