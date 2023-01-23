const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            spaceGrotesk: ["Space Grotesk"],
            montserrat: ["Montserrat"],
            inter: ["Inter"]
        },
        colors: {
            blackText: '#28292B',
            dirtyWhite: '#F5F5F5'
        },
        backgroundImage: {
            'line-gradient': 'linear-gradient(180deg, #2E2929 5.43%, #B7886A 12.69%, #D2886E 19.18%, #CE503E 26%, #A25256 32.93%, #746681 40.09%, rgba(64, 109, 158, 0.19) 51.57%, rgba(255, 255, 255, 1) 60.03%)'
        }
    },
  },
  plugins: [],
})
