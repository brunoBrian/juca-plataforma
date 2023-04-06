import Image from 'next/image';
import { Col, Container, Row } from 'react-grid-system';
import * as S from './style';
import { Button, Input } from '@components/Form';

export function Login() {
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
                  <S.Form>
                    <Input
                      value=""
                      onChange={() => 'a'}
                      type="text"
                      name="username"
                      placeholder="Nome de usuário ou e-mail"
                      label="Nome de usuário ou e-mail"
                    />
                    <Input
                      value=""
                      onChange={() => 'a'}
                      type="password"
                      name="password"
                      placeholder="sua senha"
                      label="Senha"
                    />

                    <Button>Sign in</Button>

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
