import { Col, Container } from 'react-grid-system';
import Image from 'next/image';
import * as S from './style';
import { Text } from '@components/index';

const footerIcons = [
  {
    href: '#',
    src: '/assets/icon-facebook.svg',
    alt: 'Icone do facebook'
  },
  {
    href: '#',
    src: '/assets/icon-instagram.svg',
    alt: 'Icone do instagram'
  },
  {
    href: '#',
    src: '/assets/icon-youtube.svg',
    alt: 'Icone do youtube'
  },
  {
    href: '#',
    src: '/assets/icon-linkedin.svg',
    alt: 'Icone do linkedin'
  }
];

export function Footer() {
  return (
    <S.Wrapper>
      <Container>
        <S.Content align="center">
          <Col sm={6}>
            <S.SocialContainer>
              {footerIcons.map(icon => (
                <a href="#" key={icon.alt}>
                  <Image width={24} height={24} src={icon.src} alt={icon.alt} />
                </a>
              ))}
            </S.SocialContainer>
          </Col>
          <Col sm={6}>
            <S.Nav>
              <Text color="strong_medium" weight="bold">
                ©2023 VemProJuca.
              </Text>
            </S.Nav>
          </Col>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}
