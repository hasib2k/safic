/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bbe5cb',
          300: '#8dd1a8',
          400: '#5ab57e',
          500: '#369760',
          600: '#287a4d',
          700: '#20613f',
          800: '#1b4d34',
          900: '#17402c',
        },
        secondary: {
          50: '#fdf7f0',
          100: '#faebd7',
          200: '#f4d5ae',
          300: '#ecb97d',
          400: '#e39749',
          500: '#dc7d26',
          600: '#ce641c',
          700: '#ab4d19',
          800: '#893e1b',
          900: '#703318',
        }
      },
      fontFamily: {
        arabic: ['Noto Naskh Arabic', 'serif'],
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
