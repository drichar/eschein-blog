module.exports = {
  purge: ['./components/**/*.js', './components/**/*.css'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
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
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#2563EB',
              '&:hover': {
                color: '#1D4ED8',
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
