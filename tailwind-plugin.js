const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(() => {
  return function ({ addComponents }) {

    addComponents({
      '@media (prefers-reduced-motion: reduce), (update: slow)': {
        '.custom': {
          color: 'red',
        },
      },
    })
  }
})