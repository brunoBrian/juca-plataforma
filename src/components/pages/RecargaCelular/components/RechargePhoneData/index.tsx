import { Col, Row } from 'react-grid-system';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import * as S from './style';
import { BasicStructure, Button, Input } from '@components/index';

type RechargePhoneDataProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const setPhoneFormSchema = z
  .object({
    phone: z
      .string({
        required_error: 'Preencha o número de telefone'
      })
      .length(15, { message: 'Preencha o número de telefone corretamente' }),
    confirmedPhone: z.string({
      required_error: 'Confirme o número de telefone'
    })
  })
  .refine(data => data.confirmedPhone === data.phone, {
    message: 'Os telefones precisam ser iguais',
    path: ['confirmedPhone']
  });

type setPhoneFormData = z.infer<typeof setPhoneFormSchema>;

export function RechargePhoneData({
  nextStep,
  prevStep
}: RechargePhoneDataProps) {
  const methods = useForm<setPhoneFormData>({
    resolver: zodResolver(setPhoneFormSchema)
  });

  function handleSetPhone(data: setPhoneFormData) {
    console.log(data);
    nextStep();
  }

  return (
    <BasicStructure title="Recarga de celular" isForm>
      <Row>
        <Col sm={12}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSetPhone)}>
              <Input
                name="phone"
                label="Insira o número de telefone com DDD"
                placeholder="00 000000000"
              />
              <Input
                name="confirmedPhone"
                label="Confirme o número de telefone com DDD"
                placeholder="00 000000000"
              />

              <S.Buttons>
                <Button variant="basic" onClick={prevStep}>
                  Voltar
                </Button>
                <Button>Próximo passo</Button>
              </S.Buttons>
            </form>
          </FormProvider>
        </Col>
      </Row>
    </BasicStructure>
  );
}
