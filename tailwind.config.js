/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "2rem",
        lg: "4rem",
        xl: "1rem",
        "2xl": "2rem",
      },
    },
    screens: {
      sm: "320px",
      md: "640px",
      lg: "768px",
      xl: "1140px",
      "2xl": "1280px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        btnBg: "#EC8305",
        primary: "#071516",
        secondary: "#4335A7",
        text: "#222222",
      },
      fontFamily: {
        roboto: '"Roboto", sans-serif',
        nunito: '"Nunito Sans", sans-serif',
      },
    },
  },
  plugins: [],
};
