import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import { PaymentPaymentInfoLabelText } from '@components/Layout/Payment/components';
import { Payment } from '@components/Layout';
import { RechargeAmount, RechargePhoneData } from './components';

export function RecargaCelular() {
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
    <Payment key={2} handleBackButtonAction={handlePreviousStep}>
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

  return <>{stepComponents[step]}</>;
}
