/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'footer': '#363636',
      },
      backgroundImage: {
        'hero-slider': "url('./src/images/hero-bg.png')",
      }
    },
  },
  plugins: [],
}