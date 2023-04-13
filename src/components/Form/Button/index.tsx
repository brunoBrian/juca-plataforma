import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './style';

type ButtonProps = {
  children: ReactNode;
  variant?: 'basic';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <S.Wrapper {...props} variant={variant}>
      {children}
    </S.Wrapper>
  );
}
