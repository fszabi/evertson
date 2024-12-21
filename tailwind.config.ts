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
      animation: {
        hover: "hover 5s ease-in-out infinite",
        "hover-2": "hover-2 5s ease-in-out infinite",
      },
      keyframes: {
        hover: {
          "0%, 100%": { transform: "translateY(0) skewY(0deg)" },
          "50%": { transform: "translateY(-20px) skewY(5deg)" },
        },
        "hover-2": {
          "0%, 100%": { transform: "translateY(0) skewY(0deg) rotate(120deg)" },
          "50%": { transform: "translateY(-20px) skewY(5deg) rotate(120deg)" },
        },
      },

      backgroundImage: {
        gradient:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))",
        banner: "url('/assets/images/banner.jpg')",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        "roboto-mono": "var(--font-roboto-mono)",
        lato: "var(--font-lato)",
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
export default config;
