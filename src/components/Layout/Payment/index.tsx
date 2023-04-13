import Image from 'next/image';
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { Col, Row } from 'react-grid-system';

import * as S from './style';
import { BasicStructure } from '../BasicStructure';
import { Text } from '@components/Typography';
import { GenericMethods, PaymentPix } from './components/PaymentMethods';
import { BoxBackground } from './components/BoxBackground';

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
      <GenericMethods key={1} />,
      <GenericMethods key={2} hideInstallments />,
      <GenericMethods key={3} hideInstallments />
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
        <Col md={5}>
          <BoxBackground>{children}</BoxBackground>
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
        <Col md={4}>{getPaymentTypeInfoComponent(activeType)}</Col>
      </Row>
    </BasicStructure>
  );
}
