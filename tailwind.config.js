/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.md",
    "./layouts/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  safelist: [
    'top-20', 'top-28', 'top-32', 'top-36',
    'z-10', 'z-20', 'z-30', 'z-40'
  ],
  daisyui: {
    themes: [
      "light", 
      "dark", 
      "corporate", 
      "synthwave", 
      "cyberpunk", 
      "retro", 
      "dracula",
      "nord"
    ],
  },
}
