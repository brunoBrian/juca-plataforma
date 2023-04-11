import { ReactNode } from 'react';
import { Footer, Header } from '../';

import * as S from './style';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <S.Wrapper>{children}</S.Wrapper>
      <Footer />
    </>
  );
}
