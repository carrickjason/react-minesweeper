const magenta = '#F54DBD'
const lightBlue = '#37CBF2'
const yellow = '#EBE267'
const purple = '#AD5AFF'
const red = '#F44044'
const blue = '#272F3E'
const darkBlue = '#1B2434'
const white = '#DBEAF8'
const eggshell = '#B7CDE2'
const green = '#37F2B3'
const orange = '#F29137'
const dustyBlue = '#677BFF'

module.exports = {
  variants: {
    borderColor: ['hover', 'focus'],
    borderWidth: ['hover', 'focus'],
    padding: ['hover', 'focus'],
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
        green,
        orange,
        dustyBlue,
      },
      borderWidth: {
        12: '12px',
      },
      spacing: {
        sm: '2px',
      },
      screens: {
        xs: '480px',
      },
    },
  },
}
