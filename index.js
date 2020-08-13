const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = plugin(function ({ addUtilities }) {
  addUtilities({
    '.tw-toast': {
      display: 'inline-flex',
      padding: '0.5rem 1rem',
    }
  });
});
