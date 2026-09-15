/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Your custom restrained palette
        background: '#FAF8F5', // Warm off-white
        textPrimary: '#2C3E50', // Deep charcoal
        textSecondary: '#5D737E', // Muted slate/teal
        accent: '#7FB8C9', // Lighter blue for highlights
      },
      fontFamily: {
        // Use clean system fonts or import a professional Google Font
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}