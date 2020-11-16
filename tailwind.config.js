const magenta = '#ff48c4'
const lightBlue = '#2bd1fc'
const yellow = '#f3ea5f'
const purple = '#c04df9'
const red = '#ff3f3f'
const blue = '#272F3E'
const darkBlue = '#1B2434'

module.exports = {
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    cursor: ['responsive', 'hover', 'focus', 'disabled'],
  },
  theme: {
    extend: {
      colors: {
        magenta,
        lightBlue,
        yellow,
        purple,
        red,
        blue,
        darkBlue,
      },
    },
  },
}
