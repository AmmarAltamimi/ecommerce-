/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pumping: 'pumping 300ms ease-out',
      },
      keyframes: {
        pumping: {
          '0%': { transform: 'scale(1)' },
          '20%': { transform: 'scale(0.8)' },
          '30%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1.7)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
}