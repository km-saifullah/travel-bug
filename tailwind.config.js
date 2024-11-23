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
        DEFAULT: "0",
        sm: "1rem",
        md: "2rem",
        lg: "4rem",
        xl: "1rem",
        "2xl": "2rem",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        btnBg: "#EC8305",
        primary: "#071516",
        secondary: "#4335A7",
        text: "#4B5051",
        dark: "#12151E",
      },
      fontFamily: {
        roboto: '"Roboto", sans-serif',
        nunito: '"Nunito Sans", sans-serif',
      },
    },
  },
  plugins: [],
};
