import { InputHTMLAttributes, useRef, useState } from 'react';

import * as S from './style';
import { Controller, useFormContext } from 'react-hook-form';
import { Text } from '@components/Typography';
import { IMaskInput } from 'react-imask';

type InputProps = {
  name: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ name, label, ...props }: InputProps) {
  const { control } = useFormContext();
  const [opts, setOpts] = useState({ mask: Number });

  const inputRef = useRef(null);
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
              <S.Input
                {...field}
                {...props}
                id={name}
                mask={'(00) 00000-0000'}
                ref={ref}
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
