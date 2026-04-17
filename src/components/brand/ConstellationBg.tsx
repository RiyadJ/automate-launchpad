import { memo } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  GitBranch,
  Workflow,
  Webhook,
  Activity,
  Play,
  Zap,
} from "lucide-react";

/**
 * Constellation SVG background — preserved signature animation.
 * Renders pulsing icon nodes connected by drawing paths.
 * Extracted from Hero for code hygiene; animation logic is untouched.
 */

const glowPrimary = (delay: number) => ({
  filter: [
    "drop-shadow(0 0 0 hsl(var(--primary) / 0))",
    "drop-shadow(0 0 8px hsl(var(--primary) / 0.6))",
    "drop-shadow(0 0 0 hsl(var(--primary) / 0))",
  ],
  transition: { duration: 3, repeat: Infinity, delay },
});

const glowSecondary = (delay: number) => ({
  filter: [
    "drop-shadow(0 0 0 hsl(var(--secondary) / 0))",
    "drop-shadow(0 0 8px hsl(var(--secondary) / 0.6))",
    "drop-shadow(0 0 0 hsl(var(--secondary) / 0))",
  ],
  transition: { duration: 3, repeat: Infinity, delay },
});

/*
 * Moved from original:
 *   Bot:      (200,150)→(200,280)  — down, clear header glass
 *   Webhook:  (400,600)→(400,720)  — down, clear CTA button
 *   Activity: (800,500)→(800,680)  — down past Arabic text, above marquee
 * Unchanged: GitBranch, Workflow, Play, Zap
 *
 * mobile: true → shown on mobile. Others hidden <md to reduce clutter.
 */
const nodes = [
  { cx: 200,  cy: 280, Icon: Bot,       type: "primary",   delay: 0,   mobile: true },
  { cx: 600,  cy: 300, Icon: GitBranch,  type: "secondary", delay: 0.5, mobile: false },
  { cx: 1000, cy: 200, Icon: Workflow,   type: "primary",   delay: 1,   mobile: true },
  { cx: 400,  cy: 720, Icon: Webhook,    type: "secondary", delay: 1.5, mobile: false },
  { cx: 800,  cy: 680, Icon: Activity,   type: "primary",   delay: 2,   mobile: false },
  { cx: 315,  cy: 415, Icon: Play,       type: "secondary", delay: 2.5, mobile: false },
  { cx: 1115, cy: 365, Icon: Zap,        type: "primary",   delay: 3,   mobile: true },
];

const paths = [
  {
    d: "M-100,280 L200,280 L315,415 L600,300 L1000,200 L1115,365 L1540,250",
    stroke: "hsl(var(--primary))",
    strokeWidth: 2,
    duration: 16,
    delay: 0,
    peakOpacity: 0.5,
  },
  {
    d: "M-100,720 L400,720 L315,415 L800,680 L1000,200 L1115,365 L1540,350",
    stroke: "hsl(var(--secondary))",
    strokeWidth: 2,
    duration: 20,
    delay: 4,
    peakOpacity: 0.4,
  },
  {
    d: "M-100,400 L200,280 L600,300 L800,680 L400,720 L1115,365 L1540,450",
    stroke: "hsl(var(--primary))",
    strokeWidth: 1.5,
    duration: 18,
    delay: 8,
    peakOpacity: 0.3,
  },
];

export const ConstellationBg = memo(() => (
  <div className="absolute inset-0 overflow-hidden">
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="automation-grid"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="50" cy="50" r="1.5" fill="hsl(var(--primary))" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#automation-grid)" />

      {/* Icon nodes with glow — mobile-hidden nodes use CSS class */}
      {nodes.map(({ cx, cy, Icon, type, delay, mobile }) => {
        const glow = type === "primary" ? glowPrimary(delay) : glowSecondary(delay);
        const color = type === "primary" ? "hsl(var(--primary))" : "hsl(var(--secondary))";
        return (
          <g key={`${cx}-${cy}`} className={mobile ? "" : "constellation-desktop"}>
            <motion.circle
              cx={cx}
              cy={cy}
              r="15"
              stroke={color}
              strokeWidth="1"
              fill="none"
              opacity="0.4"
              animate={{ filter: glow.filter }}
              transition={glow.transition}
            />
            <foreignObject x={cx - 12} y={cy - 12} width="24" height="24">
              <Icon
                className={`w-6 h-6 opacity-90 ${
                  type === "primary" ? "text-primary" : "text-secondary"
                }`}
              />
            </foreignObject>
          </g>
        );
      })}

      {/* Connection paths — hidden on mobile */}
      <g className="constellation-desktop">
        {paths.map((p, i) => (
          <motion.path
            key={i}
            d={p.d}
            stroke={p.stroke}
            strokeWidth={p.strokeWidth}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 1],
              opacity: [0, p.peakOpacity, p.peakOpacity, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
              times: [0, 0.7, 0.9, 1],
            }}
          />
        ))}
      </g>
    </svg>
  </div>
));
ConstellationBg.displayName = "ConstellationBg";

export default ConstellationBg;
