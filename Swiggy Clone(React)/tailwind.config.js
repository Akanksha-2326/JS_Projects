//tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "./public/index.html",
      ],
      theme: {
        extend: {
          colors: {
            primary: '#FF0000', // Custom primary color
          },
          fontFamily: {
            sans: ['Graphik', 'sans-serif'], // Custom font family
          },
        },
      },
      plugins: [],
    }

//     // tailwind.config.js
// module.exports = {
//   content: [
//     './src/**/*.{html,js,jsx,ts,tsx}', // adjust as needed
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
