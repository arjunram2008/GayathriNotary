/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#1F3D2B',
        },
        accent: {
          gold: '#D6B98C',
        },
        bg: {
          beige: '#F7F3EF',
        },
        text: {
          charcoal: '#2B2B2B',
        },
        cta: {
          terracotta: '#C97C5D',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out',
        slideInUp: 'slideInUp 0.7s ease-out',
      },
    },
  },
  plugins: [],
}
