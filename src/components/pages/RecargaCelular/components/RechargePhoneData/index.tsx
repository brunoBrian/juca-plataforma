import { Col, Row } from 'react-grid-system';
//import { useState } from 'react';

import * as S from './style';
import { BasicStructure, Button, Input } from '@components/index';

type RechargePhoneDataProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export function RechargePhoneData({
  nextStep,
  prevStep
}: RechargePhoneDataProps) {
  //const [rechargeAmount, setRechargeAmount] = useState(500);

  return (
    <BasicStructure title="Recarga de celular" isForm>
      <Row>
        <Col sm={12}>
          <Input
            name="phone"
            label="Insira o número de telefone com DDD"
            placeholder="00 000000000"
          />

          <Input
            name="confirmed-phone"
            label="Confirme o número de telefone com DDD"
            placeholder="00 000000000"
          />

          <S.Buttons>
            <Button variant="basic" onClick={prevStep}>
              Voltar
            </Button>
            <Button onClick={nextStep}>Próximo passo</Button>
          </S.Buttons>
        </Col>
      </Row>
    </BasicStructure>
  );
}
