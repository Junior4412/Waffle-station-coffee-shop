import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          50: "#fdf8f0",
          100: "#f5e6cc",
          200: "#e8c99a",
          300: "#d4a55e",
          400: "#c4883a",
          500: "#a8692a",
          600: "#8b5020",
          700: "#6b3a17",
          800: "#4a2710",
          900: "#2d1608",
          950: "#1a0d04",
        },
        cream: {
          50: "#fefcf8",
          100: "#fdf5e4",
          200: "#f9e8c2",
          300: "#f3d48f",
          400: "#ebbf5c",
          500: "#e0a832",
          600: "#c48920",
          700: "#9e6b18",
          800: "#7a5214",
          900: "#5c3e10",
        },
        gold: {
          DEFAULT: "#c9954a",
          light: "#e0b870",
          dark: "#9d6e2e",
        },
        dark: {
          bg: "#0e0906",
          card: "#1a110a",
          border: "#2d1f14",
          surface: "#231609",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        accent: ["var(--font-accent)", "cursive"],
      },
      backgroundImage: {
        "noise": "url('/images/noise.svg')",
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "steam": "steam 3s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        steam: {
          "0%, 100%": { opacity: "0", transform: "translateY(0) scaleX(1)" },
          "50%": { opacity: "0.6", transform: "translateY(-20px) scaleX(1.2)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "glow-gold": "0 0 30px rgba(201, 149, 74, 0.3)",
        "glow-cream": "0 0 20px rgba(249, 232, 194, 0.15)",
        "card": "0 4px 40px rgba(0,0,0,0.6)",
        "card-hover": "0 8px 60px rgba(0,0,0,0.8), 0 0 20px rgba(201,149,74,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
