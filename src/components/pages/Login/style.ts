import { styled } from '@styles/theme';

export const Main = styled('header', {
  height: '100vh',

  h2: {
    fontSize: '$large',
    maxWidth: 315
  },

  'h2 a': {
    color: '$primary_band'
  }
});

export const LoginHeader = styled('header', {
  padding: '60px 0'
});

export const LoginContent = styled('div', {
  ul: {
    display: 'flex',
    gap: 50
  },

  'ul li a': {
    color: '$strongest',
    fontSize: '$base',
    fontWeight: '$bold'
  }
});

export const Description = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  height: '100%',
  justifyContent: 'center',

  h1: {
    fontSize: '$heading'
  }
});
