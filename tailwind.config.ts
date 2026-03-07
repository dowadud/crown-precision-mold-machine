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
        black: {
          DEFAULT: "#0B0B0D",
          deep: "#0B0B0D",
        },
        charcoal: "#1A1D22",
        graphite: "#2C3038",
        steel: "#BFC5CC",
        metal: "#5D646C",
        gold: {
          DEFAULT: "#C89A3D",
          light: "#E0B45C",
          dark: "#A07828",
        },
        smoke: "#F3F4F6",
      },
      fontFamily: {
        heading: ["var(--font-barlow)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "noise": "url('/noise.svg')",
        "gold-gradient": "linear-gradient(135deg, #C89A3D 0%, #E0B45C 50%, #C89A3D 100%)",
        "dark-gradient": "linear-gradient(180deg, #0B0B0D 0%, #1A1D22 100%)",
      },
      animation: {
        "shimmer": "shimmer 2.5s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
