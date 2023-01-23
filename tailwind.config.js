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
        spacing: {
            
        }
    },
  },
  plugins: [],
})
