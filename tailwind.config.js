/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost,san-serif"],
        caveat: ["Caveat, san-serif"],
      },
      colors: {
        primary: "#29a587",
        background: "#f0ebe4",
      },
    },
  },
  plugins: [],
};
