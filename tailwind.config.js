/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1D51",
        accent: "#725CAD",
      },
      fontFamily: {
        anton: ["'anton'", ...defaultTheme.fontFamily.sans],
        barlowl: ["'barlowl'", ...defaultTheme.fontFamily.sans],
        barlowr: ["'barlowr'", ...defaultTheme.fontFamily.sans],
        barlowm: ["'barlowm'", ...defaultTheme.fontFamily.sans],
        barlowsb: ["'barlowsb'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
