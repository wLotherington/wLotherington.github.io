const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./index.html", "./**/*.html", "./**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ekko: {
          blue: "#334252",
          teal: "#00bdaa",
          pink: "#ff895d",
        },
        teal: colors.teal,
        cyan: colors.cyan,
        link: {
          normal: "#4c74b9",
          decoration: "#d2dcee",
          hover: "#829dce",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
