import { styled } from '@styles/theme';

export const Wrapper = styled('div', {
  height: '100vh',
  background: '$loginBg',

  h2: {
    fontSize: '$large',
    maxWidth: 315
  },

  'h2 a': {
    color: '$primary_band'
  },

  '.rocket-image-container': {
    display: 'none'
  },

  '@lg': {
    '.rocket-image-container': {
      display: 'flex'
    }
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

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  height: '100%',
  justifyContent: 'center',
  marginBottom: 60,

  h1: {
    fontSize: '$heading'
  }
});

export const Main = styled('main', {
  height: 'calc(100% - 138px)',
  display: 'flex',
  alignItems: 'center'
});

export const Form = styled('form', {
  marginTop: '$lg',

  '@md': {
    marginTop: 0
  },

  a: {
    display: 'block',
    fontWeight: '$bold',
    fontSize: '$small',
    color: '$medium',
    margin: '24px 0'
  }
});
