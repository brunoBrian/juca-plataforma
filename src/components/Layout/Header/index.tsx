import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Col, Container } from 'react-grid-system';

import * as S from './style';
import { removeSessionStorage } from '@utils/localStorage';

export function Header() {
  const router = useRouter();

  function handleLogout() {
    removeSessionStorage();
    router.push('/');
  }

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
              <strong onClick={handleLogout}>Sair</strong>
            </S.Nav>
          </Col>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}
