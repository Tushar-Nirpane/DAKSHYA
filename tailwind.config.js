/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBg: "#FCF9F2",
        brandCard: "#FFFFFF",
        brandBorder: "#E6E1D8",
        brandTextDark: "#1C1917",
        brandTextMuted: "#57534E",
        accentPrimary: "#0284C7",
        accentSecondary: "#4F46E5",
        goldHighlight: "#D97706",
        // Signature "control deck" dark panel — used for the hero + footer strip
        deckBg: "#07090D",
        deckPanel: "#0E131A",
        deckBorder: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
        meshDrift: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(3%, -4%) scale(1.05)" },
          "66%": { transform: "translate(-3%, 3%) scale(0.98)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        shimmer: "shimmer 1.8s ease-in-out infinite",
        meshDrift: "meshDrift 14s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
      },
      backgroundImage: {
        "shimmer-gradient":
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 100%)",
      },
    },
  },
  plugins: [],
};
