import Image from 'next/image';
import { Col, Container, Row } from 'react-grid-system';
import * as S from './style';

export function Login() {
  return (
    <S.Main>
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
      <Container>
        <Row>
          <Col md={6}>
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
          <Col md={6}>
            <Row>
              <Col md={6}>
                <Image
                  src="/login-rocket.png"
                  alt="Logo do Juca"
                  width={300}
                  height={370}
                  quality={100}
                />
              </Col>
              <Col md={6}>
                <form>
                  <div>
                    <label htmlFor="username">Nome de usuário ou e-mail</label>
                    <input type="text" name="username" id="username" />
                  </div>
                  <div>
                    <label htmlFor="password">Senha</label>
                    <input type="text" name="password" id="password" />
                  </div>

                  <button>Sign in</button>

                  <p>Esqueci minha senha</p>
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </S.Main>
  );
}
