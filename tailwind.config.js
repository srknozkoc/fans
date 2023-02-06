/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.65rem'
      },
      colors: {
        'primary-color': '#b3b3b3',
        'hover-color': '#f2f2f2',
        'heart': '#413ef0',
        'button': '#120e33',
        'search':'#d2d5d6',
        'fon-bg':'#3d3c4f'
      },
    },
  },
  plugins: [],
}