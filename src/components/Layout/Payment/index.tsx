import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { Col, Row } from 'react-grid-system';

import * as S from './style';
import { BasicStructure } from '../BasicStructure';
import { Text } from '@components/Typography';
import Image from 'next/image';
import { PaymentPix } from './PaymentMethods';

type PaymentTypeName = 'pix' | 'credito' | 'debito' | 'dinheiro';

type PaymentType = {
  title: string;
  id: PaymentTypeName;
  active: boolean;
};

type PaymentProps = {
  children: ReactNode;
};

export function Payment({ children }: PaymentProps) {
  const [activeType, setActiveType] = useState(0);
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

  const paymentTypeSteps = useMemo(
    () => [
      <PaymentPix key={0} qrcodeUrl="/assets/qrcode.png" />,
      <h1 key={1}>Segundo</h1>,
      <h1 key={2}>Terceiro</h1>,
      <h1 key={3}>Quarto</h1>
    ],
    []
  );

  const getPaymentTypeInfoComponent = useCallback(
    (step: number) => {
      return paymentTypeSteps[step];
    },
    [paymentTypeSteps]
  );

  useEffect(() => {
    setPaymentType(paymentType => {
      return paymentType.map((type, index) => {
        index === activeType ? (type.active = true) : (type.active = false);
        return type;
      });
    });
  }, [activeType]);

  return (
    <BasicStructure title="Resumo do pagamento">
      <Row>
        <Col md={6}>
          <S.PaymentInfo>{children}</S.PaymentInfo>
        </Col>
        <Col md={3}>
          <S.PaymentType>
            {paymentType.map((type, index) => (
              <S.PaymentTypeContainer
                key={type.id}
                active={type.active}
                onClick={() => setActiveType(index)}
              >
                <S.PaymentTypeTitle>
                  <div></div>
                  <Text weight="bold">{type.title}</Text>
                </S.PaymentTypeTitle>
                <Image
                  width={24}
                  height={24}
                  src={'assets/arrow-right.svg'}
                  alt={'icone de seleção'}
                />
              </S.PaymentTypeContainer>
            ))}
          </S.PaymentType>
        </Col>
        <Col md={3}>
          <S.PaymentTypeInfo>
            {getPaymentTypeInfoComponent(activeType)}
          </S.PaymentTypeInfo>
        </Col>
      </Row>
    </BasicStructure>
  );
}
