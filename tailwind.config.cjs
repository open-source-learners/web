/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  // where to look
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'

    },
    // container: {
    //   padding: {
    //     DEFAULT: '1rem',
    //     sm: '2rem',
    //     lg: '4rem',
    //     xl: '5rem',
    //     '2xl': '6rem',
    //   },
    // }
    extend: {},

  },
  plugins: [],
};