import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyUI: {
    themes: false,
  },
  theme: {
    extend: {
      keyframes: {
        hover: {
          "0%, 100%": { transform: "translateY(0) skewY(0deg)" },
          "50%": { transform: "translateY(-20px) skewY(5deg)" },
        },
        "hover-2": {
          "0%, 100%": { transform: "translateY(0) skewY(0deg) rotate(120deg)" },
          "50%": { transform: "translateY(-20px) skewY(5deg) rotate(120deg)" },
        },
        glow: {
          "0%, 50%, 100%": {
            textShadow:
              "0 0 4px rgba(220,38,38,0.3), -1px -1px 0 #000, 1px 1px 0 #000",
          },
        },
      },
      animation: {
        hover: "hover 5s ease-in-out infinite",
        "hover-2": "hover-2 5s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))",
        banner: "url('/assets/images/banner.jpg')",
      },
      fontFamily: {
        ethnocentric: "var(--font-ethnocentric)",
        bebasneue: "var(--font-bebasneue)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      dropShadow: {
        glow: "0 0 4px rgba(220,38,38,0.5)",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
export default config;
