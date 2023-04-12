import { ReactNode } from 'react';
import { Container } from 'react-grid-system';

import { Heading } from '@components/Typography';
import * as S from './style';

type BasicStructureProps = {
  children: ReactNode;
  title: string;
};

export function BasicStructure({ children, title }: BasicStructureProps) {
  return (
    <div>
      <Container>
        <S.Header>
          <Heading tag="h1" variant="h1">
            {title}
          </Heading>
        </S.Header>
        {children}
      </Container>
    </div>
  );
}
