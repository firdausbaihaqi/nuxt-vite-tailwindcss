const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: colors.lightBlue,
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
