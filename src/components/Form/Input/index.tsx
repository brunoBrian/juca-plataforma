import { InputHTMLAttributes, useRef } from 'react';

import * as S from './style';
import { Controller, useFormContext } from 'react-hook-form';
import { Text } from '@components/Typography';

type InputProps = {
  name: string;
  label?: string;
  mask?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ name, label, mask, ...props }: InputProps) {
  const { control } = useFormContext();
  const ref = useRef(null);

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          return (
            <S.Wrapper>
              {label && <label htmlFor={name}>{label}</label>}
              <S.Input {...field} {...props} id={name} mask={mask} ref={ref} />
              {fieldState.error && (
                <Text color="feedback_error" variant="xsmall">
                  {fieldState.error.message}
                </Text>
              )}
            </S.Wrapper>
          );
        }}
      />
    </>
  );
}
