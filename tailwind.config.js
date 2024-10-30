/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}", "./assets/**/*.{html,js}"],
  theme: {
    extend: {
      cursor: {

        'custom': 'url(/assets/images/favpng_finger-pointer-cursor_12x18.cur), pointer'
      }
    },
  },
  plugins: [],
}

