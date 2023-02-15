const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1110px',
    },
    extend: {
      colors: {
        orange: "hsl(22, 65%, 57%)",
        lightOrange: "hsl(21, 94%, 75%)",
        black: "hsl(0, 0%, 0%)",
        lightBlack: "hsl(0, 0%, 6%)",
        grey: "hsl(0, 0%, 95%)",
        lightGrey: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        primary: ["var(--manrope-font)", ...fontFamily.sans],
        sans: ["var(--manrope-font)", ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xl: "0",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: "3.5rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          lineHeight: "58px",
          letterSpacing: "2px",
        },
        h2: {
          fontSize: "2.5rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          lineHeight: "44px",
          letterSpacing: "1.5px",
        },
        h3: {
          fontSize: "2rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          lineHeight: "36px",
          letterSpacing: "1.15px",
        },
        h4: {
          fontSize: "1.75rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          lineHeight: "38px",
          letterSpacing: "2px",
        },
        h5: {
          fontSize: "1.5rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          lineHeight: "33px",
          letterSpacing: "1.7px",
        },
        h6: {
          fontSize: "1.125rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          lineHeight: "24px",
          letterSpacing: "1.3px",
        },
        p: { fontSize: "0.938rem", lineHeight: "25px" },
        a: {
          textDecoration: "none",
          color: theme("colors.white"),
          fontWeight: "bold",
          textTransform: "uppercase",
          lineHeight: "25px",
          letterSpacing: "2px",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            color: theme("colors.orange"),
            transition: "all 0.2s ease-in-out",
          },
        },
      });
    }),
  ],
};
