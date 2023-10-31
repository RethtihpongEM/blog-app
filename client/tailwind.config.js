/** @type {import('tailwindcss').Config} */
/*eslint no-undef: "error"*/
/*eslint-env node*/

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    // screens: {
    //   'sm': '375px',
    //   // => @media (min-width: 576px) { ... }

    //   'md': '960px',
    //   // => @media (min-width: 960px) { ... }

    //   'lg': '1440px',
    //   // => @media (min-width: 1440px) { ... }
    // }
  },
  plugins: [
  ],
});