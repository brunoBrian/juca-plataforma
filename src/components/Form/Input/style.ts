import { styled } from '@styles/theme';

export const Input = styled('input', {
  background: 'transparent',
  padding: '15px',
  borderRadius: '$small',
  width: '100%',
  color: '$strongest',
  fontWeight: '$medium',
  fontSize: '$large',
  border: '1px solid $strongest',
  margin: '5px 0'
});

export const Wrapper = styled('div', {
  margin: '10px 0',

  label: {
    fontWeight: '$bold',
    fontSize: '$large',
    color: '$strong'
  }
});
