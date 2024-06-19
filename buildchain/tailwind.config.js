// module exports
module.exports = {
  content: [
    '../src/templates/**/*.{twig,html}',
    '../src/vue/**/*.{vue,html}',
    '../src/css/**/*.{css,pcss,scss}',
  ],
  safelist: [],
  theme: {
    fontSize: {
      'h1-sm': ['2.375rem', {
          lineHeight: '1.4',
          letterSpacing: '0.06em',
          fontWeight: '700',
      }],
      'h1-md': ['3rem', {
          lineHeight: '1.4',
          letterSpacing: '0.06em',
          fontWeight: '700',
      }],
      'h1-lg': ['3.5rem', {
          lineHeight: '1.4',
          letterSpacing: '0.06em',
          fontWeight: '700',
      }],
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  extend: {
  },
  plugins: [],
};