import { Col, Row } from 'react-grid-system';

import * as S from './style';
import { Button, Heading, Text } from '@components/index';
import { BasicStructure } from '@components/Layout';
import { useRecargaCelular } from 'context';

const cards = [
  {
    value: 500,
    text: 'R$ 5,00'
  },
  {
    value: 1500,
    text: 'R$ 15,00'
  },
  {
    value: 2500,
    text: 'R$ 25,00'
  },
  {
    value: 5000,
    text: 'R$ 50,00'
  }
];

type RechargeAmountProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export function RechargeAmount({ nextStep, prevStep }: RechargeAmountProps) {
  const {
    handleSetRechargeFormData,
    rechargeFormData: { amount }
  } = useRecargaCelular();

  return (
    <BasicStructure title="Escolha o valor da recarga" align="center">
      <Row>
        <Col sm={12}>
          <S.Content>
            <S.CardContainer>
              {cards.map(card => (
                <S.Card
                  key={card.text}
                  active={amount === card.value}
                  onClick={() =>
                    handleSetRechargeFormData({ amount: card.value })
                  }
                >
                  <Heading weight="bold" tag="h5" variant="h4_bold">
                    {card.text}
                  </Heading>
                  <Text color="primary_band" variant="large_bold">
                    Selecionar
                  </Text>
                </S.Card>
              ))}
            </S.CardContainer>

            <S.Buttons>
              <Button variant="basic" onClick={prevStep}>
                Voltar
              </Button>
              <Button onClick={nextStep}>Ir para pagamento</Button>
            </S.Buttons>
          </S.Content>
        </Col>
      </Row>
    </BasicStructure>
  );
}
