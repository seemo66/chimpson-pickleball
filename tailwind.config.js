/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        roboto: ['var(--font-roboto)'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
      },
      colors: {
        // Brand palette
        white: '#FFFFFF', // pure white
        light: '#F5F5F5', // light gray (from screenshot)
        brandyellow: '#FFC400', // vibrant yellow
        dark: '#333333', // dark gray
        black: '#000000', // pure black
      },
    },
  },
  plugins: [],
};
