/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
      colors: {
        primary: '#06006e',
        secondary: '#5e17eb',
        accent: '#00c2cb',
        white: '#FFFFFF',
        iconcolor: '#03bbed',
      iconcolor2: '#04084e',
      },
    },
  },
  plugins: [],
};