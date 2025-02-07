/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.js",flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        'zodiac': ['Zodiak', 'serif'],
        'outfit': ['Outfit','serif'],
      },
    },
  },
  plugins: [flowbite.plugin()],
}

