const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'picton-blue': {
        '50': '#f2fcff', 
        '100': '#e6faff', 
        '200': '#bff2ff', 
        '300': '#99ebff', 
        '400': '#4ddbff', 
        '500': '#00ccff', 
        '600': '#00b8e6', 
        '700': '#0099bf', 
        '800': '#007a99', 
        '900': '#00647d'
    },
    }
  },
  plugins: [],
}