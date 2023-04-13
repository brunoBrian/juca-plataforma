import Head from 'next/head';
import { parseCookies } from 'nookies';
import { GetServerSideProps } from 'next';

import { Payment } from '@components/index';
import { Layout } from '@components/Layout/Layout/layout';
import { PaymentPaymentInfoLabelText } from '@components/Layout/Payment/components';

export default function RecargaCelular() {
  return (
    <>
      <Head>
        <title>Vem pro Juca - Recarga de celular</title>
        <meta
          name="description"
          content="Serviços financeiros sempre perto de você"
        />
      </Head>
      <Payment>
        <PaymentPaymentInfoLabelText
          label="Nome/Razão social:"
          description="Claro Net Telecomunicações S.A"
        />
        <PaymentPaymentInfoLabelText
          label="Valor da recarga:"
          description="R$ 00,00"
          descriptionBig
        />
      </Payment>
    </>
  );
}

RecargaCelular.layout = Layout;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { ['juca.accesstoken']: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
};
