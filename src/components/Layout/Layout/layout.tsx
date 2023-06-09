import { ReactNode } from 'react';
import { Footer, Header } from '../';

import * as S from './style';
import { Heading } from '@components/Typography';

type LayoutProps = {
  children: ReactNode;
  title: string;
};

export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Header>
          <Heading tag="h1" variant="h1">
            {title}
          </Heading>
        </S.Header>
        {children}
      </S.Wrapper>
      <Footer />
    </>
  );
}
