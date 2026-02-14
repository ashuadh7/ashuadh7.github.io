/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          solid: '#0d4fd4',  // Button backgrounds, Icons
          link: '#6392f1',   // "Peer-Reviewed Journals" headers
          text: '#1a5fe9',   // "View Publication" links
        },
      },
    },
  },
  plugins: [],
};
