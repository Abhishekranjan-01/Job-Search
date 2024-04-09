/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        grad_1: `linear-gradient("to right", "#0099f7", "#f11712")`,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    screens: {
      xm: "350px",
      ssm: "450px",
      sm: "550px",
      md: "720px",
      llg: "900px",
      lg: "1280px",
      xl: "1536px",
    },
    fontFamily: {
      pacifico_regula: ["Pacifico", "cursive"],
      Roboto_Mono: ["Roboto Mono", "monospace"],
      Kalam_Regular: ["Kalam", "cursive"],
    },
  },
  plugins: [],
};
