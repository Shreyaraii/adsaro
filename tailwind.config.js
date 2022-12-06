/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'roboto': ['Roboto', 'sans-serif',],
    },
    extend: {
      colors:{
        'grey': "#FFFFFF1A",
      }
    },
  },
  plugins: [],
}
