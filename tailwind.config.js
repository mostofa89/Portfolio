/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          950: "#0a0e1a",
          900: "#101525",
          800: "#141a2e",
          700: "#1d2540",
        },
        neon: {
          cyan: "#38bdf8",
          violet: "#818cf8",
          mint: "#34d399",
          pink: "#34d399",
          lime: "#34d399",
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "float-slower": "float 18s ease-in-out infinite",
        "spin-slow": "spin 28s linear infinite",
        "pulse-glow": "pulse-glow 3.5s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
        "typewriter": "typewriter 3s steps(40) 1s 1 normal both",
        "blink": "blink 0.9s steps(1) infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-30px) translateX(15px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: 0.45, transform: "scale(1)" },
          "50%": { opacity: 0.85, transform: "scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "0%, 50%": { opacity: 1 },
          "51%, 100%": { opacity: 0 },
        },
      },
      backgroundImage: {
        "grid-glow":
          "linear-gradient(rgba(224,231,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(224,231,255,0.05) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(129,140,248,0.22), transparent 50%), radial-gradient(ellipse at bottom, rgba(56,189,248,0.16), transparent 55%)",
      },
    },
  },
  plugins: [],
};
