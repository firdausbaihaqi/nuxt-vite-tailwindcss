const colors = require('tailwindcss/colors')
const themes = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: colors.lightBlue,
      },
      fontFamily: {
        sans: ['Inter', ...themes.fontFamily.sans],
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
