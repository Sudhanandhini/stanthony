/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: '#8B1A1A',
        'maroon-dark': '#6B1212',
        navy: '#1a3974',
        'nav-blue': '#1565C0',
        teal: '#00BCD4',
        'teal-dark': '#0097A7',
        'teal-light': '#E0F7FA',
        purple: '#800080',
        'purple-light': '#800080',
        'quick-purple': '#800080',
        'quick-orange': '#F5A623',
        'quick-pink': '#E91E8C',
        'sci-green': '#2E7D32',
        'com-blue': '#1565C0',
        'arts-brown': '#BF6A00',
        gold: '#D4AF37',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

