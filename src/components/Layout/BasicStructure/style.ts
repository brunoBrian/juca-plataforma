import { styled } from '@styles/theme';
import { Container } from 'react-grid-system';

export const Header = styled('div', {
  marginBottom: '$md'
});

export const Content = styled(Container, {
  variants: {
    small: {
      true: {
        maxWidth: '440px !important'
      }
    }
  }
});
