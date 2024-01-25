/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'heebo': ["sans-serif"],
      "anton": [ "sans-serif"],
      "oswald": [ "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
}

