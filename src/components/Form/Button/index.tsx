import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './style';

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children }: ButtonProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
