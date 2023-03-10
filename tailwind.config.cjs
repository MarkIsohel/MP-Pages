/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        leagueSpartan: "'League Spartan', sans-serif;"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
