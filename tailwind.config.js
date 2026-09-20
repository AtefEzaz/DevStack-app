/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#f97316',
          pink: '#ec4899',
          violet: '#8b5cf6',
        },
      },
      backgroundImage: {
        // Single source of truth for the brand gradient.
        // Change this one value to re-theme the whole UI.
        'brand-gradient': 'linear-gradient(90deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
}
