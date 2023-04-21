/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    fontFamily:{
      sans:['var(--font-sharpGrotesk)']
    },
     colors:{
      black:{
        100:"#111111",
        200:"#1A1A1A"
      },
      blue:{
        100:"#25B5D5",
        200:"#4BDFFF"
      },
      peach:{
        100:"#F8A910",
        200:"#FFC148"
      },
      mint:{
        100:"#0BF1AD",
        200:"#44FFC8"
      },
      yellow:"#FFC148",
      primaryText:"#A2A2A2",
      secondaryText:"#FAFAFA"

     }
    },
  },
  plugins: [],
}
