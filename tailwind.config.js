module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkgrey': '#06062b',
        'darkblue': '#04599B',
        'darkblue2': '#0A0B3B',
        'darkblueform': '#081c50',
      },
      animation: {
        fade: 'fadeIn 0.6s ease-in-out forwards',
        fadeOut: 'fadeOut 0.6s ease-in-out forwards',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        fadeOut: {
          '0%': { opacity: '100%' },
          '100%': { opacity: '0%' },
        },
      }),
    },
  },
  plugins: [],
}