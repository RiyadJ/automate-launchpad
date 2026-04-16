/**
 * Aotumate motion primitives
 * ──────────────────────────────────────────────────────────────
 * Spring-based, GPU-friendly utilities shared across all sections.
 * All mouse-tracking helpers use Framer Motion's `useMotionValue`
 * + `useTransform` (NOT `useState`) to stay outside the React
 * render cycle and avoid performance collapse on mobile.
 */

import { useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import type { Transition, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

/* ─── Canonical spring physics (taste-skill § 4) ─────────────────── */
export const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 0.7,
};

/** Softer spring — for hover / magnetic */
export const springSoft: Transition = {
  type: "spring",
  stiffness: 160,
  damping: 22,
  mass: 0.4,
};

/** Slow, cinematic spring — for hero entrances */
export const springCinematic: Transition = {
  type: "spring",
  stiffness: 60,
  damping: 18,
  mass: 1,
};

/* ─── Variants (reusable) ────────────────────────────────────────── */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...spring, duration: 0.9 },
  },
};

export const staggerContainer: Variants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const revealLeft: Variants = {
  hidden:  { opacity: 0, x: -40, filter: "blur(6px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: spring },
};

export const revealRight: Variants = {
  hidden:  { opacity: 0, x: 40, filter: "blur(6px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: spring },
};

/* ─── useMagneticHover — physical button pull toward cursor ──────── */
export function useMagneticHover(strength = 0.35) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 180, damping: 16, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 180, damping: 16, mass: 0.35 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      x.set(relX * strength);
      y.set(relY * strength);
    };
    const onLeave = () => {
      x.set(0);
      y.set(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, x, y]);

  return { ref, x: sx, y: sy };
}

/* ─── useMouseSpotlight — for spotlight-border cards ─────────────── */
export function useMouseSpotlight() {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mx.set(e.clientX - rect.left);
      my.set(e.clientY - rect.top);
    };
    const onLeave = () => {
      mx.set(-9999);
      my.set(-9999);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my]);

  return { ref, mx, my };
}

/* ─── useParallaxY — creates a motion value tied to scroll progress ─ */
export function useParallaxY(
  scrollYProgress: MotionValue<number>,
  distance = 80,
) {
  return useTransform(scrollYProgress, [0, 1], [-distance / 2, distance / 2]);
}

/* ─── Re-exports (convenience for sections) ──────────────────────── */
export { useMotionValue, useTransform, useSpring };
