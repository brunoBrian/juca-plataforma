import { globalCss } from './theme';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    outline: 0,
    'box-sizing': 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale'
  },

  body: {
    backgroundColor: '$primary',
    color: '$strongest',
    '-webkit-font-smoothing': 'antialiased',
    letterSpacing: '0.04em'
  },

  'body, input, textarea, button': {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '$medium'
  },

  button: {
    cursor: 'pointer',
    border: 'none'
  },

  ul: {
    listStyle: 'none'
  },

  a: {
    textDecoration: 'none'
  }
});
