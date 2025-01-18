/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: 'hsl(218.18, 9.73%, 22.16%)',
      },
    },
  },
  plugins: [],
}