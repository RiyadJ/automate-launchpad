import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'satoshi': ['Satoshi', 'Space Grotesk', 'sans-serif'],
				'space-grotesk': ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				'editorial': ['Fraunces', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
				'technical': ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
				'mono': ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
			},
			letterSpacing: {
				'editorial-tight': '-0.04em',
				'editorial-snug': '-0.025em',
				'mono-wide': '0.12em',
				'mono-wider': '0.18em',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				ink: {
					deep: 'hsl(var(--ink-deep))',
					mid: 'hsl(var(--ink-mid))',
					raised: 'hsl(var(--ink-raised))',
					line: 'hsl(var(--ink-line))',
				},
				steel: {
					DEFAULT: 'hsl(var(--steel))',
					foreground: 'hsl(var(--steel-foreground))',
				},
				gold: {
					DEFAULT: 'hsl(var(--gold))',
					soft: 'hsl(var(--gold-soft))',
					warm: 'hsl(var(--gold-warm))',
					deep: 'hsl(var(--gold-deep))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'drift': {
					'0%, 100%': { transform: 'translate3d(0,0,0)' },
					'50%': { transform: 'translate3d(0,-6px,0)' }
				},
				'breathe': {
					'0%, 100%': { opacity: '0.55' },
					'50%': { opacity: '1' }
				},
				'caret': {
					'0%, 49%': { opacity: '1' },
					'50%, 100%': { opacity: '0' }
				},
				'tick': {
					'0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
					'100%': { transform: 'scaleX(1)', transformOrigin: 'left' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'shimmer': 'shimmer 6s linear infinite',
				'drift': 'drift 7s ease-in-out infinite',
				'breathe': 'breathe 3.2s ease-in-out infinite',
				'caret': 'caret 1s steps(1) infinite',
				'tick': 'tick 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
