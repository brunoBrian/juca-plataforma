import { styled } from '@styles/theme';

export const Wrapper = styled('button', {
  background: '$primary_band',
  padding: '10px',
  borderRadius: '$small',
  width: '100%',
  color: '$smoothest',
  fontWeight: '$medium',
  fontSize: '$large',

  variants: {
    variant: {
      basic: {
        color: '$primary_band',
        background: '$smoothest',
        border: '2px solid'
      }
    }
  }
});
