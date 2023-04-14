import { setPhoneFormDataType } from '@components/pages/RecargaCelular/components/RechargePhoneData/zodValidation';
import { ReactNode } from 'react';

export type RecargaCelularFormValuesType = setPhoneFormDataType & {
  amount?: number;
};

export type ContextData = {
  rechargeFormData: RecargaCelularFormValuesType;
  handleSetRechargeFormData: (value: RecargaCelularFormValuesType) => void;
};

export type ProviderData = {
  children: ReactNode;
};
