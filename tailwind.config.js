/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        black: {
          DEFAULT: "#161616",
          100: "#939393",
          200: "#B6B7B8",

        },
        blue: {
          100: "#0A7AFF",
          200: "#4472C4"

        },
        red: "#E03535",
        progress: {
          bg: "#EDF1FA",
          bar: "#4472C4",
        },
      }
    },
  },
  plugins: [],
}
