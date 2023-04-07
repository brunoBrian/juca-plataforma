import { InputHTMLAttributes } from 'react';

import * as S from './style';

type InputProps = {
  name: string;
  placeholder?: string;
  label?: string;
  value?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({
  name,
  placeholder,
  label,
  value,
  ...props
}: InputProps) {
  return (
    <S.Wrapper>
      {label && <label htmlFor={name}>{label}</label>}
      <S.Input
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </S.Wrapper>
  );
}
