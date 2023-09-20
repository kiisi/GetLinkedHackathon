/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d434fe",
        bgdark: "#150e26"
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)',
      },
      fontFamily: {
        'clashdisplay': ['ClashDisplay', 'sans'],
        'unicaone': ['Unica One', 'sans'],
        'primary': ['Montserrat', 'sans'],
      },
    },
  },
  plugins: [],
}