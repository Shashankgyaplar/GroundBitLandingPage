/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#e6f4ea',
          DEFAULT: '#25D366', // WhatsApp green accent
          dark: '#128C7E',
        },
        dark: '#0f172a',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hi: ['"Noto Sans Devanagari"', "sans-serif"],
        kn: ['"Noto Sans Kannada"', "sans-serif"],
        te: ['"Noto Sans Telugu"', "sans-serif"],
        ta: ['"Noto Sans Tamil"', "sans-serif"],
      }
    },
  },
  plugins: [],
}
