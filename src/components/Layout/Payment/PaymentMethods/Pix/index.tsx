import Image from 'next/image';
import * as S from './style';
import { Heading } from '@components/Typography';

type PaymentPixProps = {
  qrcodeUrl: string;
};

export function PaymentPix({ qrcodeUrl }: PaymentPixProps) {
  return (
    <S.Wrapper>
      <Heading tag="h5" variant="h5" align="center">
        Peça para o seu cliente ler o QR Code com o app de um banco
      </Heading>
      <Image width={207} height={207} src={qrcodeUrl} alt={'Qrcode pix'} />
    </S.Wrapper>
  );
}
