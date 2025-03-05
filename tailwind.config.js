/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" // ✅ Ensures Tailwind scans all JSX/TSX files
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // ✅ Forces Tailwind to use "dark" class
  plugins: [],
};




  