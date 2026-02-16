/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0d4fd4',   // Default color for the brand
          solid: '#0d4fd4',     // Button backgrounds, Icons
          link: '#6392f1',      // "Peer-Reviewed Journals" headers
          text: '#1a5fe9',      // "View Publication" links
          dark: '#0b42b0',      // Darker shade for hover states
        },

        primary: {
          DEFAULT: '#ffffff',   // bg-primary = White
          dark: '#0f172a',
        },
        surface: {
          DEFAULT: '#f8fafc',   // bg-surface = Off-white (Slate-50) for cards/nav
          dark: '#1e293b',      // Darker slate for dark mode 
        },
        content: {
            DEFAULT: '#0f172a', // text-content = Dark slate for readability
            muted: '#64748b',   // text-content-muted = Gray (Secondary text)
            inverse: '#ffffff', // text-content-inverse = White (Text on dark backgrounds)
        }
      },
    },
  },
  plugins: [],
};
