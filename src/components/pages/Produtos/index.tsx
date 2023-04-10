import Image from 'next/image';
import { Container, Row } from 'react-grid-system';

import * as S from './style';
import { Heading, Text } from '@components/index';

const cards = [
  {
    image: '#',
    link: '#',
    title: 'Pagar contas e boletos',
    text: 'Pagar'
  },
  {
    image: '#',
    link: '#',
    title: 'Empréstimo',
    text: 'Solicitar'
  },
  {
    image: '#',
    link: '#',
    title: 'TeleSena',
    text: 'Jogar'
  },
  {
    image: '#',
    link: '#',
    title: 'Vale presentes e Gifts cards',
    text: 'Comprar'
  },
  {
    image: '#',
    link: '#',
    title: 'Recarga de celular',
    text: 'Recarregar'
  },
  {
    image: '#',
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
          <S.Content>
            {cards.map(card => (
              <S.Card key={card.text}>
                <p>image</p>
                <Heading tag="h4" variant="h4_bold">
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
