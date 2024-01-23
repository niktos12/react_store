/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '3xl': {'max': '1530px'},
      '2xl': {'max': '1400px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      'x':{'max': '1199px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '878px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '752px'},
      'm':{'max': '650px'},
      'xm':{'max': '535px'},
      'xs':{'max':'426px'},
      
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

