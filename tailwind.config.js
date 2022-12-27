/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    fontFamily: {
      inter: ["Monserrat", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#000000",
        // headings
        purple: "#9588A8",
        // background colour
        beige: "#F5EDD6",
        lightPurple: "#F5F5FF",
        lightGray: "#f2f2f2",
        white: "#ffffff",
        tiber: "#042A29",
      },
      maxWidth: {
        400: 400,
        600: 600,
        1000: 1000,
      },
      maxHeight: {
        600: 600,
        1000: 1000,
      },
      minWidth: {
        500: 500,
        600: 600,
      },
      minHeight: {
        200: 200,
        300: 300,
        500: 500,
        600: 600,
      },
    },
  },
  plugins: [],
};
