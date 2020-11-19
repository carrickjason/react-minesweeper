const magenta = '#f54dbd'
const lightBlue = '#37cbf2'
const yellow = '#ebe267'
const purple = '#ad5aff'
const red = '#f44044'
const blue = '#272F3E'
const darkBlue = '#1B2434'
const white = '#DBEAF8'
const eggshell = '#B7CDE2'

module.exports = {
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    cursor: ['responsive', 'hover', 'focus', 'disabled'],
    borderColor: ['responsive', 'hover', 'focus', 'disabled'],
    borderWidth: ['responsive', 'hover', 'focus', 'disabled'],
    padding: ['responsive', 'hover', 'focus', 'disabled'],
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
        white,
        eggshell,
      },
      borderWidth: {
        12: '12px',
      },
      spacing: {
        sm: '2px',
      },
    },
  },
}
