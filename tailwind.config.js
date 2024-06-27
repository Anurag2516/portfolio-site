/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Scan all files in the src directory
    './public/index.html'          // Scan the index.html file in public directory
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '300px',
        'xs' : '425px',
        'xxl': '2560px',
      },
      colors: {
        customColor: '#E8F7F8',
        customColor1: '#EAF8F9',
        customColor2: '#D1DEE0',
      },
      fontFamily: {
        poppins:["poppins, sans-serif"],
        playwrite: ["Playwrite DE Grund, cursive"],    
      }
    },
  },
  plugins: [],
}


