module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#16C172',
        secondary: '#F2F2F2',
        lightBlack: '#575857',
        blue: '#0066FF',
        orange: '#F78764',
      },
      screens: {
        xs: '576px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
