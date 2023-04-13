import { styled } from '@styles/theme';

export const Content = styled('div', {
  maxWidth: 590,
  margin: '0 auto'
});

export const CardContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '$tiny',
  marginBottom: '$md'
});

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$tiny',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$smoother',
  padding: '$tiny',
  borderRadius: '$small',
  cursor: 'pointer',

  variants: {
    active: {
      true: {
        border: '1px solid',
        borderColor: '$primary_band'
      }
    }
  }
});

export const Buttons = styled('div', {
  display: 'flex',
  gap: '$tiny',
  marginTop: '$tiny'
});
