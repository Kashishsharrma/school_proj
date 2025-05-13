/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gloock: ['Gloock', 'serif'],
        haviland: ['Mr De Haviland', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        wistania: ['Wistania', 'cursive'], 
        elegant: ['Great Vibes', 'cursive'], /* Change to preferred font */
        lora: ["Lora", "serif"],      },
    },
    fontWeight: {
      extralight: '300',
    },
  },
  plugins: [],
}
