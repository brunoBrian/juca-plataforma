import Image from 'next/image';
import * as S from './style';
import { Heading, Text } from '@components/Typography';
import { Button } from '@components/Form';
import { BoxBackground } from '../../BoxBackground';

type PaymentPixProps = {
  qrcodeUrl?: string;
};

export function GenericMethods({ qrcodeUrl }: PaymentPixProps) {
  return (
    <S.Wrapper>
      <Heading tag="h5" variant="h5_bold">
        Valor total: <b>R$ 00,00</b>
      </Heading>

      <div>
        <Text variant="large_bold" color="strong">
          Parcelar pagamento
        </Text>
        <select name="" id=""></select>
      </div>

      <BoxBackground>
        <div>
          <Heading tag="h5" variant="h5">
            Cobrar do cliente: <b>R$ 00,00</b>
          </Heading>
          <Heading tag="h5" variant="h5">
            Parcelado em: <b>10X de R$ 0,00</b>
          </Heading>
        </div>
      </BoxBackground>

      <Button>Confirmar pagamento</Button>

      <BoxBackground bordered>
        <S.Alert>
          <Image
            width={24}
            height={24}
            src={'assets/icon-warning.svg'}
            alt={'icone de alerta'}
          />
          <S.AlertInfo>
            <Text variant="large_bold" color="strong">
              Fique atento.
            </Text>
            <Text tag="span" variant="large" color="strong">
              Confirme o pagamento somente após a cobrança ser finalizada.
            </Text>
          </S.AlertInfo>
        </S.Alert>
      </BoxBackground>
    </S.Wrapper>
  );
}
