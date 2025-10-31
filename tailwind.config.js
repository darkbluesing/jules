/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/start/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1313ec",
        "background-light": "#f6f6f8",
        "background-dark": "#101022",
        "tae-red": "#CD2E3A",
        "tae-blue": "#0047A0",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        korean: ["Noto Sans KR", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};