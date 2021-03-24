const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./components/**/*.js', './components/**/*.css'],
  theme: {
    extend: {
      screens: {
        'adoriFull': '816px',
        '3xl': '1920px'
      },
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        blue: colors.lightBlue,
        green: colors.cyan,
        'white-5': 'var(--es-white-5)',
        'white-10': 'var(--es-white-10)',
        'white-20': 'var(--es-white-20)',
        'white-30': 'var(--es-white-30)',
        'white-40': 'var(--es-white-40)',
        'white-50': 'var(--es-white-50)',
        'white-60': 'var(--es-white-60)',
        'white-70': 'var(--es-white-70)',
        'white-80': 'var(--es-white-80)',
        'white-90': 'var(--es-white-90)',
        'black-5': 'var(--es-black-5)',
        'black-10': 'var(--es-black-10)',
        'black-20': 'var(--es-black-20)',
        'black-30': 'var(--es-black-30)',
        'black-40': 'var(--es-black-40)',
        'black-50': 'var(--es-black-50)',
        'black-60': 'var(--es-black-60)',
        'black-70': 'var(--es-black-70)',
        'black-80': 'var(--es-black-80)',
        'black-90': 'var(--es-black-90)',
        black: 'var(--es-black)',
        gray: colors.blueGray
      },
      spacing: {
        28: '7rem',
        'btn-lg': '0.625rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: colors.lightBlue['600'],
              '&:hover': {
                color: colors.lightBlue['700'],
              },
            },
          },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
