import { Col, Row } from 'react-grid-system';

import * as S from './style';
import { BasicStructure } from '../BasicStructure';
import { ReactNode, useState } from 'react';
import { Text } from '@components/Typography';

type PaymentType = {
  title: string;
  id: string;
  active: boolean;
};

type PaymentProps = {
  children: ReactNode;
};

export function Payment({ children }: PaymentProps) {
  const [paymentType, setPaymentType] = useState<PaymentType[]>([
    {
      id: 'pix',
      title: 'Pix',
      active: true
    },
    {
      id: 'credito',
      title: 'Cartão de crédito',
      active: false
    },
    {
      id: 'debito',
      title: 'Cartão de débito',
      active: false
    },
    {
      id: 'dinheiro',
      title: 'Dinheiro',
      active: false
    }
  ]);

  function handleChangePaymentType(id: string) {
    setPaymentType(type => {
      return type.map(tp => {
        tp.id === id ? (tp.active = true) : (tp.active = false);
        return tp;
      });
    });
  }

  return (
    <BasicStructure title="Resumo do pagamento">
      <Row>
        <Col md={6}>
          <S.PaymentInfo>{children}</S.PaymentInfo>
        </Col>
        <Col md={3}>
          <S.PaymentType>
            {paymentType.map(type => (
              <S.PaymentTypeContainer
                key={type.id}
                active={type.active}
                onClick={() => handleChangePaymentType(type.id)}
              >
                <S.PaymentTypeTitle>
                  <div></div>
                  <Text weight="bold">{type.title}</Text>
                </S.PaymentTypeTitle>
                -l
              </S.PaymentTypeContainer>
            ))}
          </S.PaymentType>
        </Col>
        <Col md={3}>
          <S.PaymentTypeInfo>jnjkbjkb</S.PaymentTypeInfo>
        </Col>
      </Row>
    </BasicStructure>
  );
}
