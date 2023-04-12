import { styled } from '@styles/theme';

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$tiny',
  background: '$smoother',
  borderRadius: '$small',
  padding: '$tiny',

  variants: {
    bordered: {
      true: {
        border: '2px solid',
        borderColor: '$smooth'
      }
    }
  }
});
