import { styled } from '@styles/theme';
import { Row } from 'react-grid-system';

export const Wrapper = styled('footer', {
  background: '$smoother'
});

export const Content = styled(Row, {
  height: 88
});

export const SocialContainer = styled(Row, {
  display: 'flex',
  alignItems: 'center',
  gap: 20,

  a: {
    display: 'flex',
    alignItems: 'center'
  }
});

export const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'end'
});
