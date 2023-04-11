import Image from 'next/image';
import { Container, Row } from 'react-grid-system';

import * as S from './style';
import { Heading, Text } from '@components/index';

const cards = [
  {
    image: '/pagar-boleto.png',
    link: '#',
    title: 'Pagar contas e boletos',
    text: 'Pagar'
  },
  {
    image: '/emprestimo.png',
    link: '#',
    title: 'Empréstimo',
    text: 'Solicitar'
  },
  {
    image: '/megasena.png',
    link: '#',
    title: 'TeleSena',
    text: 'Jogar'
  },
  {
    image: '/vale-presente.png',
    link: '#',
    title: 'Vale presentes e Gifts cards',
    text: 'Comprar'
  },
  {
    image: '/recarga-celular.png',
    link: '#',
    title: 'Recarga de celular',
    text: 'Recarregar'
  },
  {
    image: '/megasena.png',
    link: '#',
    title: 'Mega Sena',
    text: 'Jogar'
  }
];

export function Produtos() {
  return (
    <S.Wrapper>
      <Container>
        <Row>
          <S.Content component="main">
            {cards.map(card => (
              <S.Card key={card.text} href={card.link}>
                <Image
                  src={card.image}
                  width={80}
                  height={80}
                  alt={card.text}
                />
                <Heading tag="h4" variant="h4_bold" color="strongest">
                  {card.title}
                </Heading>
                <Text tag="p" variant="large_bold" color="primary_band">
                  {card.text}
                </Text>
              </S.Card>
            ))}
          </S.Content>
        </Row>
      </Container>
    </S.Wrapper>
  );
}
