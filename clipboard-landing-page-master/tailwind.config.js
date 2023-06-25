/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
          'strong-cyan': 'hsl(171, 66%, 44%)',
          'light-blue': 'hsl(233, 100%, 69%)',
          'dark-grayish-blue': 'hsl(210, 10%, 33%)',
          'grayish-blue': 'hsl(201, 11%, 66%)',
      },
      fontFamily: {
        'barlow-semi-condensed': ['"Barlow Semi Condensed"', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
}

