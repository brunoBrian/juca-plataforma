import { styled } from '@styles/theme';

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$tiny'
});

export const Alert = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$tiny'
});

export const AlertInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column'
});
