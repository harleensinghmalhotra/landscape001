/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#749a4b',
          secondary: '#8B7355',
          accent: '#F5F1E8',
        },
      },
    },
  },
  plugins: [],
};
