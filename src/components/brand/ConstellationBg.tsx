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
 * Nodes pushed to periphery — frame the content area, never overlap text.
 * Left column (low cx), right column (high cx), one at bottom-center.
 * Content area is roughly x:100-800 (LTR) or x:640-1340 (RTL).
 */
const nodes = [
  { cx: 100,  cy: 260, Icon: Bot,       type: "primary",   delay: 0 },
  { cx: 1350, cy: 140, Icon: GitBranch,  type: "secondary", delay: 0.5 },
  { cx: 720,  cy: 850, Icon: Workflow,   type: "primary",   delay: 1 },
  { cx: 80,   cy: 750, Icon: Webhook,    type: "secondary", delay: 1.5 },
  { cx: 1380, cy: 720, Icon: Activity,   type: "primary",   delay: 2 },
  { cx: 50,   cy: 500, Icon: Play,       type: "secondary", delay: 2.5 },
  { cx: 1400, cy: 450, Icon: Zap,        type: "primary",   delay: 3 },
] as const;

const paths = [
  {
    d: "M-100,260 L100,260 L1350,140 L1400,450 L1540,500",
    stroke: "hsl(var(--primary))",
    strokeWidth: 2,
    duration: 16,
    delay: 0,
    peakOpacity: 0.5,
  },
  {
    d: "M-100,750 L80,750 L50,500 L720,850 L1380,720 L1540,680",
    stroke: "hsl(var(--secondary))",
    strokeWidth: 2,
    duration: 20,
    delay: 4,
    peakOpacity: 0.4,
  },
  {
    d: "M-100,500 L50,500 L100,260 L1380,720 L720,850 L1540,850",
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

      {/* Icon nodes with glow */}
      {nodes.map(({ cx, cy, Icon, type, delay }) => {
        const glow = type === "primary" ? glowPrimary(delay) : glowSecondary(delay);
        const color = type === "primary" ? "hsl(var(--primary))" : "hsl(var(--secondary))";
        return (
          <g key={`${cx}-${cy}`}>
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

      {/* Connection paths */}
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
    </svg>
  </div>
));
ConstellationBg.displayName = "ConstellationBg";

export default ConstellationBg;
