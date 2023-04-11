import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Col, Container, Row } from 'react-grid-system';

import * as S from './style';
import { Button, Input } from '@components/Form';
import { authLogin } from '@services/Session';
import { setStoreData } from '@utils/localStorage';
import { AuthData } from '@services/Session/types';

export function Login() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const target = event.currentTarget;

    const body = {
      username: target.username.value,
      password: target.password.value
    };

    if (body.username && body.password) {
      setLoading(true);
      setError('');

      try {
        const { access_token, refresh_token } = await authLogin(body);

        setStoreData<AuthData>('USER_DATA', {
          access_token,
          refresh_token
        });
        router.push('/produtos');
      } catch (err) {
        setError(err.response.data.error_description);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <S.Wrapper>
      <S.LoginHeader>
        <Container>
          <Row>
            <Col md={10}>
              <S.LoginContent>
                <ul>
                  <li>
                    <a href="#">Institucional </a>
                  </li>
                  <li>
                    <a href="#">Quero ser ponto Juca</a>
                  </li>
                </ul>
              </S.LoginContent>
            </Col>
          </Row>
        </Container>
      </S.LoginHeader>
      <S.Main>
        <Container>
          <Row align="center">
            <Col lg={5} md={6}>
              <S.Description>
                <Image
                  src="/login-logo.png"
                  alt="Logo do Juca"
                  width={200}
                  height={56}
                />
                <h1>Ajudando comércios a faturarem como um banco.</h1>
              </S.Description>
              <h2>
                Se você ainda não possui uma conta, é bem simples,
                <a href="#"> crie a sua aqui</a>!
              </h2>
            </Col>
            <Col lg={7} md={6}>
              <Row align="center">
                <Col lg={6} md={0} className="rocket-image-container">
                  <Image
                    src="/login-rocket.png"
                    alt="Logo do Juca"
                    width={300}
                    height={370}
                    quality={100}
                  />
                </Col>
                <Col md={12} lg={6}>
                  <S.Form onSubmit={handleLogin}>
                    <Input
                      type="text"
                      name="username"
                      placeholder="Nome de usuário ou e-mail"
                      label="Nome de usuário ou e-mail"
                    />
                    <Input
                      type="password"
                      name="password"
                      placeholder="sua senha"
                      label="Senha"
                    />

                    <br />
                    <Button>{loading ? 'Carregando' : 'Sign in'}</Button>
                    {error && <span>{error}</span>}

                    <a href="#">Esqueci minha senha</a>
                  </S.Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </S.Main>
    </S.Wrapper>
  );
}
