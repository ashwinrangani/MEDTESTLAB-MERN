/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    
  ],
  theme: {
    extend: {
      fontFamily: {
        display: [ 'Cairo', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

