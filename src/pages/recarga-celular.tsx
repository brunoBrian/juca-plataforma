import Head from 'next/head';
import { parseCookies } from 'nookies';
import { GetServerSideProps } from 'next';

import { Payment, RechargeAmount, RechargePhoneData } from '@components/index';
import { Layout } from '@components/Layout/Layout/layout';
import { PaymentPaymentInfoLabelText } from '@components/Layout/Payment/components';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

export default function RecargaCelularPage() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const handleNextStep = useCallback(() => {
    setStep(stp => (stp === 2 ? stp : stp + 1));
  }, []);

  const handlePreviousStep = useCallback(() => {
    setStep(stp => (stp === 0 ? stp : stp - 1));
  }, []);

  const stepComponents = [
    <RechargePhoneData
      key={0}
      nextStep={handleNextStep}
      prevStep={() => router.push('/produtos')}
    />,
    <RechargeAmount
      key={1}
      nextStep={handleNextStep}
      prevStep={handlePreviousStep}
    />,
    <Payment key={2}>
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
  ];

  return (
    <>
      <Head>
        <title>Vem pro Juca - Recarga de celular</title>
        <meta
          name="description"
          content="Serviços financeiros sempre perto de você"
        />
      </Head>

      {stepComponents[step]}
    </>
  );
}

RecargaCelularPage.layout = Layout;

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
