/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        grey: "#232322",
        black: "#0F0E0E",
        red: "#FE0100"
      },
    },
  },
  plugins: [],
}

