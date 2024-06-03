const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderColor: {
        'primary-red': '#c50f42',
      },
      boxShadow: {
        'custom-light': '0 0 10px 2px rgba(0, 0, 0, .1)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes:{
        'trans-right':{
          '0%,100%':{transform:'translateX(10px)',},
          '50%':{transform:'translateX(0)'}
        },
        Animation:{
          'trans-right':'trans-right ease-in-out infinite'

        }
      }
     
    },
  },
  plugins: [
   
  ],
};
