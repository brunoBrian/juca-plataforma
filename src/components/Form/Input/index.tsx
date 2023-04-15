import { InputHTMLAttributes } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Mask } from 'maska';

import * as S from './style';
import { Text } from '@components/Typography';

type InputProps = {
  name: string;
  label?: string;
  mask?: Mask;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ name, label, mask, ...props }: InputProps) {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          return (
            <S.Wrapper>
              {label && <label htmlFor={name}>{label}</label>}
              <S.Input
                {...props}
                {...field}
                id={name}
                onChange={e => {
                  e.target.value = mask
                    ? mask.masked(e.target.value)
                    : e.target.value;
                  field.onChange(e);
                }}
              />
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
