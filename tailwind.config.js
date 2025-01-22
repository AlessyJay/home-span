/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        rubikBold: ["Rubik-Bold", "sans-serif"],
        rubikMedium: ["Rubik-Medium", "sans-serif"],
        rubikSemiBold: ["Rubik-SemiBold", "sans-serif"],
        rubikLight: ["Rubik-Light", "sans-serif"],
        rubikExtraBold: ["Rubik-ExtraBold", "sans-serif"],
      },
    },

    colors: {
      primary: {
        100: "#0061ff0a",
        200: "#0061ff1a",
        300: "#0061ff",
      },
      accent: {
        100: "#fbfbfd",
      },
      black: {
        default: "#000",
        100: "#8c8e98",
        200: "#666876",
        300: "#191d31",
      },
      white: "#fff",
      danger: "#f75555",
    },
  },
  plugins: [],
};
