/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🌟 Correct Place: Nest your custom colors here to extend the default palette
      colors: {
        'blurple': '#5865F2', 
      },
    },
  },
  plugins: [],
}