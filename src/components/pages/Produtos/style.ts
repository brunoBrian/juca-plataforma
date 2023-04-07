import { styled } from '@styles/theme';

export const Wrapper = styled('div', {
  height: '100vh'
});

export const Content = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 20,
  width: '100%',

  '@sm': {
    gridTemplateColumns: '1fr 1fr'
  },

  '@md': {
    gridTemplateColumns: '1fr 1fr 1fr'
  }
});

export const Card = styled('div', {
  background: '$smoother',
  width: '100%',
  borderRadius: '$small',
  height: 185,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,
  padding: 12,
  textAlign: 'center'
});
