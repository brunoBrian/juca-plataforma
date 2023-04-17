import { Col, Row } from 'react-grid-system';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as S from './style';
import { Button, Input } from '@components/index';
import { BasicStructure } from '@components/Layout';
import { setPhoneFormDataType, setPhoneFormSchema } from './zodValidation';
import { useRecargaCelular } from 'context';
import { utilsPhoneWithDDD } from '@utils/formats';

type RechargePhoneDataProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export function RechargePhoneData({
  nextStep,
  prevStep
}: RechargePhoneDataProps) {
  const {
    handleSetRechargeFormData,
    rechargeFormData: { confirmedPhone, phone }
  } = useRecargaCelular();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<setPhoneFormDataType>({
    resolver: zodResolver(setPhoneFormSchema),
    defaultValues: {
      phone: utilsPhoneWithDDD.masked(phone),
      confirmedPhone: utilsPhoneWithDDD.masked(confirmedPhone)
    }
  });

  function handleSetPhone(data: setPhoneFormDataType) {
    handleSetRechargeFormData(data);
    nextStep();
  }

  return (
    <BasicStructure title="Recarga de celular" isForm>
      <Row>
        <Col sm={12}>
          <form onSubmit={handleSubmit(handleSetPhone)}>
            <Input
              {...register('phone')}
              label="Insira o número de telefone com DDD"
              placeholder="00 000000000"
              mask={val => utilsPhoneWithDDD.masked(val)}
              error={errors.phone?.message}
            />
            <Input
              {...register('confirmedPhone')}
              label="Confirme o número de telefone com DDD"
              placeholder="00 000000000"
              mask={val => utilsPhoneWithDDD.masked(val)}
              error={errors.confirmedPhone?.message}
            />

            <S.Buttons>
              <Button variant="basic" onClick={prevStep}>
                Voltar
              </Button>
              <Button>Próximo passo</Button>
            </S.Buttons>
          </form>
        </Col>
      </Row>
    </BasicStructure>
  );
}
