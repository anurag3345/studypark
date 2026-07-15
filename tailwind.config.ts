import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "2rem", lg: "3rem", xl: "4rem" },
    },
    extend: {
      colors: {
        // Core design system — matched to the real StudyPark logo (blue + orange)
        ink: {
          DEFAULT: "#132840", // primary text
          soft: "#44586E",
        },
        navy: {
          50: "#EAF4FB",
          100: "#CDE6F6",
          200: "#9BCDED",
          300: "#63AEDD",
          400: "#3A97D3",
          500: "#2688C7", // primary brand blue (matches logo "Park" / icon)
          600: "#1D71AA",
          700: "#175A87",
          800: "#123A57", // deep brand blue — footer / dark sections
          900: "#0D2740",
        },
        gold: {
          50: "#FEF3E4",
          100: "#FCE0BB",
          300: "#F7B966",
          500: "#F5941F", // primary brand orange (matches logo "Study")
          600: "#D97908",
          700: "#B86307",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F5F8FB",
          border: "#E1E9F0",
        },
        success: "#1D7A4C",
        danger: "#B3261E",
      },
      fontFamily: {
        display: ["\"Poppins\"", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["\"Inter\"", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["\"IBM Plex Mono\"", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 5vw, 4.5rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.75rem, 2.6vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.005em" }],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(18,35,61,0.04), 0 8px 24px -12px rgba(18,35,61,0.10)",
        "card-hover": "0 4px 10px rgba(18,35,61,0.06), 0 16px 36px -14px rgba(18,35,61,0.16)",
      },
      keyframes: {
        "draw-line": {
          from: { strokeDashoffset: "1" },
          to: { strokeDashoffset: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
