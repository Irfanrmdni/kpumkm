/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      colors: {
        'black': '#1A1A1A',
        'darkgray': '#4D4D4D',
        'light': '#E1E1E1',
        'red': '#D94E47',
        'orange': '#DEA336',
        'gray': '#969FB9',
        'blue': '#3DAAD6',
        'green': '#6BAA41',
      },
      backgroundImage: {
        'background-banner': "url('./images/background-banner.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
  ],
}