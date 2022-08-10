/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/tw-elements/dist/js/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'inter' : 'Inter',
        'roboto' : 'Roboto',
      },
      colors: {
        'background-color' : '#F0F0EF',
        'background-hover' : '#352F44',
        'primary-color' : '#74B49B',
        'secondary-color' : '#5C8D89',
        'subtitle-color' : '#909090',
        'red-color' : '#B33030',
        'white-color' : '#F6FBF4',
        'card-color' : '#EAEAEA',
      },
      screens: {
        'sm': '530px',
        'md': '801px',
        'xl': '1280px',
        
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
