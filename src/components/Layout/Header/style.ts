import { styled } from '@styles/theme';
import { Row } from 'react-grid-system';

export const Wrapper = styled('header', {
  borderBottom: '1px solid',
  borderColor: '$smoother'
});

export const Content = styled(Row, {
  height: 100
});

export const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'end',

  strong: {
    fontWeight: '$bold',
    color: '$strongest',
    fontSize: '$large',
    cursor: 'pointer'
  }
});
