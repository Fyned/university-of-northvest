/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0f172a', // Deep Navy (Ana Renk - Kurumsal)
          800: '#1e293b',
          700: '#334155',
        },
        secondary: {
          600: '#ca8a04', // Academic Gold (Vurgu Rengi)
          500: '#eab308',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      }
    },
  },
  plugins: [],
}