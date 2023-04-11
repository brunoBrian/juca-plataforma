import { styled } from '@styles/theme';
import Link from 'next/link';
import { Col } from 'react-grid-system';

export const Wrapper = styled('div', {
  minHeight: 'calc(100vh - 189px)'
});

export const Content = styled(Col, {
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

export const Card = styled(Link, {
  textDecoration: 'none',
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
