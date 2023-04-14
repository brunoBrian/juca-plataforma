import Image from 'next/image';
import { Row } from 'react-grid-system';

import * as S from './style';
import { Heading, Text } from '@components/index';
import { BasicStructure } from '@components/Layout';

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
    link: 'recarga-celular',
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
    <BasicStructure title="Selecione um produto para vender">
      <Row>
        <S.Content component="main">
          {cards.map(card => (
            <S.Card key={card.title} href={card.link}>
              <Image src={card.image} width={80} height={80} alt={card.text} />
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
    </BasicStructure>
  );
}
