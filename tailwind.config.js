/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        white: "#FFFFFF",
        grey: "#232322",
        greyAlt: "#313131",
        black: "#0F0E0E",
        blackAlt: "#222222",
        highlight: "#3a3a3a",
        red: "#FE0100"
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      animation: {
        'gradient': 'gradient 2s linear infinite',
      }
    },
    plugins: [],
  }
}
