import { InputHTMLAttributes, forwardRef } from 'react';

import * as S from './style';
import { Text } from '@components/Typography';

type InputProps = {
  name: string;
  label?: string;
  error?: string;
  mask?: (value: string) => string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, mask, error, ...rest }, ref) => {
    return (
      <S.Wrapper>
        {label && <label htmlFor={name}>{label}</label>}
        <S.Input
          {...rest}
          ref={ref}
          name={name}
          onChange={e => {
            e.target.value = mask ? mask(e.target.value) : e.target.value;
            rest.onChange(e);
          }}
        />
        {error && (
          <Text color="feedback_error" variant="xsmall">
            {error}
          </Text>
        )}
      </S.Wrapper>
    );
  }
);
