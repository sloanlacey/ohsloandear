/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      zilla: [
        'Zilla Slab',
        'serif',
      ],
      open: [
        'Open Sans',
        'sans-serif',
      ],
      silk: [
        'Silkscreen',
        'cursive',
      ],
    },
    colors: {
      'background-black': '#121212',
      'light-green': '#34FEBB',
      'dark-green': '#32AE85',
    },
    maxWidth: {
      'full-width-wrap': '1440px',
    }
  },
  plugins: [],
}
