/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Ensures Tailwind scans all JSX files
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // ✅ Keep this for later, but ignore dark styles for now
  plugins: [],
};





  