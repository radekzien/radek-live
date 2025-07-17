/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
       "./src/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#393a3bff',
      },
    },
  },
  plugins: [],
}

