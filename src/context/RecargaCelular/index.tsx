import { createContext, useState, useContext, useCallback } from 'react';

import {
  ContextData,
  ProviderData,
  RecargaCelularFormValuesType
} from './types';

const RecargaCelularContext = createContext<ContextData | null>(null);

function RecargaCelularProvider({ children }: ProviderData) {
  const [rechargeFormData, setRechargeFormData] =
    useState<RecargaCelularFormValuesType>({
      amount: 500,
      confirmedPhone: '',
      phone: ''
    });

  const handleSetRechargeFormData = useCallback(
    (value: RecargaCelularFormValuesType) => {
      setRechargeFormData(prevState => ({
        ...prevState,
        ...value
      }));
    },
    []
  );

  return (
    <RecargaCelularContext.Provider
      value={{ rechargeFormData, handleSetRechargeFormData }}
    >
      {children}
    </RecargaCelularContext.Provider>
  );
}

function useRecargaCelular(): ContextData {
  const context = useContext(RecargaCelularContext);

  if (!context)
    throw new Error(
      'useRecargaCelular must be used within an RecargaCelularProvider'
    );

  return context;
}

export { useRecargaCelular, RecargaCelularProvider };
