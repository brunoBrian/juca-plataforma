import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './style';

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
}
