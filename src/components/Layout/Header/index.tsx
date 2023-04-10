import { Col, Container, Row } from 'react-grid-system';
import * as S from './style';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <S.Wrapper>
      <Container>
        <S.Content align="center">
          <Col sm={3}>
            <Link href="#">
              <Image
                width={80}
                height={22}
                src="/small-logo.png"
                alt="Logo Vem pro Juca"
              />
            </Link>
          </Col>
          <Col sm={9}>
            <S.Nav>
              <a href="#">Sair</a>
            </S.Nav>
          </Col>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}
