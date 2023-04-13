import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './style';

type ButtonProps = {
  children: ReactNode;
  variant?: 'basic';
  size?: 'sm';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <S.Wrapper {...props} variant={variant} size={size}>
      {children}
    </S.Wrapper>
  );
}
