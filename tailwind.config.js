/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'heebo': ['Heebo', "sans-serif"],
      "anton": ['Anton', "sans-serif"]
    },
  },
  plugins: [require("daisyui")],
}

