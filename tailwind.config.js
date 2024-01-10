/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'heebo': ['Oswald', "sans-serif"],
      "anton": ['Oswald', "sans-serif"]
    },
  },
  plugins: [require("daisyui")],
}

